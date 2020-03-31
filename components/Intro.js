import React from 'react'
import { Flex, Text } from './system'
import { Logo, Links } from './bridge'
import {css} from 'emotion'

const Intro = props => {
	return (
		<Flex
			// p={{all: 2, md: 3}}
			flexes='cbc'
			sx={{
				flexWrap: 'nowrap',
			}}
		>
			<Flex
				as='header'
				minHeight={{all: 'auto', sm: '70vh'}}
				flexes='ccc'
				flexGrow='1'
				py={{all: 5, lg: 'auto'}}
			>
				<Logo/>
				<Text
					as='h1'
					textAlign='center'
					variant='title'
					pt='3'
				>
					Four Flowers School <br/>Family Education
				</Text>
			</Flex>

			<Links/>

		</Flex>
		)
}

export default Intro