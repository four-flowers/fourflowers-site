import React, { useState, useEffect } from 'react'
import { Flex, Text } from 'rebass'


export const Pillar = props => {
	const [open, setOpen] = useState(false)
	
	return (
		<Flex
			as='details' width='100%' py={7} px={3} variant='flexes.css'
			sx={{
				borderBottom: '1px solid',
				borderColor: 'border',
			}}
			onClick={() => setOpen(!open)} open={open}
		>
			
			<Flex as='summary' variant='flexes.css'
				sx={{
					'::-webkit-details-marker': {display: 'none'},
					'cursor': 'pointer',
				}}
			>

				<Text variant='heading'
					sx={{
						':after': {
							content: `'+'`,
							right: 3,
							position: 'absolute',
						}
						}}
				>
				 {props.heading}
				</Text>
				<Text variant='body' pt={3}>{props.subheading}</Text>

			</Flex>
			
				<Flex variant='flexes.css'>
					<Text variant='body' pt={3}
						sx={{
							transition: 'all .5s ease',
							opacity: open ? 0 : 1,
						}}
					>
						{props.paragraph}
					</Text>
				</Flex>

		</Flex>
		)
}