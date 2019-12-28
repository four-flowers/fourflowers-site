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
				px={3}
				pb={3}
				flexes='cec'
				color='black'
			>
				<Text variant='body' pb={3} >We believe text, something about equal oportunities for free education, for everyone. We believe we can do better. <Link href='#' decoration='default'>Learn more</Link> about our mission.</Text>
				<Text variant='body' pb={7}>Want to support the project? <Link href='#' decoration='default'>Subscribe to updates</Link> or contact us.</Text>
				
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