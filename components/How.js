import React from 'react'
import { Flex, Text } from 'rebass'

import { IconFind, IconCreate, IconConnect } from './Pictograms.js'

const Cell = ({children}) => {
	return (
		<Flex
			width='-webkit-fill-available'
			variant='flexes.ccs'
			px={3}
			sx={{
				borderRight: '1px solid',
				borderColor: 'blacks.0',
				':last-child': {border: 'none'},
			}}
		>
			{children}
		</Flex>
		)
}

const How = props => {
	return (
		<Flex as='section' flexWrap='nowrap' bg='brown' color='grey' py={7} variant='flexes.rbe'>
			<Cell>
				<Flex as='header' pb={8} variant='flexes.ccs'>
					<Text as='h2' variant='heading'>Find</Text>
					<Text variant='desc'>a teacher or become one</Text>
				</Flex>
				<IconFind size={'332px'} />
			</Cell>
			<Cell>
				<Text as='h2' variant='heading'>Create</Text>
				<Text variant='desc'>your own courses</Text>
				<IconCreate size={'332px'} pt={8} />
			</Cell>
			<Cell>
				<Text as='h2' variant='heading'>Connect</Text>
				<Text variant='desc'>with students around you</Text>
				<IconConnect size={'332px'} pt={8} />
			</Cell>
		</Flex>
		)
}

export default How 