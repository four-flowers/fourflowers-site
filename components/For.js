import React from 'react'
import { Flex, Text } from 'rebass'
import { Heading } from './index'

const For = props => {
	return (
		<Flex height='100vh' bg='blue' color='grey' variant='flexes.css'>
			<Heading color='#F9FAFC'>For everyone</Heading>
			<Flex flexGrow='1' variant='flexes.cec'>
				<Text variant='body' pb={7} px={3}>This place is created both for little self-learners, their parents, and for tutors. Whether you study at home or with a group, you are welcome to join our community to start learning and sharing knowledge.</Text>
			</Flex>
		</Flex>
		)
}

export default For