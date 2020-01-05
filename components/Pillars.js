import React from 'react'
import { Flex, Text } from './system'
import { Heading, Copy } from './bridge'
import { Pillar, Title, Paragraph } from './PillarsEls'

const Pillars = props => {
	return (
		<Flex bg='grey' color='blue' flexes='css' pb='3'>
			<Heading color='#0F72B9'>{Copy.pillars.heading}</Heading>

			<Pillar
				heading={Copy.pillars.items[0].heading}
				subheading={Copy.pillars.items[0].subHeading}
				paragraph={Copy.pillars.items[0].body}
			/>
			<Pillar
				heading={Copy.pillars.items[1].heading}
				subheading={Copy.pillars.items[1].subHeading}
				paragraph={Copy.pillars.items[1].body}
			/>
			<Pillar
				heading={Copy.pillars.items[2].heading}
				subheading={Copy.pillars.items[2].subHeading}
				paragraph={Copy.pillars.items[2].body}
			/>

		</Flex>
		)
}

export default Pillars 