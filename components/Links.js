import React from 'react'
import { Box, Flex, Grid, Text, Link } from './system'
import { Layout } from './Layout'
import NextLink from 'next/link'

const Links = props => {
	return (
		<Layout
			columns='12'
			bg='grey'
			px={{all: 2, md: 3}}
			py={{all: 3, md: 5}}
		>
			<Grid
				gridColumn={{all: '1/ -1', sm: '2/ -2', md: '4/ span 6'}}
				px={{all: 2, md: 3}}
				py={{all: 3, md: 5}}
				bg='white'
				flexes='ccc'
				sx={{
					outline: '1px dashed',
					outlineColor: 'blacks.2'
				}}
			>

				<Text
					variant='desc'
					textAlign='center'
					pb='2'
				>
					A personalised learning resource for self&#8209;directed learners.
				</Text>

				<Flex flexes='rcc'>
					<Link
						variant='desc'
						decoration='default'
						href='/mission'
						mr={{all: 2, sm: 3}}
					>
						Mission
					</Link>
					<Link
						variant='desc'
						decoration='default'
						href='mailto:hi@freemia.school'
						mr={{all: 2, sm: 3}}
					>
						Contact
					</Link>
					<Link
						variant='desc'
						decoration='default'
						href='http://eepurl.com/gOnRAz'
					>
						Subscribe
					</Link>
				</Flex>
				
			</Grid>
			
		</Layout>
		)
}

export default Links