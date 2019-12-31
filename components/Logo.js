import React from 'react'
import { Flex, Text, Link } from './system'
import { Base, TopRight, RightBottom, BottomLeft, TopLeft } from './LogoEls'

const Logo = props => {
	return (

<Link href='/'>
		<Flex
			sx={{
				position: 'relative',
				width: '216px',
				height: '216px',
				}}
		>
			<TopLeft
				sx={{
					animation: 'fade 16s infinite',
					position: 'absolute',
					'@keyframes fade': {
						from: {opacity: 0},
						'52%': {opacity: 1},
						'60%': {opacity: 0},
						to: {opacity: 0},
					}
				}}
			/>
			<TopRight
				sx={{
					position: 'absolute',
					animation: 'fade 16s infinite 4s',
					'@keyframes fade': {
						from: {opacity: 0},
						'52%': {opacity: 1},
						'60%': {opacity: 0},
						to: {opacity: 0},
					}
				}}
			/>
			<RightBottom
				sx={{
					position: 'absolute',
					animation: 'fade 16s infinite 8s',
					'@keyframes fade': {
						from: {opacity: 0},
						'52%': {opacity: 1},
						'60%': {opacity: 0},
						to: {opacity: 0},
					}
				}}
			/>
			<BottomLeft
				sx={{
					position: 'absolute',
					animation: 'fade 16s infinite 12s',
					'@keyframes fade': {
						from: {opacity: 0},
						'52%': {opacity: 1},
						'60%': {opacity: 0},
						to: {opacity: 0},
					}
				}}
			/>
			<Base/>
		</Flex>
</Link>
		)
}

export default Logo