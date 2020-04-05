import React from 'react'
import { Flex, Text } from './system'

export const Cell = props =>
	<Flex
		width={{all: 1, md: 1/3}}
		px={{all: 2, md: 3}}
		py={{all: 5, md: 7}}
		color='grey'
		flexes='ccc'
		sx={{
			borderRight: ['none', 'none', 'none', '1px dashed'],
			borderBottom: ['1px dashed', '1px dashed', '1px dashed', 'none'],
			borderColor: ['white', 'white', 'white', 'white'],
			':last-child': {border: 'none'},
		}}
		{...props}
	/>

export const Title = props =>
	<Text
		as='h2'
		variant='heading'
		pb={{all: 5, md: 6}}
		flexes='ccc'
		textAlign='center'
		width='100%'
		{...props}
	/>

export const Desc = props =>
	<Text
		variant='desc'
		pt={{ all: 5, sm: 6 }}
		textAlign={{ all: 'center', sm: 'left' }}
		{...props}
	/>