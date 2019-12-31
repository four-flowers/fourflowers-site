import React from 'react'
import { Flex, Text, Link } from './system'
import { Heading } from './bridge'

const Mission = props => {
	return (
		<Flex
			as='section'
			height={{all: 'auto', lg: '100vh'}}
			flexes='css'
			bg='yellow'
		>
			<Heading color='black'>Mission</Heading>
			<Flex
				flexGrow='1'
				px={{all: 2, md: 3}}
				py={{all: 2, md: 5}}
				flexes='cec'
				color='black'
			>
				<Text variant='body' pb={3} >We believe in free education, for everyone. We believe we can do better. <Link href='#' decoration='default'>Learn more</Link> about our mission.</Text>
				<Text variant='body' pb={{all: 5, md: 7}}>Want to support the project? <Link href='http://eepurl.com/gOnRAz' decoration='default'>Subscribe to updates</Link> or contact us.</Text>
				
				<Flex
					width='100%'
					p={3}
					flexes='rbe'
					sx={{
						outline: '1px dashed',
						outlineColor: 'brown',
				}}
				> 
					<Text variant='desc' color='brown'>Freemia School · Family Education © 2019</Text>
					<Link variant='desc' decoration='default' color='brown'>Twitter</Link>
				</Flex>
			</Flex>
		</Flex>
		)
}

export default Mission