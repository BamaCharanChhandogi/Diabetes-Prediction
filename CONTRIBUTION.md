# 📜 **Contributing to Diabetes Prediction Website**

This document will guide you through the process of contributing to our repository. 
We value the time and effort of our contributors, and we strive to create an inclusive and collaborative community.
We are happy to welcome all the contributions from anyone willing to improve/add new scripts to this project.
Thank you for helping out and remember, **no contribution is too small.**

<br>

## Table of Contents

1. [📏 Code of Conduct](#code-of-conduct)
2. [🤝 How to Contribute](#how-to-contribute)
    - [🐞 Reporting Bugs](#reporting-bugs)
    - [💡 Suggesting Enhancements](#suggesting-enhancements)
    - [🔄 Pull Requests](#pull-requests)
3. [🎨 Style Guides](#style-guides)
    - [📜 Git Commit Messages](#git-commit-messages)
    - [💻 Code Style](#code-style)
4. [🚀 Getting Started](#getting-started)
    - [🍴 Forking the Repository](#forking-the-repository)
    - [📥 Cloning the Repository](#cloning-the-repository)
    - [🌿 Creating a Branch](#creating-a-branch)
    - [✨ Making Changes](#making-changes)
    - [📤 Pushing Changes](#pushing-changes)
    - [🔧 Creating a Pull Request](#creating-a-pull-request)
5. [📚 Additional Resources](#additional-resources)
6. [📈 Development Workflow](#development-workflow)
7. [🚩 Issue Report Process](#issue-report-process)
8. [🤔 Need Help regarding some basics?](#need-help-regarding-some-basics)
9. [🚀 Pull Request Process](#pull-request-process)
10. [🤝 Community Guidelines](#community-guidelines)
11. [📑 Documentation](#documentation)
12. [✅ Code Reviews](#code-reviews)
13. [🚀 Feature Requests](#feature-requests)
14. [☘️ Spread the Word](#spread-the-word)

<br>

## 📏 Code of Conduct 
Please note we have a [code of conduct](CODE_OF_CONDUCT.md)  please follow it in all your interactions with the project.

<br>

## 🤝 How to Contribute

### 🐞 Reporting Bugs

If you find a bug, please create an issue using the [Bug Report Template](https://github.com/[your-username]/diabetes-prediction-website/issues/new?template=bug_report.md). Be sure to include detailed information such as the steps to reproduce the bug, the expected outcome, and the actual outcome.

### 💡 Suggesting Enhancements

Have a great idea for a new feature? We'd love to hear it! Open an issue using the [Feature Request Template](https://github.com/[your-username]/diabetes-prediction-website/issues/new?template=feature_request.md) and describe your enhancement in detail.

### 🔄 Pull Requests

We welcome pull requests for bug fixes, features, and documentation improvements. To ensure your pull request is reviewed promptly, please adhere to the following guidelines:

- Fork the repository and create a new branch for your work.
- Follow the [Style Guides](#style-guides).
- Ensure your code is well-documented and includes tests.
- Reference any related issues in your pull request description.

<br>

### 🤝 Steps to contribute to Chatbot
Our chatbot is built using Botpress, a platform for creating powerful AI agents and chatbots. The conversation flow between users and the bot is manually generated using Botpress and can be improved to be more engaging and interactive.
Exploring Botpress Studio, [documentation](https://botpress.com/docs/cloud/), and the chatbot itself are the best ways to identify areas for enhancement.

- Raise an issue related to chatbot enhancement.
- Create your botpress account and export the chatbot configurations to your botpress studio using `.bpz` file present in the project directory.
- Make your changes and improvements.
- Export your `.bpz` file having improved configurations and then replace the current `.bpz` file with yours.
- Raise a PR and detail all the changes you've made (including screenshots, if possible).

For reference: [documentation](https://botpress.com/docs/cloud/) | [video](https://www.youtube.com/watch?v=1EVE2jlFgOc)


## 🎨 Style Guides

### 📜 Git Commit Messages

- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- Limit the first line to 72 characters or less.
- Reference issues and pull requests liberally.

### 💻 Code Style

- Follow the [PEP 8](https://pep8.org/) style guide for Python code.
- Use meaningful variable and function names.
- Write comments and documentation where necessary.

<br>

## 🚀 Getting Started

We welcome contributions! To contribute to this project, follow these detailed steps:

### 🍴 Forking the Repository
   - Navigate to the main repository.
   - Click on the "Fork" button in the upper right corner of the repository page. This will create a copy of the repository in your GitHub account.

### 📥 Cloning the Repository
   - Clone your forked repository to your local machine using the following command:
     ```bash
     git clone https://github.com/<your-username>/<repository-name>.git
     ```
   - Replace `<your-username>` with your GitHub username and `<repository-name>` with the name of the repository you just forked.

### 🌿 Creating a Branch
   - Navigate into the cloned repository:
     ```bash
     cd <repository-name>
     ```
   - Create a new branch for your feature or bug fix:
     ```bash
     git checkout -b <branch-name>
     ```
   - Replace `<branch-name>` with a descriptive name for your branch, such as `feature/add-new-feature` or `bugfix/fix-issue`.

### ✨ Making Changes
   - Implement your changes in the new branch you created.
   - Ensure that your code follows the project's coding standards and guidelines.
   - Test your changes thoroughly to ensure they work as expected.

### 📝 Commit Your Changes
   - Stage your changes for commit:
     ```bash
     git add .
     ```
   - Commit your changes with a descriptive commit message:
     ```bash
     git commit -m "Add detailed description of what your commit does"
     ```
   - Provide a clear and concise commit message that explains what changes you have made and why.

### 📤 Pushing Changes to Your Fork
   - Push your changes to the branch in your forked repository:
     ```bash
     git push origin <branch-name>
     ```

### 🔧 Creating a Pull Request
   - Go to your forked repository on GitHub.
   - Click on the "Compare & pull request" button for the branch you just pushed.
   - Provide a descriptive title and detailed description for your pull request.
   - Explain what changes you have made, why you made them, and any other relevant information.
   - Submit the pull request to the main repository.

### 🛠 Review Process
   - Your pull request will be reviewed by the maintainers of the project.
   - Be responsive to any feedback or questions they may have.
   - Make any necessary changes as requested by the maintainers.

### 🎉 Merge
   - Once your pull request is approved, it will be merged into the main repository.
   - Congratulations! You have successfully contributed to the project.

<br>

### Alternatively contribute using GitHub Desktop

1. **Open GitHub Desktop:**
   Launch GitHub Desktop and log in to your GitHub account if you haven't already.

2. **Clone the Repository:**
   - If you haven't cloned the SuperpeechSaga repository yet, you can do so by clicking on the "File" menu and selecting "Clone Repository."
   - Choose the SuperpeechSaga repository from the list of repositories on GitHub and clone it to your local machine.

3. **Switch to the Correct Branch:**
   - Ensure you are on the branch that you want to submit a pull request for.
   - If you need to switch branches, you can do so by clicking on the "Current Branch" dropdown menu and selecting the desired branch.

4. **Make Changes:**
   Make your changes to the code or files in the repository using your preferred code editor.

5. **Commit Changes:**
   - In GitHub Desktop, you'll see a list of the files you've changed. Check the box next to each file you want to include in the commit.
   - Enter a summary and description for your changes in the "Summary" and "Description" fields, respectively. Click the "Commit to <branch-name>" button to commit your changes to the local branch.

6. **Push Changes to GitHub:**
   After committing your changes, click the "Push origin" button in the top right corner of GitHub Desktop to push your changes to your forked repository on GitHub.

7. **Create a Pull Request:**
  - Go to the GitHub website and navigate to your fork of the SuperpeechSaga repository.
  - You should see a button to "Compare & pull request" between your fork and the original repository. Click on it.

8. **Review and Submit:**
   - On the pull request page, review your changes and add any additional information, such as a title and description, that you want to include with your pull request.
   - Once you're satisfied, click the "Create pull request" button to submit your pull request.

9. **Wait for Review:**
    Your pull request will now be available for review by the project maintainers. They may provide feedback or ask for changes before merging your pull request into the main branch of the SuperpeechSaga repository.

<br>

## 📈 Development Workflow

When working on the project, please follow these guidelines:

1. Always work on a new branch for each separate issue or feature.
2. Keep your branch up to date with the main repository's `master` branch.
3. Write clear and descriptive commit messages.
4. Test your changes thoroughly before submitting a pull request.
5. Keep discussions polite and respectful.

<br>

## 🚩 Issue Report Process

1. Go to the project's issues.
2. Select the template that better fits your issue.
3. Give proper description for the issues.
4. Don't spam to get the assignment of the issue.
5. Wait for till someone is looking into it !.
6. Start working on issue only after you got assigned that issue.

<br>

## 🤔 Need Help regarding some basics?

You can refer to the following articles on basics of Git and Github and also contact the Project Mentors,
in case you are stuck:

- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Learn GitHub from Scratch](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources)

<br>

## 🚀 Pull Request Process

1. Ensure that you have self reviewed your code.
2. Make sure you have added the proper description for the functionality of the code.
3. I have commented my code, particularly in hard-to-understand areas.
4. Add screenshot it help in review.
5. Submit your PR by giving the necesarry information in PR template and hang tight we will review it really soon.

<br>

## 🤝 Community Guidelines

We expect all contributors to adhere to the following community guidelines:

1. Be respectful and considerate towards others.
2. Use inclusive language and promote a welcoming environment.
3. Avoid personal attacks, harassment, or discrimination.
4. Keep discussions on-topic and constructive.
5. Help others and contribute positively to the community.

<br>

## 📑 Documentation
- Document any significant changes or additions to the codebase.
- Provide clear and concise explanations of the functionality, usage, and any relevant considerations.

<br>

## ✅ Code Reviews
- Be open to feedback and constructive criticism from other contributors.
- Participate in code reviews by reviewing and providing feedback.

<br>

## 🚀 Feature Requests
- Suggest new features or improvements that you believe would enhance the project.

<br>

## ☘️ Spread the Word
- Share your experience and the project with others.
- Spread the word about the project on social media, developer forums, or any relevant community platforms.
- Thank you for your valuable contribution and for being a part of the Clueless Community! Together, we can make a difference. 🚀

<br>

## 📚 Additional Resources

- [GitHub Documentation](https://docs.github.com/)
- [Open Source Guides](https://opensource.guide/)
- [PEP 8 Style Guide](https://pep8.org/)

<br>

Thank you for contributing to the Diabetes Prediction Website! Your efforts help us make a positive impact on health and wellness.

## **Happy Contributing 🔥** 

<br>
