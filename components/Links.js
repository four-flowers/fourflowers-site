import React from 'react'
import { Box, Flex, Text, Link } from 'rebass'
import { Layout, Grid } from './Layout'
import NextLink from 'next/link'

const Links = props => {
	return (
		<Layout
			py={5}
			px={3}
			width='-webkit-fill-available'
			columns={{all: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
			rows={{all: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)'}}
			gap='3'
			variant='flexes.rse'
			sx={{
				outline: '1px dashed',
				outlineColor: 'blacks.2'
				}}
		>

			<Grid gridColumn={1} gridRow={1}>
				<Text variant='desc'>A personalised learning resource for self-directed learners.</Text>
			</Grid>
			<Grid
				gridColumn={{all: 1, md: 2}}
				gridRow={{all: 2, md: 1}}
			>
				<Flex variant={{all: 'flexes.rbe'}}>
					<Link href='#' pr={5}>Mission</Link>
					<Link href='mailto:mmarypo@gmail.com' pr={5}>Contact</Link>
					<Link href='./test' pr={5}>Subscribe</Link>
				</Flex>
			</Grid>

		</Layout>
		)
}

export default Links