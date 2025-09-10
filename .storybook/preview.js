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
    --mainFont: 'Roboto', Arial, Helvetica, sans-serif;
    --blue: #1374c9;
    --blue2: #0020e4;
    --darkBlue: #0c4c85;
    --lightBlue: #e7f1fa;
    --lightBlue2: #cce4f7;
    --lightBlue3: #e9ecff;
    --lightBlue4: #c0cafd;
    --lightBlue5: #c4dcf2;
    --red: #d72919;
    --darkRed: #6b140c;
    --lightRed: #fbe9e8;
    --lightRed2: #f1c6c2;
    --lightRed3: #fdbeba;
    --green: #1f8446;
    --darkGreen: #0f4122;
    --lightGreen: #e8f2ec;
    --lightGreen2: #c0e4cf;
    --lightGreen3: #e7ece8;
    --orange: #dc7418;
    --lightOrange: #fbf1e7;
    --lightOrange2: #f3ceae;
    --purple: #a70ef5;
    --purple2: #844ba8;
    --chartPurple: #844ba8;
    --chartLightPurple: #e0d2e9;
    --lightPurple: #f8edfe;
    --lightPurple2: #eac6fe;
    --white: #ffffff;
    --black: #000000;
    --gray1: #595959;
    --gray2: #919191;
    --gray3: #e5e5e5;
    --gray4: #f5f5f5;
    --gray5: #fafafa;
    --gray6: #606060;
    --gray7: #ddd;
    --gray8: #333333;
    --borderGray: #d8d8d8;
    --borderDarkGray: #999999;
    --yellow: #fffba3;
  }
`;
document.head.appendChild(style);

export default preview;