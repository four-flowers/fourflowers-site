import React from 'react'
import { Flex, Text } from 'rebass'

const Heading = props => {
	return (
		<Flex
			py={3}
			px={3}
			bg={props.bg}
			width='100%'
			variant='flexes.ccc'
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
						left: 4,
						color: 'transparent',
						'-webkit-text-stroke-width': '1px',
						'-webkit-text-stroke-color': `${props.color}`,
					}
				}}

			>
				{props.children}
			</Text>
		
		</Flex>
		)
}

export default Heading

Heading.defaultProps = {
	borderColor: 'transparent'
}