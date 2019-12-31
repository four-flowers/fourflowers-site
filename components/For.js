import React from 'react'
import { Flex, Text } from './system'
import { Heading } from './bridge'

const For = props => {
	return (
		<Flex
			as='section'
			height={{all: 'auto', sm: '100vh'}}
			flexes='css'
			bg='blue'
			color='grey'
		>
			<Heading color='#F9FAFC'>For everyone</Heading>
			<Flex
				flexGrow='1'
				flexes='cec'
			>
				<Text
					variant='body'
					py={{all: 3, sm: 5, md: 7}}
					px={{all: 2, md: 3}}
				>
					This place is created both for little self-learners, their parents, and for tutors. Whether you study at home or with a group, you are welcome to join our community to start learning and sharing knowledge.</Text>
			</Flex>
		</Flex>
		)
}

export default For