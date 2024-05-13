---
title: Introduction
---

# Intoduction

Harmonix aims to simplify and streamline the development of Discord bots, making it intuitive and straightforward.

---

Harmonix is a free and open-source framework that features an intuitive and easy-to-use API, designed to streamline the development of Discord bots.

We've simplified everything to enable you to start writing commands and events immediately, without the need to concern yourself with the underlying structure of your bot.

<div class="tip custom-block" style="padding-top: 8px">

Just want to try it out? Skip to the [Quickstart](/getting-started/installation).

</div>

### Features

Harmonix uses standard conventions and an organized directory structure to automate routine tasks, allowing developers to focus on feature development. However, the configuration file can be customized to modify the default settings.

- **File-based structure**: Commands, events and context menus are defined in separate files, making it easier to manage and organize your bot's codebase.

- **Convention over configuration**: Harmonix follows a set of conventions to simplify the development process. However, you can still customize the configuration file to override the default behavior.

- **Built-ins**: Harmonix includes a set of built-in commands that can be used to manage your bot, such as `help`, `ping`, and `reload`. These commands can be disabled or modified as needed. A built-in event is also included to handle errors.

### Architecture

Harmonix is built on top of the [Discord.js](https://discord.js.org) library, which provides a powerful and flexible API for interacting with the Discord API. Additionally, Harmonix includes several essential packages:

- Core Engine: [@harmonix-js/core](https://github.com/harmonix-js/core)
- Command line interface: [@harmonix-js/cli](https://github.com/harmonix-js/cli)

It is recommended to familiarize yourself with each component to fully comprehend how Harmonix functions.


