# Privacy Policy for Linear Comment Sorter

**Last updated: [Current Date]**

## Overview

Linear Comment Sorter is a browser extension designed to enhance your experience with Linear by adding comment sorting and timeline event filtering functionality. We are committed to protecting your privacy and being transparent about how our extension works.

## Data Collection and Usage

### What Data We Collect

**None.** Linear Comment Sorter does not collect, store, or transmit any personal data or usage information.

### What Data We Access

The extension accesses only the necessary data to provide its functionality:

- **Linear page content**: The extension reads the DOM structure of Linear issue pages to identify comments and timeline events
- **Local browser storage**: May use browser's local storage to remember your sorting preferences (stored locally on your device only)

### What We Don't Do

- ❌ We do not collect personal information
- ❌ We do not track your browsing habits
- ❌ We do not send data to external servers
- ❌ We do not use analytics or tracking services
- ❌ We do not access data from other websites
- ❌ We do not store your Linear credentials or sensitive information

## How the Extension Works

### Local Processing Only

All functionality is performed locally in your browser:

1. **Comment Sorting**: The extension reads the existing comments on the page and reorders them based on your selection
2. **Timeline Events**: The extension identifies timeline events and provides controls to show/hide them
3. **Persistence**: Your preferences may be saved locally in your browser's storage

### No External Communication

The extension does not:
- Make network requests to external servers
- Send data outside your browser
- Communicate with any third-party services
- Access your Linear account credentials

## Permissions Explained

The extension requests the following permissions:

### `scripting` and `activeTab`
- **Purpose**: Allows the extension to inject code into Linear pages to add sorting functionality
- **Scope**: Only active when you're on Linear issue pages
- **Usage**: Adds UI elements and sorting functionality to the page

### `host_permissions` for Linear domains
- **Purpose**: Specifies which websites the extension can run on
- **Scope**: Limited to `*.linear.app/*/issue/*` and `*.linear.app/*/issues/*` patterns
- **Usage**: Ensures the extension only operates on Linear issue pages

## Data Storage

### Local Storage Only

Any data stored by the extension is kept locally on your device:

- **Sorting preferences**: Your preferred sort order may be remembered locally
- **UI state**: Whether timeline events are hidden or shown
- **No cloud storage**: Nothing is stored on external servers

### Data Persistence

- Settings persist only in your local browser
- Clearing your browser data will reset extension preferences
- No data synchronization across devices

## Third-Party Services

Linear Comment Sorter does not integrate with or send data to any third-party services, including:

- Analytics services
- Crash reporting services
- Advertisement networks
- Data collection services

## Changes to Privacy Policy

We may update this privacy policy from time to time. When we do:

- We will update the "Last updated" date at the top of this policy
- Significant changes will be communicated through the extension's update notes
- Continued use of the extension after changes constitutes acceptance of the new policy

## Contact Us

If you have any questions about this privacy policy or the extension's data practices:

- Create an issue on our [GitHub repository](https://github.com/Tamer7/linear-comment-sorter/issues)
- Use our [feature request template](.github/ISSUE_TEMPLATE/feature_request.md) for privacy-related suggestions

## Compliance

### GDPR Compliance

Since we don't collect any personal data, GDPR requirements don't apply to our extension. However, we respect user privacy rights and maintain transparency about our practices.

### CCPA Compliance

We do not sell, share, or monetize any user data because we don't collect any user data.

## Open Source

Linear Comment Sorter is open source, which means:

- You can review the source code to verify our privacy claims
- The code is available on [GitHub](https://github.com/Tamer7/linear-comment-sorter)
- Community members can audit and contribute to the codebase

## Your Rights

Since we don't collect personal data, there's no personal data to:
- Access
- Modify
- Delete
- Port to another service

However, you can:
- Clear your browser's local storage to reset extension preferences
- Disable or uninstall the extension at any time
- Review the source code to understand exactly how the extension works

---

**Summary**: Linear Comment Sorter enhances your Linear experience without compromising your privacy. We process data locally, don't collect personal information, and don't communicate with external servers.

For technical questions about the extension, please visit our [GitHub repository](https://github.com/Tamer7/linear-comment-sorter). 