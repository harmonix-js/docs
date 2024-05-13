---
title: Installation
---

# Installation

Quickly start using Harmonix right from your terminal.

---

### New Project

**Required Tools**:
- **Node.js** - `v18.0.0` or newer
- **Text editor** - Use your favorite text editor to write code (e.g. Visual Studio Code)
- **Terminal** - Use your terminal to run commands

To initiate a new starter project, open your terminal and execute the following command:

::: code-group

```sh [npx]
npx @harmonix-js/cli init bot-name
```

```sh [pnpm]
pnpm dlx @harmonix-js/cli init bot-name
```

```sh [yarn]
yarn dlx @harmonix-js/cli init bot-name
```

:::

Open your project directory in your text editor (e.g. Visual Studio Code):

```sh
code <project-name>
```

Or navigate to the project directory:

```sh
cd <project-name>
```

### Start the Bot

Now you'll be able to start your bot by running:

::: code-group

```sh [npm]
npm run start
```

```sh [pnpm]
pnpm start
```

```sh [yarn]
yarn start
```

<div class="danger custom-block" style="padding-top: 8px">

An error will occur. Refer to the [Configuration](/guide/configuration) guide to learn how to set up your bot.

</div>
