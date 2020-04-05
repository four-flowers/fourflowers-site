import React from 'react'
import { Flex, Text, Link } from './system'
import { Copy, Layout } from './bridge'

export default function Footer(props) {
	return (
		<Layout bg='grey' py={{ all: 5, sm: 6 }}>
			<Flex
				gridColumn={{ all: '1/-1', sm: '1/7' }}
				p={{ all: 2, sm: 3 }}
				mb={{ all: 2, sm: 0 }}
				textAlign='center'
				flexes='ccc'
				sx={{
					border: '1px dashed',
					borderColor: 'border',
				}}
			>
				<Text variant='desc' pb={2}>
					{Copy.footer.desc}
				</Text>
				<Link decoration='default' href={Copy.footer.link.href} variant='desc'>
					{Copy.footer.link.name}
				</Link>
			</Flex>
			<Flex
				gridColumn={{ all: '1/-1', sm: '7/-1' }}
				p={{ all: 2, sm: 3 }}
				textAlign='center'
				flexes='ccc'
				sx={{
					border: '1px dashed',
					borderColor: 'border',
				}}
			>
				<Text variant='desc'>{Copy.footer.copyright}</Text>
			</Flex>
		</Layout>
	)
}
