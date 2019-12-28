import React from 'react'
import { Flex, Text } from './system'
import { Layout, Grid } from './Layout'

import { IconFind, IconCreate, IconConnect } from './Pictograms.js'

const Cell = props => {
	return (
		<Flex
			as='header'
			width={{all: 1, lg: 1/3}}
			px={{all: 2, md: 3}}
			pb='3'
			{...props}
			color='grey'
			sx={{
				borderRight: '1px solid',
				borderColor: 'blacks.1',
				':last-child': {border: 'none'},
			}}
		>
			<Flex flexes='css'>
				{props.children}
			</Flex>
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
			py={7}
			flexes='rbs'
		>
			<Cell>
				<Flex as='header' pb={8} flexes='ccs' sx={{minHeight: ['4.25rem']}}>
					<Text as='h2' variant='heading'>Find</Text>
					<Text variant='desc'>a teacher or become one</Text>
				</Flex>
				<IconFind />
			</Cell>
			<Cell>
				<Flex as='header' pb={8} flexes='ccs'>
					<Text as='h2' variant='heading'>Create</Text>
					<Text variant='desc'>your own courses</Text>
				</Flex>
				<IconCreate />
			</Cell>
			<Cell>
				<Flex as='header' pb={8} flexes='ccs'>
					<Text as='h2' variant='heading'>Connect</Text>
					<Text variant='desc'>with students around you</Text>
				</Flex>
				<IconConnect />
			</Cell>
		</Flex>
		)
}

export default How 