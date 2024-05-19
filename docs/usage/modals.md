---
title: Modals
---

# Modals

Modals are a way to display a form to the user. They can be used to collect information or confirm an action.

### Example

::: code-group

```ts [modals/form.ts]
import { defineModal } from '@harmonix-js/core'

export default defineModal(
  {
    title: 'Form',
    inputs: {
      color: {
        label: 'Favorite color',
        style: 'Short',
        placeholder: 'Enter your favorite color'
      },
      hobbies: {
        label: 'Hobbies',
        style: 'Paragraph',
        placeholder: 'Enter your hobbies'
      }
    }
  },
  (interaction, context) => {
    const { color } = context.inputs

    interaction.reply(`Submitted color: ${color}`)
  }
)
```

:::

### Modal Options

Modal can be customized using the following options:

- `id`: The unique identifier for the modal.
- `title`: The title displayed on the modal.
- `inputs`: The record of inputs to include in the modal.

### Using Modals

Modals can be imported using `getModal` function and be added to messages using the `components` property of the `interaction.reply` method. You can use the `useActionRow` function to create a row.

### Example

::: code-group

```ts [commands/utils/form.ts]
import { defineCommand, getModal, useActionRow } from '@harmonix-js/core'

export default defineCommand(
	{
		description: 'Open a form.'
	},
	(_, interaction) => {
		const modal = getModal('form')
		const row = useActionRow(modal)

		interaction.reply({
			content: 'Click the button to open the form!',
			components: [row]
		})
	}
)
```

:::

::: info

The `getModal` function is used to import the modal with the specified ID. By default, the ID is the filename without the extension.

:::
