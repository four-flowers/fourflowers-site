import React from 'react'
import { Theme } from '../components/system/theme'
import { Meta } from '../components/Meta'
import {
  Intro,
  Links,
  For,
  How,
  Pillars,
  Mission,
} from '../components/bridge'

const App = props => {
  return (
    <Theme>
      <Meta/>
      <Intro/>
      <For/>
      <How/>
      <Pillars/>
      <Mission/>
    </Theme>
    )
}

export default App