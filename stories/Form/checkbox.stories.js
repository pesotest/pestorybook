import { storiesOf } from '@storybook/html';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


import  checkbox from '../../Components/HTML/checkbox.html';
import '../style.css';

const storiesb = storiesOf('Form |checkbox', module);
storiesb.addDecorator(withKnobs)

//storiesOf('Form |checkbox', module)
storiesb
  .add('Unchecked', () => 
    
     checkbox  )
  .add('Checked', () => {
    const ch = document.createElement('input');
    const checked = boolean('checked', 'true')
  
    ch.setAttribute("type", "checkbox");
    ch.checked = checked;
   
    return ch;
  })
  
  .add('Skeleton', () => {
    const ch = document.createElement('input');
    ch.setAttribute("type", "checkbox");
    return ch
  })
  .add('Checkbox with Label', () => {
    const ch = document.createElement('input');
    ch.setAttribute("type", "checkbox");
    //ch.setAttribute('id', 'id') 
   // var label = document.createElement('label'); 
    //label.setAttribute('htmlFor' , 'id'); 
    //label.appendChild(document.createTextNode('This is the label for checkbox.')); 
    //label.appendChild('This is the label for checkbox.'); 
    return ch })