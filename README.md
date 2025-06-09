# Linear Comment Sorter

A browser extension that enhances Linear issues by adding comment sorting functionality and the ability to hide/show timeline events.

![Linear Comment Sorter](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/License-ISC-green.svg)
![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-orange.svg)

## Features

- **Comment Sorting**: Add a dropdown to sort comments by newest-to-oldest or oldest-to-newest
- **Hide Timeline Events**: Toggle visibility of timeline events to focus on comments
- **SPA Support**: Works seamlessly with Linear's single-page application architecture
- **Non-intrusive**: Integrates naturally with Linear's existing UI

## Installation

### From Source

1. Clone this repository:
   ```bash
   git clone https://github.com/Tamer7/linear-comment-sorter.git
   cd linear-comment-sorter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the extension:
   ```bash
   npm run build
   ```

4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the project directory

## Development

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Chrome browser for testing

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development:
   ```bash
   npm run build
   ```

3. Load the extension in Chrome as described in the installation section

### Available Scripts

- `npm run build` - Build the extension for production
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Usage

1. Navigate to any Linear issue page
2. The extension automatically adds:
   - A sort dropdown above the comments section
   - A toggle button to hide/show timeline events
   - A toggle button to push the comment box to the top
3. Use the dropdown to sort comments by:
   - **Newest → Oldest**: Most recent comments first
   - **Oldest → Newest**: Original chronological order

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## Bug Reports

Found a bug? Please create an issue using our [bug report template](.github/ISSUE_TEMPLATE/bug_report.md).

## Feature Requests

Have an idea for a new feature? Please create an issue using our [feature request template](.github/ISSUE_TEMPLATE/feature_request.md).

## Privacy

This extension processes Linear pages locally in your browser. No data is sent to external servers. See our [Privacy Policy](PRIVACY.md) for more details.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

**Note**: This extension is not officially affiliated with Linear. Linear is a trademark of Linear Orbit, Inc. 
