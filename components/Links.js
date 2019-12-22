import React from 'react'
import { Box, Flex, Text, Link as SysLink } from 'rebass'
import { Layout, Grid } from './Layout'
import Link from 'next/link'

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
					<Link><SysLink href='#' pr={5}>Mission</SysLink></Link>
					<Link><SysLink href='mailto:mmarypo@gmail.com' pr={5}>Contact us</SysLink></Link>
					<Link><SysLink href='./test'>Subscribe</SysLink></Link>
				</Flex>
			</Grid>

		</Layout>
		)
}

export default Links