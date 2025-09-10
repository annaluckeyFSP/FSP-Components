/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// Add CSS variables for FSP styling
const style = document.createElement('style');
style.textContent = `
  :root {
    --mainFont: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --blue: #1376CD;
    --darkBlue: #0d5ba3;
    --lightBlue: #e6f2ff;
    --red: #D72919;
    --darkRed: #b01e12;
    --green: #1F8446;
    --darkGreen: #155d32;
    --white: #ffffff;
    --black: #000000;
    --gray2: #f5f5f5;
    --gray3: #e5e5e5;
  }
`;
document.head.appendChild(style);

export default preview;