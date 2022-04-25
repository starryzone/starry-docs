---
sidebar_position: 5
---

# Farewell

The `/starry farewell` command is the recommended method of uninstalling Starrybot from your server.

Behind the scenes, it will first remove all Discord Roles associated with your guild, then delete all token rules associated with your guild, and then finally remove itself from your guild.

Because this is a destruction action, there is an additional confirmation step before we execute.

:::caution Removed Roles cannot be re-added to the original users

Like with `/token-rule remove`, when the Discord roles are removed as part of this process, we currently cannot restore the role assignments if Starrybot is re-added.

:::
