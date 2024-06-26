---
title: Introduction
---

# Intoduction

Harmonix aims to simplify and streamline the development of Discord bots, making it intuitive and straightforward.

---

Harmonix is a free and open-source framework that features an intuitive and easy-to-use API, designed to streamline the development of Discord bots.

We've simplified everything to enable you to start writing commands and events immediately, without the need to concern yourself with the underlying structure of your bot.

<div class="tip custom-block" style="padding-top: 8px">

Just want to try it out? Skip to the [Installation](/getting-started/installation).

</div>

### Features

Harmonix uses standard conventions and an organized directory structure to automate routine tasks, allowing developers to focus on feature development. However, the configuration file can be customized to modify the default settings.

- **File-based structure**: Commands, events and context menus are defined in separate files, making it easier to manage and organize your bot's codebase.

- **Argument parsing**: Harmonix automatically parses command arguments, and resolves them to the correct type, making it easier to work with user input.

- **Preconditions**: Acts like middleware in web, it give you the possibility to restrict access to commands based on user permissions, roles, or other conditions.

### Architecture

Harmonix is built on top of the [Discord.js](https://discord.js.org) library, which provides a powerful and flexible API for interacting with the Discord API. Additionally, Harmonix includes several essential packages:

- Core Engine: [@harmonix-js/core](https://github.com/harmonix-js/core)
- Command line interface: [@harmonix-js/cli](https://github.com/harmonix-js/cli)

It is recommended to familiarize yourself with each component to fully comprehend how Harmonix functions.
