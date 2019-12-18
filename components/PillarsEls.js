import React, { useState, useEffect } from 'react'
import { Flex, Text } from 'rebass'


export const Pillar = ({children, test}) => {
	const [open, setOpen] = useState(false)
	return (
		<Flex as='details' width='100%' py={7} px={3} variant='flexes.css'
			onClick={() => setOpen(!open)} open={open}
		>
			{children, test}
		</Flex>
		)
}

export const Title = ({children}) => {
	return (
		<Flex as='summary' variant='flexes.css'
			sx={{
				'::-webkit-details-marker': {display: 'none'}
			}}
		>
			{children}
		</Flex>
		)
}

export const Paragraph = ({children}) => {
	return (
		<Text variant='body' pt={3}
			sx={{
				transition: 'all .5s ease',
				opacity: open ? 0 : 1,
			}}
		>
		{children}</Text>
		)
}