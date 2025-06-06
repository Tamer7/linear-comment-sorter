import { readAccordionState, storeAccordionState } from '../utils/storage.js';

class ControlsManager {
  constructor() {
    this.features = new Map();
    this.controlsWrapper = null;
    this.controlsContent = null;
    this.initialized = false;
  }

  init(wrapper) {
    if (
      this.initialized ||
      document.querySelector('.linear-controls-wrapper')
    ) {
      return false;
    }

    this.createUI(wrapper);
    this.setupAccordion();
    this.initialized = true;
    return true;
  }

  createUI(wrapper) {
    this.controlsWrapper = document.createElement('div');
    this.controlsWrapper.className = 'linear-controls-wrapper';

    const header = document.createElement('div');
    header.className = 'linear-controls-header';

    const title = document.createElement('div');
    title.className = 'linear-controls-title';
    title.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
        <path d="M2 3.75C2 3.33579 2.33579 3 2.75 3H13.25C13.6642 3 14 3.33579 14 3.75C14 4.16421 13.6642 4.5 13.25 4.5H2.75C2.33579 4.5 2 4.16421 2 3.75Z"/>
        <path d="M2 8C2 7.58579 2.33579 7.25 2.75 7.25H13.25C13.6642 7.25 14 7.58579 14 8C14 8.41421 13.6642 8.75 13.25 8.75H2.75C2.33579 8.75 2 8.41421 2 8Z"/>
        <path d="M2.75 11.5C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H13.25C13.6642 13 14 12.6642 14 12.25C14 11.8358 13.6642 11.5 13.25 11.5H2.75Z"/>
      </svg>
      Comment Controls
    `;

    const toggle = document.createElement('div');
    toggle.className = 'linear-controls-toggle';
    toggle.innerHTML = `
      <span>Click to toggle</span>
      <span class="linear-controls-arrow">▼</span>
    `;

    header.appendChild(title);
    header.appendChild(toggle);

    this.controlsContent = document.createElement('div');
    this.controlsContent.className = 'linear-controls-content';

    this.controlsWrapper.appendChild(header);
    this.controlsWrapper.appendChild(this.controlsContent);

    wrapper.parentElement.insertBefore(this.controlsWrapper, wrapper);
  }

  setupAccordion() {
    if (readAccordionState()) {
      this.controlsWrapper.classList.add('collapsed');
    }

    const header = this.controlsWrapper.querySelector(
      '.linear-controls-header'
    );
    header.addEventListener('click', () => {
      this.controlsWrapper.classList.toggle('collapsed');
      storeAccordionState(this.controlsWrapper.classList.contains('collapsed'));
    });
  }

  registerFeature(name, element) {
    if (!this.controlsContent) {
      console.warn('ControlsManager not initialized');
      return;
    }

    if (this.features.has(name)) {
      console.warn(`Feature ${name} already registered`);
      return;
    }

    this.features.set(name, element);
    this.controlsContent.appendChild(element);
  }

  unregisterFeature(name) {
    if (this.features.has(name)) {
      const element = this.features.get(name);
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
      this.features.delete(name);
    }
  }

  getFeature(name) {
    return this.features.get(name);
  }
}

export const controlsManager = new ControlsManager();
