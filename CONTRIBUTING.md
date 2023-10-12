# projectshub Contributing Guidelines

Thank you for taking the time to contribute to our project. Please take a moment to read the following guidelines before contributing:

> ⚠️IMPORTANT **Note**
>
> **Pull Requests _having no issue associated_ with them _will not be accepted_. Firstly get an issue assigned, whether it's already opened or raised by you, and then create a Pull Request.**

## Prerequisites ⚠️

- Basic familiarity with Git and GitHub: If you are also new to these tools, visit [Getting to Know Git and GitHub: Your Code's Best Friends](https://surajk00.hashnode.dev/getting-to-know-git-and-github-your-codes-best-friends) for a practical guide
  to them.

- Open Source Etiquette: If you've never contributed to an open source project before, have a read of [Basic etiquette](https://developer.mozilla.org/en-US/docs/MDN/Community/Open_source_etiquette) for open source projects.

---

## How to Contribute 🤔

To get started, look at the existing [**Issues**](https://github.com/Ayushpanditmoto/projectshub/issues) or [**create a new issue**](https://github.com/Ayushpanditmoto/projectshub/issues/new)!

### Setup guidelines 🪜

Follow these steps to setup projectshub on your local machine

1. [Fork](https://github.com/Ayushpanditmoto/projectshub/fork) the project
2. Clone the project to your local machine using the following command:

   ```sh
   git clone https://github.com/<your_github_username>/projectshub.git
   ```

3. Get into the root directory

   ```sh
   cd projectshub
   ```

4. Create your branch

   ```sh
   git checkout -b <your_branch_name>
   ```

5. Make your changes before staging them.

6. Stage your changes

   ```sh
   git add <filename>
   ```

7. Commit your changes

   ```sh
   git commit -m "<your-commit-message>"
   ```

8. Push your changes to your branch

   ```sh
   git push origin "<your_branch_name>"
   ```

9. Create a [PULL REQUEST](https://github.com/Ayushpanditmoto/projectshub/compare) 💣

   > Click _compare across forks_ if you don't see your branch

---

## Issues ✍️

- When creating an issue, make sure you fill up all the fields properly.
- Make sure that you are NOT raising a **duplicate issue**.
- If you want to work on the issue, please click on the _I am willing to work on this issue_ checkmark.
- Work on only **ONE** issue at a time.

**Closing the issue** 📍

- If you decide to close the issue, please leave a brief comment describing why(e.g., I'm busy with other obligations.) before you do.
- **Note:** If the Pull Request associated with the issue gets merged and the issue still remains open, it's **your** responsibility to close the issue.

## Commits Message Guidelines 💬

We follow a standardized commit message format using Commitlint to ensure consistency and clarity in our commit history. Each commit message should adhere to the following guidelines:

1. **Type**: The commit type must be one of the following:

   - `feat`: A new feature or enhancement.
   - `fix`: A bug fix.
   - `docs`: Documentation changes.
   - `style`: Code style changes (e.g., formatting, semicolons).
   - `refactor`: Code refactorings with no feature changes or bug fixes.
   - `test`: Adding or improving tests.
   - `chore`: General maintenance tasks, build changes, etc.

2. **Scope** (Optional): The scope provides context for the commit, indicating the specific part of the project being affected. Use a short description in lowercase (e.g., `auth`, `navbar`, `README`).

3. **Description**: A brief and meaningful description of the changes made. Start with a capital letter and use the imperative mood (e.g., "Add new feature" instead of "Added new feature").

4. **Issue reference** (Optional): Include the issue number associated with the commit (e.g., `#123`).

#### ✔️ Examples of Valid Commit Messages

- `feat: Add user authentication feature`
- `fix(auth): Resolve login page redirect issue
- `docs: Update installation instructions
- `style: Format code according to project guidelines
- `refactor(navbar): Improve responsiveness`
- `test: Add unit tests for API endpoints`
- `chore: Update dependencies to the latest versions
- `fix: Handle edge case in data processing (#456)`

#### ❌ Examples of Invalid Commit Messages

- `Added new stuff`
- `Fixed a bug`
- `Updated code`
- `auth feature update`
- `chore: fixed some stuff`

### Commit Example with Commitlint

```bash
git commit -m "feat(auth): Implement user signup process (#123)"
```

---

## Making Pull Requests 💥

1. When you submit a pull request, several tests are automatically run
   as GitHub Actions. If any of these tests fail, it is your responsibility to try and resolve the underlying issue(s). If you don't know how to resolve the underlying issue(s), you can ask for help.

2. Each pull request should contain a single logical change or related set of changes that make sense to submit together. If a pull request becomes too large or contains too many unrelated changes, it becomes too difficult to review. In such cases, the reviewer has the right to close your pull request and ask that you submit a separate pull request for each logical set of changes that belong together.

3. Link the issue you have resolved in the Pull Request Template (e.g. Closes/Fixes #99).
4. Use our Commit messages Guidelines (You can find it in the CONTRIBUTING.md file) for your changes.
5. Do not re-open a pull request that a reviewer has closed.
   - Make sure to tick the "Allow edits from maintainers" box. This allows us to directly make minor edits / refactors and saves a lot of time.
     > **Note**
     > If your pull request has merge conflicts with the `main` branch (GitHub checks for this automatically and notifies you), you are responsible for resolving them. You can do this by merging the `main` branch into your branch (`git pull upstream main`), and then pushing the updated branch to your fork (`git push`). If you need more tips, check out [Resolving a merge conflict on GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github).

---

## Remarks ✅

- If something is missing here, or you feel something is not well described, either create a PR, raise an issue, or [do a code review of the person’s PR](https://www.freecodecamp.org/news/code-review-tips/) (ensure that your review conforms to the [Code of Conduct](https://github.com/Ayushpanditmoto/projectshub/blob/master/CODE_OF_CONDUCT.md))

- You can tag maintainers for any kind of difficulty using `@username`.

### Levels

We came up with this chart so you can gauge the issue's difficulty and pick ones that fit within your skillset:
| Points | Contribution |
|---------------------|-----------------------------------------------------------------------------|
| `priority: low`: | Addition of new links/categories or doing any small task (e.g fixing typos) |
| `priority: medium`: | Modifying an existing feature |
| `priority: high`: | Making completely new feature |

#List of Contributers

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Ayushpanditmoto"><img src="https://avatars.githubusercontent.com/u/31253617?v=4?v=3?s=100" width="100px;" alt="Ayushpanditmoto"/><br /><sub><b>Ayush Kumar Pandit</b></sub></a><br /></td>
            <td align="center" valign="top" width="14.28%"><a href="https://github.com/imanirak"><img src="https://avatars.githubusercontent.com/u/22438344?v=4?v=3?s=100" width="100px;" alt="Karina Garces"/><br /><sub><b>Karina Garces</b></sub></a><br /></td>
            <td align="center" valign="top" width="14.28%"><a href="https://github.com/Shubh8899"><img src="https://avatars.githubusercontent.com/u/63413220?v=4?v=3?s=100" width="100px;" alt="Shubham Chauhan"/><br /><sub><b>Shubham Chauhan</b></sub></a><br /></td>
            <td align="center" valign="top" width="14.28%"><a href="https://github.com/Cshiva773"><img src="https://avatars.githubusercontent.com/u/104835495?v=4?v=3?s=100" width="100px;" alt="Shivansh Chauhan"/><br /><sub><b>Shivansh Chauhan</b></sub></a><br /></td>
            <td align="center" valign="top" width="14.28%"><a href="https://github.com/SURAJPATIL6088"><img src="https://avatars.githubusercontent.com/u/75235148?v=4?v=4?v=4?v=3?s=100" width="100px;" alt="Adebayo Olamilekan"/><br /><sub><b>Adebayo Olamilekan</b></sub></a><br /></td>
                  <td align="center" valign="top" width="14.28%"><a href="https://github.com/mohammadshaad"><img src="https://avatars.githubusercontent.com/u/89409389?v=4?v=3?s=100" width="100px;" alt="Mohammad Shaad Shaikh"/><br /><sub><b>Mohammad Shaad Shaikh</b></sub></a><br /></td>
            <td align="center" valign="top" width="14.28%"><a href="https://github.com/SURAJPATIL6088"><img src="https://avatars.githubusercontent.com/u/78692972?v=4?v=4?v=3?s=100" width="100px;" alt="SURAJ BALARAM PATIL"/><br /><sub><b>SURAJ BALARAM PATIL</b></sub></a><br /></td>
