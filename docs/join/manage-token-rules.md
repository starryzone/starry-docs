---
sidebar_position: 2
---

# Manage Token Rules

4 of the Slash Commands provided by Starrybot are for token rule management. Add, edit and remove can be used by guild admins to configure the token rules for the server as desired. List can be used by any discord server member to see which roles are available for acquiring on the server.

:::caution Limitation

Be aware that we are still in the process of implementing the appropriate role-removal mechanisms. Discord users who /join on your guild today will retain the roles even if they no longer quality based on your configured rule.

:::

## Token Rule Add

When adding a new token rule, discord admin are prompted to configure the following:

* What kind of token?
* How many of your chosen token type?
* What is the role name?
* Count only staked tokens?

We currently recognize:
* **Native Tokens**: `JUNO`, `STARS`
* **CW20 Tokens**: CW20 Address/Governance Token, DAODAO URL
* **CW721 Tokens**: CW721 Address, Stargaze Launchpad URL

Upon successful completion of the steps, Starrybot will automatically add the desired Discord Role to the guild and save the desired rule in the database. Users will begin receiving the role if they qualify the next time they `/join`.

:::note Debugging Tips

If you have been kicking and reinstalling Starrybot to try things out and discover it's now struggling to work correctly, be aware that the bot relies on having a **higher role in the server roles list** than the roles it's trying to add.

:::

## Token Rule Edit

After a token rule has been created, the token rule edit command should allow you to change your mind for any of the steps from the add flow. This command will first list the configured token rules and what they are configured with before prompting 


## Token Rule List

This command is effectively a pared down version of Token Rule Edit, providing only the list of the configured token rules without prompting for any actions.

## Token Rule Remove

As you may expect, this command allows you to remove a token rule altogether. Behind the scenes, this first removes the role from the Discord server, then removes the token rule record from the database.

Because this is a destruction action, there is an additional confirmation step before we execute.

:::caution Removed Roles cannot be re-added to the original users

Token Rule Removal has the (normal) side-effect of removing the role from all discord users. We don't track which users have which roles, so we don't have a way to ctrl+z a token rule removal. If this happens mistakenly, you may unfortunately need to just remake your token rule and ask your guild members to rejoin.

:::
