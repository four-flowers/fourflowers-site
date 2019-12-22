import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { Layout, Grid } from './Layout'

const Links = props => {
	return (
		<Layout
			// mx={3}
			py={5}
			px={3}
			width='-webkit-fill-available'
			columns='repeat(2, 1fr)'
			gap='3'
			variant='flexes.rse'
			sx={{
				outline: '1px dashed',
				outlineColor: 'blacks.2'
				}}
		>

			<Grid gridColumn={'1'}>
				<Text variant='desc'>A personalised learning resource<br/>for self-directed learners.</Text>
			</Grid>
			<Grid gridColumn={'2'}>
				<Flex variant='flexes.rss'>
					<Text pr={5} variant='desc'>Mission</Text>
					<Text pr={5} variant='desc'>Contact us</Text>
					<Text variant='desc'>Subscribe</Text>
				</Flex>
			</Grid>

		</Layout>
		)
}

export default Links