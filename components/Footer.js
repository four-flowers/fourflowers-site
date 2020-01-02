import React from 'react'
import { Flex, Grid, Text, Link } from './system'
import { Layout } from './Layout'
import NextLink from 'next/link'

const Footer = props => {
	return (
		<Layout
			columns='12'
			px='3'
			py='5'
		>
			<Grid
				gridColumn='4/ span 6'
				p='3'
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
					Freemia School · 2019 · Family Education
				</Text>

				<Flex flexes='rcc'>
					<Link
						variant='desc'
						decoration='default'
						href='/mission'
						mr={{all: 2, sm: 3}}
					>
						Twitter
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

export default Footer