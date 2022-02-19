import _ from 'lodash';
import './style.css';
import CatPic from './cat.jpg';
import Data from './data.xml';
import Notes from './data.csv';
import yaml from './data.yaml';

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // example loading style
    element.classList.add('hello');

    // example loading image
    const catIcon = new Image();
    catIcon.src = CatPic;

    element.appendChild(catIcon);

    // example loading data
    console.log(Data);
    console.log(Notes)

    return element;
}

document.body.appendChild(component());