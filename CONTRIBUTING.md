# Contributing to Linear Comment Sorter

Thank you for your interest in contributing to Linear Comment Sorter! We welcome contributions from the community and are grateful for any help you can provide.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)

## 🤝 Code of Conduct

This project and everyone participating in it is governed by our commitment to creating a welcoming and inclusive environment. By participating, you are expected to uphold these values:

- Be respectful and inclusive
- Exercise empathy and kindness
- Focus on constructive feedback
- Accept responsibility for mistakes
- Show grace when receiving feedback

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Git
- Chrome browser for testing
- Basic understanding of JavaScript and browser extensions

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/Tamer7/linear-comment-sorter.git
   cd linear-comment-sorter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the extension**
   ```bash
   npm run build
   ```

4. **Load extension in Chrome**
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the project directory

5. **Set up development branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🛠️ How to Contribute

### Areas Where We Need Help

- **Bug fixes**: Check our [issues](../../issues) for reported bugs
- **Feature enhancements**: Look for issues labeled `enhancement`
- **Documentation**: Help improve our docs and code comments
- **Testing**: Help test the extension on different Linear configurations
- **Performance**: Optimize code for better performance

### Types of Contributions

1. **Bug Reports**: Use our [bug report template](.github/ISSUE_TEMPLATE/bug_report.md)
2. **Feature Requests**: Use our [feature request template](.github/ISSUE_TEMPLATE/feature_request.md)
3. **Code Contributions**: Submit pull requests with improvements
4. **Documentation**: Improve README, comments, or guides

## 💻 Development Setup

### Project Structure

```
src/
├── main.js              # Entry point and initialization
├── features/            # Feature implementations
│   ├── commentSorter.js # Comment sorting functionality
│   └── hideEventsToggle.js # Hide events toggle
└── utils/               # Utility functions
    ├── dom.js           # DOM manipulation helpers
    └── poller.js        # Element waiting utilities
```

### Development Workflow

1. **Make your changes**
   - Follow our coding standards
   - Write meaningful commit messages
   - Test your changes thoroughly

2. **Run quality checks**
   ```bash
   npm run lint          # Check for linting errors
   npm run lint:fix      # Auto-fix linting issues
   npm run format        # Format code with Prettier
   npm run format:check  # Check formatting
   ```

3. **Test your changes**
   - Load the extension in Chrome
   - Navigate to Linear issues
   - Test all functionality
   - Verify no regressions

## 📏 Coding Standards

### JavaScript Guidelines

- Use modern ES6+ syntax
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Handle errors gracefully

### Code Style

- Use Prettier for consistent formatting
- 2-space indentation
- Semicolons required
- Single quotes for strings
- Trailing commas in objects/arrays

### Example Code Structure

```javascript
/**
 * Description of what the function does
 * @param {string} selector - CSS selector to find element
 * @param {number} timeout - Maximum time to wait in milliseconds
 * @returns {Promise<Element>} The found element
 */
export function waitForElement(selector, timeout = 5000) {
  return new Promise((resolve, reject) => {
    // Implementation here
  });
}
```

## 📝 Commit Guidelines

### Commit Message Format

Use the conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(sorting): add reverse chronological order option
fix(dom): handle missing comment containers gracefully
docs(readme): update installation instructions
style(format): apply prettier formatting
```

## 🔄 Pull Request Process

### Before Submitting

1. **Ensure your code follows our standards**
   ```bash
   npm run lint
   npm run format:check
   ```

2. **Test thoroughly**
   - Test on multiple Linear issue pages
   - Verify existing functionality still works
   - Test edge cases

3. **Update documentation**
   - Update README if adding features
   - Add JSDoc comments for new functions
   - Update CHANGELOG if applicable

### Submitting Your PR

1. **Create a descriptive title**
   ```
   feat(sorting): add custom sort order persistence
   ```

2. **Fill out the PR template**
   - Describe what your PR does
   - Reference related issues
   - Include testing notes

3. **Link related issues**
   ```
   Closes #123
   Fixes #456
   ```

### PR Review Process

1. **Automated checks must pass**
   - Linting
   - Build process
   - Basic functionality tests

2. **Code review**
   - At least one maintainer review required
   - Address feedback promptly
   - Make requested changes

3. **Final approval and merge**
   - Squash and merge preferred
   - Clean commit history maintained

## 🐛 Reporting Issues

### Bug Reports

Use our [bug report template](.github/ISSUE_TEMPLATE/bug_report.md) and include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser version and extension version
- Screenshots or recordings if helpful

### Feature Requests

Use our [feature request template](.github/ISSUE_TEMPLATE/feature_request.md) and include:

- Clear description of the feature
- Use case or problem it solves
- Proposed solution or implementation ideas
- Any relevant mockups or examples

## 🏷️ Issue Labels

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention needed
- `documentation`: Improvements to docs
- `question`: Further information requested

## 💬 Getting Help

- **Discord/Slack**: [If you have community channels]
- **GitHub Discussions**: Use for questions and general discussion
- **Issues**: For bug reports and feature requests
- **Email**: [maintainer email if available]

## 🎉 Recognition

Contributors will be:

- Added to our contributors list
- Mentioned in release notes for significant contributions
- Given credit in the project documentation

---

Thank you for contributing to Linear Comment Sorter! Every contribution, no matter how small, helps make this project better for everyone. 🚀 