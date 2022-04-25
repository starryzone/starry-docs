---
sidebar_position: 2
---

# Discord

The implementation described below comes mostly from `discord.js`.

## Permissions

At a high level, Starrybot essentially needs to be able to:

* Detect whether or not it is being interacted with via slash command, text response, button press and emoji reaction
* Send both private and public messages to users that interact with it
* View, add, and remove guild roles corresponding with the token rules managed by the bot
* Add and remove roles for a specific user after validating the token rules they qualified for

Discord provides a notion of [Intents](https://discordpy.readthedocs.io/en/stable/intents.html) for bots to indicate what information they're interested in subscribing to and using. We currently configure the following intents:

* Guilds: To see the token roles configured on a guild
* Guild Messages: To see Discord user responses to the bot
* Guild Members: To add/remove applicable token roles for a specific Discord user
* Guild Message Reactions: To see emoji reactions to the bot
* Guild Integrations: ???

:::info To Do
The Starrybot homepage currently recommends installing the bot with the `Application Commands` and `bot` scopes, and permission level of `8`. However, this may be a larger set of permissions than the bot actually needs. Please let us know if you have a more appropriate configuration for us to suggest!
:::

## Event Handlers

Starrybot is currently subscribed to the following Discord events:

### ready

This event is received when the Discord Bot Server has successfully restarted. At this time, Starrybot does not do anything meaningful with this event.

### guildCreate

This event is received when Starrybot has been added to a Discord server.

On `guildCreate`, Starrybot will attempt to register the bot's configured Slash Commands with the guild, then emit either a success/welcome or an error message based on the results.

### interactionCreate

This event is received when Starrybot has been directly interacted with, such as via Slash Command or button press from a Starrybot message embed.

On `interactionCreate`, Starrybot will check to see if the interaction is a Slash Command or something else. If the interaction is a valid Slash Command, Starrybot will attempt to initiate the corresponding Wizard. Otherwise, Starrybot will notify the Wizardware an interaction has happened, and that an existing Wizard may need to be continued.

### messageCreate

This event is received when a message has been sent in a channel that Starrybot is in.

On `messageCreate`, Starrybot will attempt to continue an existing Wizard that's awaiting text input for the next step. Note: Starrybot will ignore all messages sent by bots.

### messageReactionAdd

This event is received when a Discord user has added an emoji reaction on a message that Starrybot can see.

On `messageReactionAdd`, Starrybot will attempt to continue an existing Wizard that's awaiting an emoji reaction for the next step. Note: Starrybot will ignore all reactions added by bots.

## Application Commands

While Discord now has Slash, User, and Message Commands available, Starrybot currently only configures Slash Commands when installed.

Strictly speaking, Starrybot only installs "one" command: `/starry`. All of the Slash Commands provided by Starrybot are considered subcommands/subcommand groups of this main command. This file installs our main command with the recommended method from the [Discord Command Handling Tutorial](https://discordjs.guide/creating-your-bot/command-handling.html#command-handling).

:::info To Do
Starrybot is currently registering the Slash Commands scoped to the Guild, [rather than globally](https://discord.com/developers/docs/interactions/application-commands#registering-a-command) for all users of the bot. While this was helpful for initial implementation, this has the side effect of not automatically updating guilds with changes to the slash commands as the bot gets deployed with more recent code. Now that the bot's workflow has stabilized, it may finally be time to swap over to the recommended path.
:::
