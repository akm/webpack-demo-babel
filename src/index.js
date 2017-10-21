import _ from 'lodash';
import Person from './person';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

class Friend extends Person{
    constructor(name) {
      super(name);
    }
    callName() {
      alert(this.name);
    }
}

var friend = new Friend('Ryo');

friend.callName();
