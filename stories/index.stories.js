import { document, console } from 'global';
import { storiesOf } from '@storybook/html';


storiesOf('Welcome| Demo', module)
  .add('heading', () => '<h1>Hello World</h1>')
  .add('button', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Hello Button';
    button.addEventListener('click', e => console.log(e));
    return button;
  })
  .add('anotherbutton', () => '<button>hi</button>');
 

  


