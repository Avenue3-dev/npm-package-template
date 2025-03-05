# Contributing to the project

## Changesets

We use [changesets](https://github.com/changesets/changesets) to manage our releases. It is useful to generate a new changeset before committing any changes that warrants a version bump. This will allow us to generate the correct release notes and changelog.

To generate a new changeset, run the following command and select the relevant change type:

```bash
pnpm changeset
```

![Changeset](./assets/changeset.gif)

> [!IMPORTANT]
> When choosing the type of change, please refer to the [Semantic Versioning](https://semver.org/) guidelines.
> A good rule of thumb is to use `patch` for bug fixes, `minor` for new features, and `major` for breaking changes.

You could then edit the content of the changeset in the `.changeset` folder and add any additional information that you think is relevant.

```md
---
'@avenue3-dev/npm-package-template': patch
---

fix: add missing parameter
```

Keep in mind that for completeness, you will need to commit the changes with the same content you have added to the changeset file.

For example:

```txt
fix: add missing parameter

This commit fixes the issue where we were not passing the correct parameter to the function.
```