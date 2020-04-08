import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactComponent } from './react.component';

@NgModule({
  declarations: [ReactComponent],
  imports: [CommonModule],
  exports: [ReactComponent],
})
export class AngularReactModule {}
