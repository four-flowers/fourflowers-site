import React from 'react'
import { Flex } from './system'
import { Copy, Layout, Heading } from './bridge'
import { Row } from './HowEls'

export default function How(props) {
	return (
		<Flex
			width='100%'
			as='section'
			bg='grey'
			pb={{ all: 5, sm: 6 }}
			color='blue'
		>
			<Heading color='#0F72B9'>{Copy.how.heading}</Heading>
			<Layout py={6}>
				{Copy.how.items.map(item => (
					<Row key={item.id} id={item.id} desc={item.desc} />
				))}
			</Layout>
		</Flex>
	)
}
