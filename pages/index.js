import React from 'react'
import { Theme } from '../components/Theme'
import { Flex, Text } from 'rebass'

const App = props => {
  return (
    <Theme>
      
      <Flex width='100vw' height='100vh' variant='flexes.ccc'>
        <Text variant='title'>Freemia School</Text>
        <Text variant='title'>Family Education</Text>
      </Flex>
      
    </Theme>
    )
}

export default App