import React from 'react'
import { Flex, Text } from './system'

export default function Heading(props) {
	return (
		<Flex
			py={3}
			px={{all: 2, md: 3}}
			bg={props.bg}
			width='100%'
			variant='flexes.ccc'
			textAlign={{ all: 'center', sm: 'left' }}
			sx={{
				position: 'relative',
				borderBottom: '1px solid',
				borderColor: `${props.borderColor}`,
			}}
		>
			<Text
				as='h2'
				variant='heading'
				sx={{
					':before': {
						content: `'●'`,
						position: 'absolute',
						left: [2, 2, 2, 3],
						color: 'transparent',
						'WebkitTextStrokeWidth': '1px',
						'WebkitTextStrokeColor': `${props.color}`,
					}
				}}

			>
				{props.children}
			</Text>
		
		</Flex>
		)
}

Heading.defaultProps = {
	borderColor: 'transparent'
}