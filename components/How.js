import React from 'react'
import { Flex, Text } from './system'
import { Layout, Grid } from './Layout'

import { IconFind, IconCreate, IconConnect } from './Pictograms.js'

const Cell = props => {
	return (
		<Flex
			width={{all: 1, md: 1/3}}
			px={{all: 2, md: 3}}
			py={{all: 0, md: 7}}
			color='grey'
			flexes='ccc'
			sx={{
				borderRight: ['none', 'none', 'none', '1px dashed'],
				borderBottom: ['1px dashed', '1px dashed', '1px dashed', 'none'],
				borderColor: ['white', 'white', 'white', 'white'],
				':last-child': {border: 'none'},
			}}
			{...props}
		>
			{props.children}
		</Flex>
		)
}

const How = props => {
	return (
		<Flex
			as='section'
			flexWrap='nowrap'
			bg='brown'
			color='grey'
			flexes={{all: 'ccc', md: 'rbs'}}
			px={{all: 2, sm: 3, md: 0}}
		>
			<Cell>
				<Flex
					as='header'
					pb={{all: 5, md: 8}}
					flexes='ccc'
					textAlign='center'
					width='100%'
				>
					<Text as='h2' variant='heading'>Find</Text>
					<Text variant='desc'>a teacher or become one</Text>
				</Flex>
				<IconFind />
			</Cell>
			<Cell>
				<Flex
					as='header'
					pb={{all: 5, md: 8}}
					flexes='ccc'
					textAlign='center'
					width='100%'
				>
					<Text as='h2' variant='heading'>Create</Text>
					<Text variant='desc'>your own courses</Text>
				</Flex>
				<IconCreate />
			</Cell>
			<Cell>
				<Flex
					as='header'
					pb={{all: 5, md: 8}}
					flexes='ccc'
					textAlign='center'
					width='100%'
				>
					<Text as='h2' variant='heading'>Connect</Text>
					<Text variant='desc'>with students around you</Text>
				</Flex>
				<IconConnect />
			</Cell>
		</Flex>
		)
}

export default How 