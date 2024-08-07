---
title: Don't delay, write your first PR today: how GitHub Codespaces and GitHub Copilot enable warp-speed development
lead: Fast onboarding to new projects with GitHub Codespaces and Copilot
published: 2024-07-08
tags: [codespaces, github]
authors:
    - name: "Tao Hansen"
      gitHubUserName: "worldofgeese"
      xUserName: "worldofgeese"
---

A local development environment is where a developer spends the bulk of their time. And the more time you spend with any piece of software, the more you're likely to uncover nooks and crannies of weird bugs and performance regressions you wouldn't otherwise.

<figure>
    <img src="https://user-images.githubusercontent.com/59834693/266082479-f9b795ff-0838-4953-bcbe-e66464482bf7.png" alt="Alt text" />
    <figcaption></figcaption>
</figure>

> The author says hello from inside the cave of their very special development environment

Your local environment is unlikely to look like the developer environment of their coworker's *especially* if you're running Windows and they're running macOS. Whatever funky sauce you've discovered might only be a Windows issue, not a macOS one.

What if you had *one environment*, shared by your team, that was byte-for-byte the same?

Now imagine your team grows by one. Who is going to shepherd the team's new developer to understanding your codebase?

## A developer cockpit powered by AI

With GitHub, your immediate context is your repository. Your AI assistant and GitHub Actions extension and CLI are all pre-installed and authenticated thanks to GitHub's support for workspace variables.

We include the `gh` CLI in the GitHub image so you can run `gh pr create` right from the terminal. We also include the GitHub Actions VS Code extension so you can see your pipelines right in the editor. With GitHub Copilot pre-installed and authenticated, your personal coding buddy is ready

## Bring CI to your GitHub workspace with GitHub Actions and gh

## Leveraging GitHub prebuilds with cached environments

GitHub can prebuild your init tasks so you can install your dependencies before you even open your workspace.

Prebuilds are shared across a repository. In this way, they're the equivalent of a shared cache in CI.

## SEO-friendly conclusion

GitHub is the total package for software development: gone are the days of tedious boilerplate code. Now spend more time on the good stuff and less time yak-shaving.

GitHub's cloud developer environments start up in seconds. From our editor we preview pull requests, write commits with the aid of GitHub Copilot and observe the state of GitHub Actions all from one single pane of glass.