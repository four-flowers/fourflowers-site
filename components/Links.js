import React from 'react'
import { Box, Flex, Text, Link } from './system'
import { Layout, Grid } from './Layout'
import NextLink from 'next/link'

const Links = props => {
	return (
		<Flex
			py={{all: 3, lg: 5}}
			px={{all: 2, lg: 3}}
			mx={{all: 0, xlg: 7}}
			width={{all: '-webkit-fill-available'}}
			height={{all: 'fit-content', lg: 'auto'}}
			flexes='rse'
			sx={{
				outline: '1px dashed',
				outlineColor: 'blacks.2'
				}}
		>

			<Flex
				width={{all: 1, lg: 1/2}}
				pb={{all: 3, lg: 0}}
				pr={{all: 0, lg: 3}}
			>
				<Text
					width={{all: '100%', lg: 'auto'}}
					variant='desc'
					textAlign={{all: 'center', lg: 'left'}}
				>
					A personalised learning resource for
					<Box as='span' sx={{flexWrap: 'nowrap!important'}}> self-directed </Box>
					learners.
				</Text>
			</Flex>

			<Flex
				width={{all: 1, lg: 1/2}}
				flexes={{all: 'rcc', lg: 'rss'}}
			>
				<Link
					variant='desc'
					decoration='default'
					href='/mission'
					mr={{all: 2, sm: 3,  lg: 5}}
				>
					Mission
				</Link>
				<Link
					variant='desc'
					decoration='default'
					href='mailto:hi@freemia.school'
					mr={{all: 2, sm: 3,  lg: 5}}
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

		</Flex>
		)
}

export default Links