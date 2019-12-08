import React from 'react'
import { Theme } from '../theme/theme'
import { Meta } from '../components/Meta'
import {
  Intro,
  Links,
} from '../components/index'

const App = props => {
  return (
    <Theme>
      <Meta/>
      <Intro/>
      <Links/>
    </Theme>
    )
}

export default App