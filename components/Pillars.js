import React from 'react'
import { Flex, Text } from 'rebass'
import { Heading } from './index'
import { Pillar, Title, Paragraph } from './PillarsEls'

const Pillars = props => {
	return (
		<Flex bg='grey' color='blue' variant='flexes.css'>
			<Heading borderColor='border'>Three pillars</Heading>

			<Pillar
				heading='To be'
				subheading='Know yourself better'
				paragraph='Description text goes here'
			/>
			<Pillar
				heading='To know'
				subheading='Understand how world works'
				paragraph='Description text goes here'
			/>
			<Pillar
				heading='To do'
				subheading='Develop practical skills'
				paragraph='Description text goes here'
			/>

		</Flex>
		)
}

export default Pillars 