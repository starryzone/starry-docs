---
sidebar_position: 1
---

# Overview

Starrybot provides the ability to grant specific Discord roles based on the tokens held by the discord members.

So far, we've seen it mostly used to facilitate hodler conversations, encourage DAO engagement, and promote NFT adoption. If you use Starrybot for something else, we'd love to know!

## Slash Commands

Starrybot currently provides the following Admin Only Slash Commands when installed:

* `/starry token-rule add` - Add a new token rule
* `/starry token-rule edit` - Edit a token rule's name or amount
* `/starry token-rule remove` - Remove token rule
* `/starry health` - Run diagnostics for starrybot
* `/starry farewell` - Kick starrybot itself from your guild

Non-admin members can see and run the following commands:

* `/starry token-rule list` - List all token rules for this guid
* `/starry join` - Get link to verify your account with Keplr

Many of these slash commands provide a sequence of steps akin to an installation wizard, and will prompt for a specific emoji reaction, button selection, or user input directly.

:::tip

The slash command wizards will automatically time out if abandoned after a certain period of time, as to avoid unexpected behavior. 

:::

## Message Commands

Starrybot does not yet provide any message commands. Stay tuned.
