---
title: Buttons
---

# Buttons

Buttons are interactive components that can be added to messages to allow users to interact with your bot. They can be used to trigger commands, navigate to URLs, and more.

### Example

::: code-group

```ts [buttons/hello.ts]
import { defineButton } from '@harmonix-js/core'

export default defineButton(
  {
    label: 'Say hello!',
    style: 'Primary'
  },
  (interaction) => {
    interaction.reply('Hello!')
  }
)
```

:::

### Button Options

Buttons can be customized using the following options:

- `id`: The unique identifier for the button.
- `label`: The text displayed on the button.
- `emoji`: The emoji displayed on the button.
- `style`: The style of the button. Can be `Primary`, `Secondary`, `Success`, `Danger`, or `Link`.
- `url`: The URL to navigate to when the button is clicked.
- `disabled`: Whether the button is disabled.

### Using Buttons

Buttons can be imported using `getButton` function and be added to messages using the `components` property of the `interaction.reply` method. You can use the `useActionRow` function to create a row.

### Example

::: code-group

```ts [commands/utils/hello.ts]
import { defineCommand, getButton, useActionRow } from '@harmonix-js/core'

export default defineCommand(
	{
		description: 'Say hello!'
	},
	(_, interaction) => {
		const button = getButton('hello')
		const row = useActionRow(button)

		interaction.reply({
			content: 'Click the button to say hello!',
			components: [row]
		})
	}
)
```

::: info

The `getButton` function is used to import the button with the specified ID. By default, the ID is the filename without the extension.

:::
