---
title: Context Menus
---

# Context Menus

Context menus are a way to interact with your bot by right-clicking on a message or user. They provide a quick and easy way to perform actions without having to type a command.

## Context Menu Structure

Context menus are defined in separate files within the `context-menus` directory. Each context menu file exports a function that defines the context menu's behavior.

### Example

::: code-group

```ts [context-menus/greet-user.ts]
import { defineContextMenu } from '@harmonix-js/core'

export default defineContextMenu<'user'>(
  {
    name: 'Greet user',
    preconditions: ['ownerOnly']
  },
  (interaction) => {
    interaction.reply(`Hello, ${interaction.targetUser}!`)
  }
)
```

:::

## Context Menu Types

In order to let your editor know which arguments are available for each context menu, you can use the `defineContextMenu` function with a generic type argument. In the example above, the context menu type is `'user'` and the editor knows that the context menu function receives an `interaction` argument.

It can be `'message'` or `'user'`.

## Context Menu Options

Context menus can also have options that modify their behavior. These options are passed as the first argument to the `defineContextMenu` function.

- `name`: The name of the context menu. If not provided, the name of the file will be used.
- `preconditions`: An array of preconditions that must be met in order for the context menu to be triggered. Precondition functions are defined in the `preconditions` directory.
- `type`: To specify if this context menu is listening to a message. (`'message'`, `'user` or `undefined`)
