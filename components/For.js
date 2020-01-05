import React from 'react'
import { Flex, Text } from './system'
import { Heading, Copy } from './bridge'

const For = props => {
	return (
		<Flex
			as='section'
			height={{all: 'auto', sm: '100vh'}}
			flexes='css'
			bg='blue'
			color='grey'
		>
			<Heading color='#F9FAFC'>{Copy.for.heading}</Heading>
			<Flex
				flexGrow='1'
				flexes='cec'
			>
				<Text
					variant='body'
					py={{all: 3, sm: 5, md: 7}}
					px={{all: 2, md: 3}}
					dangerouslySetInnerHTML={{ __html: Copy.for.body }}
				/>
			</Flex>
		</Flex>
		)
}

export default For