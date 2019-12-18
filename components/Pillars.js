import React from 'react'
import { Flex, Text } from 'rebass'
import { Heading } from './index'
import { Pillar, Title, Paragraph } from './PillarsEls'

const Pillars = props => {
	return (
		<Flex bg='grey' color='blue' variant='flexes.css'>
			<Heading borderColor='border'>Three pillars</Heading>

			<Pillar>
				<Title>
					<Text variant='heading'>To be</Text>
					<Text variant='body' pt={3}>Know yourself better</Text>
				</Title>
				<Flex variant='flexes.css'>
					<Paragraph>Description text goes here</Paragraph>
				</Flex>
			</Pillar>

		</Flex>
		)
}

export default Pillars 