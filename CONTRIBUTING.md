# Contributing Guide

- Contributing to this repository is fairly easy. This document shows you how to get started

## General
<!-- - The [Codebase Structure](/CODEBASE_STRUCTURE.md) has detailed information about how the various files in this project are structured -->
- Please ensure that any changes you make are in accordance with the [Coding Guidelines](/CODING_GUIDELINES.md) of this repository

## Submitting changes

- Fork the repository
  - <https://github.com/angeloanan/vanillaMCDiscordLink/fork>
- Check out a new branch based and name it to what you intend to do:
  - Example:

    ````bash
    $ git checkout -b BRANCH_NAME feature/fooBar
    ````

    If you get an error, you may need to fetch fooBar first by using

    ````bash
    $ git remote update && git fetch
    ````

  - Use one branch per fix / feature
- Commit your changes
  - Please provide a git message that explains what you've done
  - Please make sure your commits follow the [conventions](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53#file-commit-message-guidelines-md)
  - Commit to the forked repository
  - Example:

    ````bash
    $ git commit -am 'Add some fooBar'
    ````

- Push to the branch
  - Example:

    ````bash
    $ git push origin feature/fooBar
    ````

- Make a pull request
  - Make sure you send the PR to the <code>master</code> branch
  <!-- - Travis CI is watching you! -->

If you follow these instructions, your PR will land pretty safely in the main repo!
