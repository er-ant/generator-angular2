import 'babel-polyfill';
import 'zone.js/dist/zone';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import <%= classname %> from './components/<%= appname %>/<%= appname %>';

@Component({
  directives: [<%= classname %>],
  selector: 'app',
  template: '<<%= appname %>></<%= appname %>>'
})
class Main {

}

bootstrap(Main).catch(error => {
  console.log(error);
});