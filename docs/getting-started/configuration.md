---
title: Configuration
---

# Configuration

Harmonix is designed with practical default settings to boost your productivity.

---

Harmonix is preset to handle a broad range of use cases right out of the box. To customize these settings, users can modify the `harmonix.config.ts` file.

### Harmonix Configuration

Located at the root of any Harmonix project, the `harmonix.config.ts` file provides a way to override the default bot settings.

Below is an example of a configuration file. It exports the `defineHarmonixConfig` function, which includes an object representing your specific settings.

::: code-group

```ts [harmonix.config.ts]
import { defineHarmonixConfig } from '@harmonix-js/core'

export default defineHarmonixConfig({
  client: {
    intents: [...]
  }
})
```

:::

### Environment Variables

Harmonix supports the use of environment variables to store sensitive information, such as your bot token. You just have to add a `.env` file to the root of your project and include the following variables `DISCORD_CLIENT_TOKEN`:

```
DISCORD_CLIENT_TOKEN="XXXXXXXXXXXXXXXXXX"
```
