import React from 'react'
import { Flex, Text } from '../components/system'
import { Theme } from '../components/system/theme'
import { Meta } from '../components/Meta'
import {
  Intro,
} from '../components/bridge'

const App = props => {
  return (
    <Theme>
    	<Meta/>
      <Intro/>
        <Text textAlign='center' py={5} variant='body'>Mission text</Text>
    </Theme>
    )
}

export default App