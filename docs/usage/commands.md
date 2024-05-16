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
  (client, message) => {
    message.reply(`Pong ${client.ws.ping}ms!`)
  }
)
```

:::

## Slash Commands

Slash commands allows users to interact with your bot using a command menu. Slash commands are registered with Discord and can be accessed by typing `/` followed by the command name. Here is an example to define a slash command:

::: code-group

```ts [commands/utils/ping.ts]
import { defineCommand } from '@harmonix-js/core'

export default defineCommand(
	{
		description: 'Pong!',
		slash: true
	},
	(client, interaction) => {
		interaction.reply(`Pong ${client.ws.ping}ms!`)
	}
)
```

:::

::: tip

You can also ends the command file with `.slash.ts` to automatically register the command as a slash command.
For our example, the file should be named `ping.slash.ts`.

:::

## Command Options

Commands can be customized using the following options:

- `name`: *Will automatically use the filename if not provided.*
- `description`: A brief description of the command.
- `slash`: Whether the command should be registered as a slash command. (or ends the file with `.slash.ts`)
- `category`: *Will automatically use the parent directory name if not provided.*
- `args`: A record of arguments that the command accepts.
- `preconditions`: An array of preconditions that must be met before the command can be executed.
- `nsfw`: Whether the command should only be available in NSFW channels. **(Only available for slash commands)**
- `userPermissions`: An array of permissions that the user must have to execute the command. **(Only available for slash commands)**

## Command Arguments

Commands can accept arguments from the user. Arguments are parsed automatically based on the provided type.

### Example

::: code-group

```ts [commands/moderation/kick.ts]
import { defineCommand } from '@harmonix-js/core'

export default defineCommand(
	{
		description: 'Kick a user from the server.',
		args: {
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
	(client, message, context) => {
		const { user, reason } = context.args

		user.kick(reason)
		message.reply(`Kicked ${user.username} for ${reason}`)
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
	(client, message, context) => {
		// Command logic
	}
)
```

:::
