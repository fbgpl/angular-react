import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'react-component',
  template: '<div #container></div>',
})
export class ReactComponent extends Component
  implements OnDestroy, AfterViewInit {
  @ViewChild('container', { read: ElementRef }) containerRef: ElementRef;
  @Input() component;
  @Input() props = {};

  ngAfterViewInit() {
    ReactDOM.render(
      React.createElement(this.component, this.props),
      this.containerRef.nativeElement
    );
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }
}
