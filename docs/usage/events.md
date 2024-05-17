---
title: Events
---

# Events

Events are a fundamental part of Discord bots. They allow you to listen for specific actions or occurrences and respond accordingly. Harmonix provides a simple and intuitive way to define and handle events.

## Event Structure

Events are defined in separate files within the `events` or `listeners` directory. Each event file exports a function that defines the event's behavior.

### Example

::: code-group

```ts [events/ready.ts]
import { defineEvent } from '@harmonix-js/core'

export default defineEvent<'ready'>((client) => {
  console.log(`Logged in as ${client.user?.tag}!`)
})
```

:::

## Event Types

In order to let your editor know wich arguments are available for each event, you can use the `defineEvent` function with a generic type argument. In the example above, the event type is `'ready'` and the editor knows that the event function receives a `client` argument.

You can find a list of all available event types in the [Discord API documentation](https://discord.com/developers/docs/topics/gateway-events#receive-events).

## Event Options

Events can also have options that modify their behavior. These options are passed as the first argument to the `defineEvent` function.

- `name`: The name of the event. If not provided, the name of the file will be used.
- `once`: If `true`, the event will only be triggered once. (or ends the file with `.once.ts`)
- `type`: To specify if this event is listening to a modal. (`'modal'` or `undefined`)
