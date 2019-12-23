import React from 'react'
import { Flex, Text, Link } from './system/system'

const Test = props => {
	return (

		<Flex flexes={{all: 'rcc'}} sx={{position: 'fixed'}}>
			<Text variant='desc' decoration='default'>Hello</Text>
			<Link variant='desc' decoration='default'>Hello</Link>

		</Flex>

		)
}

export default Test