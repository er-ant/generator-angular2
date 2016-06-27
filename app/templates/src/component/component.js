import {Component} from '@angular/core';

@Component({
  selector: '<%= appname %>',
  templateUrl: 'components/<%= appname %>/<%= appname %>.html'
})
export default class <%= classname %> {
  constructor() {
    console.info('<%= classname %> Component Mounted Successfully');
  }

}