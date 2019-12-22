import React, { useState, useRef } from 'react'
import { Flex, Text } from 'rebass'


export const Pillar = props => {
	
	const [setActive, setActiveState] = useState('')
	const [setHeight, setHeightState] = useState('0px')
	const [setOpacity, setOpacityState] = useState(0)
	const [setTransition, setTransitionState] = useState('opacity .2s ease')
	const [setToggle, setToggleState] = useState('"+"')

	const paragraph = useRef(null)

	const toggleItem = () => {
		setActiveState(setActive === '' ? 'active' : '')
		setHeightState(setActive === 'active' ? '0px' : `${paragraph.current.scrollHeight}px`)
		setOpacityState(setActive === 'active' ? 0 : 1)
		setTransitionState(setActive === 'active' ? 'opacity .2s ease' : 'opacity .5s ease .25s')
		setToggleState(setActive === 'active' ? '"+"' : '"–"')
	}
	
	return (
		<Flex
			as='section'
			py={7}
			px={3}
			m={3}
			mt={0}
			variant='flexes.css'
			sx={{
				border: '1px dashed',
				borderColor: 'blue',
			}}
		>
			
			<Flex
				as='header'
				width='100%' variant='flexes.css'
				sx={{
					'::-webkit-details-marker': {display: 'none'},
					'cursor': 'pointer',
				}}
				onClick={toggleItem}
			>

				<Text
					as='h3'
					variant='heading'
					sx={{
						':after': {
							content: setToggle,
							right: 5,
							position: 'absolute',
						}
					}}
				>
				 {props.heading}
				</Text>
				<Text variant='body' pt={3}>{props.subheading}</Text>

			</Flex>
			
				<Flex
					variant='flexes.css'
					ref={paragraph}
					sx={{
							overflow: 'hidden',
							maxHeight: setHeight,
							transition: 'max-height .5s ease',
						}}
				>
					<Text as='p' width={2/3} variant='desc' py={3}
						sx={{
							opacity: setOpacity,
							transition: setTransition,
							}}
					>
						{props.paragraph}
					</Text>
				</Flex>

		</Flex>
		)
}