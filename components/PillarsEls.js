import React, { useState, useRef } from 'react'
import { Flex, Text } from 'rebass'


export const Pillar = props => {
	
	const [setActive, setActiveState] = useState('')
	const [setHeight, setHeightState] = useState('0px')
	const [setOpacity, setOpacityState] = useState(0)
	const [setToggle, setToggleState] = useState('"+"')

	const content = useRef(null)

	const toggleItem = () => {
		setActiveState(setActive === '' ? 'active' : '')
		setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`)
		setOpacityState(setActive === 'active' ? 0 : 1)
		setToggleState(setActive === 'active' ? '"+"' : '"–"')
	}
	
	return (
		<Flex
			width='100%' py={7} px={3} variant='flexes.css'
			sx={{
				borderBottom: '1px solid',
				borderColor: 'border',
			}}
		>
			
			<Flex
				width='100%' variant='flexes.css'
				sx={{
					'::-webkit-details-marker': {display: 'none'},
					'cursor': 'pointer',
				}}
				onClick={toggleItem}
			>

				<Text
					variant='heading'
					sx={{
						':after': {
							content: setToggle,
							right: 3,
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
					ref={content}
					sx={{
							overflow: 'hidden',
							maxHeight: setHeight,
							transition: 'max-height .5s ease',
						}}
				>
					<Text variant='body' pt={3}
						sx={{
							opacity: setOpacity,
							transition: 'opacity .5s ease .25s',
							}}
					>
						{props.paragraph}
					</Text>
				</Flex>

		</Flex>
		)
}