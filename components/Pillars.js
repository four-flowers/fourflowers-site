import React from 'react'
import { Flex, Text } from './system'
import { Heading } from './bridge'
import { Pillar, Title, Paragraph } from './PillarsEls'

const Pillars = props => {
	return (
		<Flex bg='grey' color='blue' variant='flexes.css'>
			<Heading color='#0F72B9'>Three pillars</Heading>

			<Pillar
				heading='To be'
				subheading='Know yourself better'
				paragraph='This type of learning answers such questions as “What do I love doing?”, “What is my dream?”, “What are my unique strengths?” and even “What is my role in a group?”. Here reflection is necessary. Learning to be is the most individualistic of the three different types of learning.'
			/>
			<Pillar
				heading='To know'
				subheading='Understand how world works'
				paragraph='The pillar focuses on knowledge that can be captured in books and lectures. This includes timelines and dates, definitions and facts. Most schools are very busy at developing this type of learning.'
			/>
			<Pillar
				heading='To do'
				subheading='Develop practical skills'
				paragraph='Focusing on developing skills that can be applied, such as in the productive world. Learning to do almost always involves significant practice. Learning to do topics include such abstract skills as leadership, innovation, stewardship, and project management on one end, and more literal skills, such as how to build, grow, use, or fix things, on the other.'
			/>

		</Flex>
		)
}

export default Pillars 