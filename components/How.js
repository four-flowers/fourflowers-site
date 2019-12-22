import React from 'react'
import { Flex, Text } from 'rebass'
import { Layout, Grid } from './Layout'

import { IconFind, IconCreate, IconConnect } from './Pictograms.js'

const Cell = props => {
	return (
		<Grid
			as='header'
			px={3}
			gridColumn={props.column}
			gridRow={props.row}
			{...props}
			color='grey'
			sx={{
				borderRight: '1px solid',
				borderColor: 'blacks.1',
				':last-child': {border: 'none'},
			}}
		>
			<Flex variant='flexes.css'>
				{props.children}
			</Flex>
		</Grid>
		)
}

const How = props => {
	return (

		<Layout
			columns={'repeat(3, 1fr)'}
			rows={'repeat(2, 1fr)'}
			gap={0}
			px={0}
			bg='brown'
		>

			<Cell column={1} pt={7}>
				<Text as='h2' pb={3} variant='heading'>Find</Text>
				<Text variant='desc'>a teacher or become one</Text>
			</Cell>
			<Cell column={1} row={2}>
				<IconFind size={'332px'} />
			</Cell>

			<Cell column={2} row={1} pt={7}>
				<Text as='h2' pb={3} variant='heading'>Create</Text>
				<Text variant='desc'>your own courses</Text>
			</Cell>
			<Cell column={2} row={2}>
				<IconCreate size={'332px'} />
			</Cell>

			<Cell column={3} row={1} pt={7}>
				<Text as='h2' pb={3} variant='heading'>Connect</Text>
				<Text variant='desc'>with students around you</Text>
			</Cell>
			<Cell column={3} row={2}>
				<IconConnect size={'332px'} pb={5} />
			</Cell>

		</Layout>

		)
}

// const How = props => {
// 	return (
// 		<Flex as='section' flexWrap='nowrap' bg='brown' color='grey' py={7} variant='flexes.rbe'>
// 			<Cell>
// 				<Flex as='header' pb={8} variant='flexes.ccs'>
// 					<Text as='h2' variant='heading'>Find</Text>
// 					<Text variant='desc'>a teacher or become one</Text>
// 				</Flex>
// 				<IconFind size={'332px'} />
// 			</Cell>
// 			<Cell>
// 				<Text as='h2' variant='heading'>Create</Text>
// 				<Text variant='desc'>your own courses</Text>
// 				<IconCreate size={'332px'} pt={8} />
// 			</Cell>
// 			<Cell>
// 				<Text as='h2' variant='heading'>Connect</Text>
// 				<Text variant='desc'>with students around you</Text>
// 				<IconConnect size={'332px'} pt={8} />
// 			</Cell>
// 		</Flex>
// 		)
// }

export default How 