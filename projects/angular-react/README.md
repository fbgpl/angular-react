# @fbgpl/angular-react

Use React components in your Angular app.

## Installation

```js
npm i @fbgpl/angular-react
```

## Setup

You need to add `jsx` support in your `tsconfig.json` file:

```json
{
  ...
  "compilerOptions": {
    "jsx": "react",
    ...
  },
  ...
```

Import `AngularReactModule` in your module:

```js
//...
import { AngularReactModule } from '@fbgpl/angular-react';

@NgModule({
  //...
  imports: [..., AngularReactModule],
  //...
})
export class AppModule {}
```

## Usage

Basic usage:

```js
import { Component } from "@angular/core";
import { ReactTest } from "./ReactTest";

@Component({
  selector: "react-root",
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
    return { handleClick: () => console.warn("Clicked!") };
  }
}
```

where `ReactTest` is placed in `ReactTest.tsx` and looks like in the example above:

```js
import * as React from "react";

export const ReactTest = (props) => {
  const handleClick = () => {
    console.warn("Click handled in react component.");
    props.handleClick();
  };

  return (
    <div>
      <p>This is a regular react component</p>
      <button onClick={handleClick}>Test click</button>
    </div>
  );
};
```

## Notice

Unfortunately, ngcc doesn't support this lib. Still waiting for a solution. If you are using Ivy in your project you have to consider disable ngcc by adding the following lines in your `tsconfig.json` file.

```js
{
    //...,
    "angularCompilerOptions": {
      "enableIvy": false
    }
}
```
