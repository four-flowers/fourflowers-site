import React from 'react'
import { Flex, Text } from 'rebass'
import { Heading } from './bridge'

const Mission = props => {
	return (
		<Flex
			as='section'
			height='100vh'
			variant='flexes.css'
			bg='yellow'
		>
			<Heading color='black'>Mission</Heading>
			<Flex
				flexGrow='1'
				px={3}
				pb={3}
				variant='flexes.cec'
				color='black'
			>
				<Text variant='body' pb={3} >We believe text, something about equal oportunities for free education, for everyone. We believe we can do better. Learn more about our mission.</Text>
				<Text variant='body' pb={7}>Want to support the project? Subscribe to updates or contact us.</Text>
				
				<Flex
					width='100%'
					p={3}
					variant='flexes.rbe'
					sx={{
						outline: '1px dashed',
						outlineColor: 'blacks.2',
				}}
				> 
					<Text variant='desc' color='brown'>Freemia School · Family Education © 2019</Text>
					<Text variant='desc' color='brown'>Twitter</Text>
				</Flex>
			</Flex>
		</Flex>
		)
}

export default Mission