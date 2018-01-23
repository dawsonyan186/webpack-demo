import _ from 'lodash'
import j from 'jquery'
import dawson from './foo'

function component () {
    var element = j('<div></div>');
    element.html(_.join(['Hello','webpack'], ' '))
    console.log(dawson());
    return element.get(0);
  }
  
  document.body.appendChild(component());