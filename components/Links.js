import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { Layout, Grid } from './Layout'

const Links = props => {
	return (
		<Layout bg='grey' py={4} variant='flexes.rse'>

			<Grid gridColumn={'1/ span 6'}>
				<Text variant='desc'>A personalised learning resource for self-directed learners.</Text>
			</Grid>
			<Grid gridColumn={'7/ span 6'}>
				<Flex variant='flexes.rbc'>
					<Text variant='desc'>Mission</Text>
					<Text variant='desc'>Contact us</Text>
					<Text variant='desc'>Subscribe</Text>
				</Flex>
			</Grid>

		</Layout>
		)
}

export default Links