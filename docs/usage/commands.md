---
title: Commands
---

# Commands

Commands are the primary way to interact with your bot. They are triggered by a prefix followed by a command name and any arguments. Commands can be used to perform a wide range of actions, from simple responses to complex operations.

## Command Structure

Commands are defined in separate files within the `commands/[category]/` directory. Each command file exports a function that defines the command's behavior.

### Example

::: code-group

```ts [commands/utils/ping.ts]
import { defineCommand } from '@harmonix-js/core'

export default defineCommand(
  {
    description: 'Pong!'
  },
  (client, interaction) => {
    interaction.reply(`Pong ${client.ws.ping}ms!`)
  }
)
```

:::

## Command Options

Commands can be customized using the following options:

- `name`: _Will automatically use the filename if not provided._
- `description`: A brief description of the command.
- `category`: _Will automatically use the parent directory name if not provided._
- `options`: A record of options that the command accepts.
- `nsfw`: Whether the command should only be available in NSFW channels.
- `userPermissions`: An array of permissions that the user must have to execute the command.
- `guildOnly`: Whether the command can only be executed in a guild.
- `preconditions`: An array of preconditions that must be met before the command can be executed.

## Command Options

Commands can accept options from the user. Options are parsed automatically based on the provided type.

### Example

::: code-group

```ts [commands/moderation/kick.ts]
import { defineCommand } from '@harmonix-js/core'

export default defineCommand(
  {
    description: 'Kick a user from the server.',
    options: {
      user: {
        type: 'User',
        description: 'The user to kick.'
      },
      reason: {
        type: 'String',
        description: 'The reason for the kick.'
      }
    }
  },
  (client, interaction, context) => {
    const { user, reason } = context.options

    user.kick(reason)
    interaction.reply(`Kicked ${user.username} for ${reason}`)
  }
)
```

:::

## Precondition

Preconditions are used to restrict access to commands based on user permissions, roles, or other conditions. Precondition functions are defined in separate files within the `preconditions` directory.

The file name must be used in the `preconditions` property of the command.
For example with the precondition defined in `preconditions/ownerOnly.ts`:

::: code-group

```ts [commands/dev/eval.ts]
import { defineCommand } from '@harmonix-js/core'

export default defineCommand(
  {
    description: 'Evaluate JavaScript code.',
    args: {
      code: {
        type: 'String',
        description: 'The code to evaluate.'
      }
    },
    preconditions: ['ownerOnly']
  },
  (client, interaction, context) => {
    // Command logic
  }
)
```

:::
