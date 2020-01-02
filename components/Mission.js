import React from 'react'
import { Flex, Text, Link } from './system'
import { Heading, Footer } from './bridge'

const Mission = props => {
	return (
		<Flex
			width='100%'
			as='section'
			flexes='ccc'
			bg='yellow'
		>
			<Heading color='black'>Mission</Heading>
			<Flex
				flexGrow='1'
				px={{all: 2, md: 3}}
				py={{all: 2, md: 5}}
				// flexes='cec'
				color='black'
			>
				<Text variant='body' pb={3} >We believe in free education, for everyone. We believe we can do better. <Link href='#' decoration='default'>Learn more</Link> about our mission.</Text>
				<Text variant='body' pb={{all: 5, md: 7}}>Want to support the project? <Link href='http://eepurl.com/gOnRAz' decoration='default'>Subscribe to updates</Link> or contact us.</Text>
				
			</Flex>
			<Footer/>
		</Flex>
		)
}

export default Mission