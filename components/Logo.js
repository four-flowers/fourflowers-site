import React from 'react'
import { Flex, Text } from 'rebass'
import { Base, TopRight, RightBottom, BottomLeft, TopLeft } from './LogoEls'

const Logo = props => {
	return (

		<Flex
			sx={{
				position: 'relative',
				width: '216px',
				height: '216px',
				}}
		>
			<TopLeft opacity={.4} />
			<TopRight opacity={.4} />
			<BottomLeft opacity={.4} />
			<RightBottom opacity={.4} />
			<Base/>
		</Flex>
		)
}

export default Logo