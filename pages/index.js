import React from 'react'
import { Theme } from '../components/system/theme'
import { Meta } from '../components/Meta'
import {
  Nav,
  Intro,
  Links,
  For,
  How,
  Course,
  Mission,
  Partners,
  Footer,
} from '../components/bridge'

const App = props => {
  return (
    <Theme>
      <Meta/>
      <Nav/>
      <Intro/>
      <For/>
      <Course/>
      <How/>
      <Mission/>
      <Partners/>
      <Footer/>
    </Theme>
    )
}

export default App