import React from 'react'
import { Flex, Text } from 'rebass'
import { Heading } from './index'

const Pillars = props => {
	return (
		<Flex bg='grey' color='blue' variant='flexes.css'>
			<Heading borderColor='border'>Three pillars</Heading>
			<Flex py={7} px={3} variant='flexes.css'>
				<Flex variant='flexes.css'>
					<Text variant='heading'>To be</Text>
					<Text variant='body' pt={3}>Know yourself better</Text>
				</Flex>
			</Flex>
		</Flex>
		)
}

export default Pillars 