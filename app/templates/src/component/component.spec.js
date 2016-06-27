import {
  async,
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import <%= classname %> from './<%= appname %>.js';

describe('<%= classname %>', () => {
  it('renders header text', async(inject([TestComponentBuilder], tcb => {
    tcb
      .createAsync(<%= classname %>)
      .then(fixture => {
        fixture.detectChanges();

        expect(fixture.debugElement.nativeElement).toHaveText('<%= appname %>');
      });
  })));
});