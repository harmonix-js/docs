---
title: Select Menus
---

# Select Menus

Select Menus are interactive components that can be added to messages to allow users to select options from a dropdown menu.

### Example

::: code-group

```ts [select-menus/choose-user.ts]
import { defineSelectMenu } from '@harmonix-js/core'

export default defineSelectMenu(
  {
    type: 'User',
    placeholder: 'Choose a user'
  },
  (interaction) => {
    interaction.reply(`You selected an user!`)
  }
)

```

:::

### Select Menu Options

Select Menu can be customized using the following options:

- `id`: The unique identifier for the modal.
- `type`: The type of the select menu. Can be `String`, `User`, `Channel`, `Role`, or `Mentionable`.
- `placeholder`: The placeholder text displayed when no option is selected.
- `disabled`: Whether the select menu is disabled.
- `minValues`: The minimum number of options that must be selected.
- `maxValues`: The maximum number of options that can be selected.

### Using Select Menus

Select Menus can be imported using `getSelectMenu` function and be added to messages using the `components` property of the `interaction.reply` method. You can use the `useActionRow` function to create a row.

### Example

::: code-group

```ts [commands/utils/users.ts]
import { defineCommand, getSelectMenu, useActionRow } from '@harmonix-js/core'

export default defineCommand(
	{
		description: 'Choose user.'
	},
	(_, interaction) => {
		const selectMenu = getSelectMenu('choose-user')
		const row = useActionRow(selectMenu)

		interaction.reply({
			content: 'Choose a user.',
			components: [row]
		})
	}
)

```

::: info

The `getSelectMenu` function is used to import the select menu with the specified ID. By default, the ID is the filename without the extension.

:::
