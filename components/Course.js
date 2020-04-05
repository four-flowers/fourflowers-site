import React from 'react'
import { Flex, Text } from './system'
import { Copy, Heading, Layout } from './bridge'

import { IconFind, IconCreate, IconConnect } from './Pictograms.js'
import { Cell, Title, Desc } from './CourseEls'

export default function How(props) {
	const el = Copy.course.pictograms
	return (
		<Flex
			as='section'
			flexWrap='nowrap'
			bg='brown'
			color='grey'
			flexes={{ all: 'ccc', md: 'rbs' }}
			px={{ all: 0, sm: 3, md: 0 }}
		>
			<Heading color='#CB996F'>{Copy.course.heading}</Heading>
			<Cell>
				<Title>{el[0].heading}</Title>
				<IconFind />
				<Desc>{el[0].desc}</Desc>
			</Cell>
			<Cell>
				<Title>{el[1].heading}</Title>
				<IconCreate />
				<Desc>{el[1].desc}</Desc>
			</Cell>
			<Cell>
				<Title>{el[2].heading}</Title>
				<IconConnect />
				<Desc>{el[2].desc}</Desc>
			</Cell>
		</Flex>
	)
}
