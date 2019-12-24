import React from 'react'
import { Box, Flex, Text, Link } from './system'
import { Layout, Grid } from './Layout'
import NextLink from 'next/link'

const Links = props => {
	return (
		<Flex
			py={{all: 3, lg: 5}}
			px={{all: 2, lg: 3}}
			width='-webkit-fill-available'
			height={{all: 'fit-content', lg: 'auto'}}
			flexes='rse'
			sx={{
				outline: '1px dashed',
				outlineColor: 'blacks.2'
				}}
		>

			<Flex
				width={{all: 1, lg: 1/2}}
				pb={{all: 3, lg: 'auto'}}
			>
				<Text variant='desc'>A personalised learning resource for self-directed learners.</Text>
			</Flex>

			<Flex
				width={{all: 1, lg: 1/2}}
				flexes={{all: 'rbe', lg: 'rss'}}
			>
				<Link
					variant='desc'
					decoration='default'
					href='#'
					mr={{all: 0, lg: 5}}
				>
					Mission
				</Link>
				<Link
					variant='desc'
					decoration='default'
					href='mailto:mmarypo@gmail.com'
					mr={{all: 0, lg: 5}}
				>
					Contact
				</Link>
				<Link
					variant='desc'
					decoration='default'
					href='./test'
				>
					Subscribe
				</Link>
			</Flex>

		</Flex>
		)
}

export default Links