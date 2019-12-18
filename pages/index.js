import React from 'react'
import { Theme } from '../theme/theme'
import { Meta } from '../components/Meta'
import {
  Intro,
  Links,
  For,
  How,
  Pillars,
  Mission,
} from '../components/index'

const App = props => {
  return (
    <Theme>
      <Meta/>
      <Intro/>
      <Links/>
      <For/>
      <How/>
      <Pillars/>
      <Mission/>
    </Theme>
    )
}

export default App