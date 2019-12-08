import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { Layout, Grid } from './Layout'

const Links = props => {
	return (
		<Layout bg='grey' py={6}>
			<Grid gridColumn={'1/ span 6'}>
				<Text variant='desc'>A personalised learning resource for self-directed learners.</Text>
			</Grid>
			<Grid gridColumn={'1/ span 6'}>
				<Text>Mission</Text>
				<Text>Contact us</Text>
				<Text>Subscribe</Text>
			</Grid>
		</Layout>
		)
}

export default Links