// @flow

import * as React from 'react'
import { render } from 'react-dom'
import {
  Router
} from 'react-router'
type Prop = {};

export class App extends React.Component {
  props: {}
  state: {}
  render() {
    return <div>28</div>
  }
}

export default render(<App />, document.querySelector('#poe'))
