import React from 'react'
import { Flex, Text } from 'rebass'

// const Heading = props => {
// 	return (
// 		<Flex py={3} px={3} bg={props.bg} width='100%' variant='flexes.ccc' sx={{position: 'relative'}}>
// 			<Text variant='heading'
// 				sx={{
// 					position: 'absolute',
// 					top: '50%',
// 					mt: '-50%',
// 					left: 0,
// 					color: 'transparent',
// 					'-webkit-text-stroke-width': '1px',
// 					'-webkit-text-stroke-color': `${props.color}`,
// 				}}
// 			>●</Text>
// 			<Text color={props.color} variant='heading'>{props.children}</Text>
// 		
// 		</Flex>
// 		)
// }


const Heading = props => {
	return (
		<Flex
			py={3} px={3} bg={props.bg} width='100%' variant='flexes.ccc'
			sx={{
				position: 'relative',
				borderBottom: '1px solid',
				borderColor: `${props.borderColor}`,
			}}
		>
			<Text
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