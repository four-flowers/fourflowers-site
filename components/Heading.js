import React from 'react'
import { Flex, Text } from 'rebass'

const Heading = props => {
	return (
		<Flex py={3} px={3} bg={props.bg} width='100%' variant='flexes.ccc' sx={{position: 'relative'}}>
			<Text variant='heading'
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					// color: 'transparent',
					borderColor: 'props.color',
					border: '1px solid',
				}}
			>●</Text>
			<Text variant='heading'>{props.children}</Text>
		
		</Flex>
		)
}

export default Heading