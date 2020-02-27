import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { Pre } from 'elite-decorators';

class Test {
  private prop: number = 10;

  @Pre(param1 => param1 > 41)
  test(param1: number) {
    console.log('Hi, I received: ', param1);
    console.log('My Prop is: ', this.prop);
  }
}

const test = new Test();
test.test(42);

ReactDOM.render(<App />, document.getElementById('root'));
