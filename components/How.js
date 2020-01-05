import React from 'react'
import { Flex, Text } from './system'
import { Layout, Grid } from './Layout'
import { Copy } from './bridge'

import { IconFind, IconCreate, IconConnect } from './Pictograms.js'

const Cell = props => {
	return (
		<Flex
			width={{all: 1, md: 1/3}}
			px={{all: 0, md: 3}}
			py={{all: 5, md: 7}}
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
			px={{all: 0, sm: 3, md: 0}}
		>
			<Cell>
				<Flex
					as='header'
					pb={{all: 5, md: 8}}
					flexes='ccc'
					textAlign='center'
					width='100%'
				>
					<Text as='h2' variant='heading'>{Copy.how[0].heading}</Text>
					<Text variant='desc'>{Copy.how[0].subHeading}</Text>
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
					<Text as='h2' variant='heading'>{Copy.how[1].heading}</Text>
					<Text variant='desc'>{Copy.how[1].subHeading}</Text>
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
					<Text as='h2' variant='heading'>{Copy.how[2].heading}</Text>
					<Text variant='desc'>{Copy.how[2].subHeading}</Text>
				</Flex>
				<IconConnect />
			</Cell>
		</Flex>
		)
}

export default How 