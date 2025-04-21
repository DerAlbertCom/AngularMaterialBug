import {} from 'jest';

/**
 * jest should fail on console.error logging so let's monkey-patch it to throw an actual error.
 */
let error = console.error;
console.error = function (message: any) {
  error.apply(console, arguments as any); // keep default behaviour
  throw message instanceof Error ? message : new Error(message);
};

Object.defineProperty(window, 'CSS', {value: null});
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>',
});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance'],
    };
  },
});
/**
 * ISSUE: https://github.com/angular/material2/issues/7101
 * Workaround for JSDOM missing transform property
 */
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});

/**
 * ISSUE: https://github.com/jsdom/jsdom/issues/1245
 * Workaround for JSDOM missing innerText property
 */
// @todo actually no need as those tests should become snapshots
Object.defineProperty((global as any).Element.prototype, 'innerText', {
  get() {
    return this.textContent;
  },
});
