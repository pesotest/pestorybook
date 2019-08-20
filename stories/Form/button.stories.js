import { storiesOf } from '@storybook/html';


storiesOf('Button', module)
  .addParameters({
    backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ],
  })
  .add('with text', () => '<button>Click me</button>')
  .add('with text2', () => '<button>Click me</button>')
  .add('with text3', () => '<button>Click me</button>')
  ;