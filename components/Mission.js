import React from 'react'
import { Flex, Text, Link, Data } from './system'
import { Heading, Footer, Copy } from './bridge'
import Markdown from 'react-markdown'

const Mission = props => {
	return (
		<Flex
			width='100%'
			as='section'
			flexes='ccc'
			bg='yellow'
		>
			<Heading color='black'>{Copy.mission.heading}</Heading>
			<Flex
				px={{all: 2, md: 3}}
				py={{all: 3, md: 5}}
				color='black'
			>
				<Data variant='body' source={Copy.mission.body} />
				<Text variant='body'>Want to support the project? <Link href='http://eepurl.com/gOnRAz' decoration='default'>Subscribe to updates</Link> or contact us.</Text>
				
			</Flex>
			<Footer/>
		</Flex>
		)
}

export default Mission