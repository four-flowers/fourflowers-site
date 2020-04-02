import { Flex, Text } from './system'
import { Copy, Heading, Layout } from './bridge'

import { IconFind, IconCreate, IconConnect } from './Pictograms.js'

import { Cell, Title } from './CourseEls'

const How = props => {
	const el = Copy.course.pictograms
	return (
		<Flex
			as='section'
			flexWrap='nowrap'
			bg='brown'
			color='grey'
			flexes={{all: 'ccc', md: 'rbs'}}
			px={{all: 0, sm: 3, md: 0}}
		>
		<Heading color='#CB996F'>{Copy.course.heading}</Heading>
			<Cell>
				<Title>{el[0].heading}</Title>
				<IconFind />
				<Text variant='desc' pt={{all: 5, sm: 6}}>{el[0].desc}</Text>
			</Cell>
			<Cell>
				<Title>{el[1].heading}</Title>
				<IconCreate />
				<Text variant='desc' pt={{all: 5, sm: 6}}>{el[1].desc}</Text>
			</Cell>
			<Cell>
				<Title>{el[2].heading}</Title>
				<IconConnect />
				<Text variant='desc' pt={{all: 5, sm: 6}}>{el[2].desc}</Text>
			</Cell>
		</Flex>
		)
}

export default How 