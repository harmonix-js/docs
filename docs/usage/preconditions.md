---
title: Preconditions
---

# Preconditions

Preconditions are used to restrict access to commands based on user permissions, roles, or other conditions.

---

Precondition functions are defined in separate files within the `preconditions` directory.

The file name must be used in the `preconditions` property of the command.

### Example

::: code-group

```ts [preconditions/ownerOnly.ts]
import { definePrecondition, useHarmonix } from '@harmonix-js/core'

export default definePrecondition(({ interaction }) => {
  const harmonix = useHarmonix()
  const authorId = interaction.member?.user.id

  if (authorId && !harmonix.options.ownerId.includes(authorId)) {
    interaction?.reply('You are not the owner of this bot!')
    return false
  }
  return true
})
```

:::

::: info

You must return `true` if the precondition is met and `false` if it is not. If the precondition is not met, the command will not be executed.

:::

::: tip

You can see in the example above that we are using `useHarmonix`. This is a hook that allows you to access the `Harmonix` instance.

:::
