import { Component } from '@angular/core';
import { ReactTest } from './ReactTest';

@Component({
  selector: 'app-root',
  template: `
    <react-component
      [component]="getComponent()"
      [props]="getProps()"
    ></react-component>
  `,
  styles: [],
})
export class AppComponent {
  getComponent() {
    return ReactTest;
  }

  getProps() {
    return { handleClick: () => console.warn('Clicked!') };
  }
}
