---
sidebar_position: 4
---

# Health

The `/starry health` slash command runs a diagnostic check to identify if anything may be interfering with Starrybot's ability to perform correctly.

The results currently list 2 types of diagnostics:

* Whether any specific RPC/LCD endpoints are down
* Whether any of the Token Rules configured for the server have an incorrect Discord permission

:::caution Limitation

This command has grown increasingly laggy as we've added support for new chains. In the future, this command will be updated to correctly take advantage of Discord's built-in message editing feature, so that the message can be updated as each endpoint takes their time returning.

:::
