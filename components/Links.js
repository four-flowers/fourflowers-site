import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { Layout, Grid, Link } from './Layout'

const Links = props => {
	return (
		<Layout
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
				<Flex variant='flexes.rss' variant='text.desc'>
					<Link pr={5}>Mission</Link>
					<Link pr={5}>Contact us</Link>
					<Link>Subscribe</Link>
				</Flex>
			</Grid>

		</Layout>
		)
}

export default Links