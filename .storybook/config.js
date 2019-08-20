import { withA11y } from '@storybook/addon-a11y';
import { configure, addDecorator, addParameters } from '@storybook/html';
import '@storybook/addon-console';
import { setDefaults } from 'react-storybook-addon-props-combinations'


addDecorator(withA11y);
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
