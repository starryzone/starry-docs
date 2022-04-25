---
sidebar_position: 3
slug: '/docs/join/join'
---

# Join

The `/starry join` Slash Command allows Discord Users to link their Keplr Wallet via an offline-signing verification method. **This method allows us to verify discord users without gas fees.**

With this link, we can calculate which Discord roles they should be granted (or revoked) from the user. Starrybot does this by looping through the token rules configured for the server, querying the appropriate RPC/LCD to see how much the linked Keplr Wallet holds for each rule's token, and then comparing the final balance with each rule's minimum.

The verification webapp will display the roles successfully added or removed when the calculation finishes.

### Caveats 

* Servers with many rules configured may find the `/starry join` command take some time, as the RPC/LCD queries are currently done synchronously.

* When a token rule is edited today, discord users must re-run the `/starry join` command individually to pick up any relevant changes.

* When a user no longer qualifies for a token rule, there is not yet an automatic mechanism for removing the role. A subsequent `/starry join` will update the roles accordingly, however.