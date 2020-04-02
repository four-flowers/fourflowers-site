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
				width='100%'
				as='header'
				minHeight={{all: 'auto', sm: '76vh'}}
				flexes='ccc'
				flexGrow='1'
				py={{all: 5, lg: 'auto'}}
				sx={{background: 'linear-gradient(180deg, #FFF5F3 0%, #FFFFFF 100%)'}}
			>
				<Logo/>
				<Text
					as='h1'
					textAlign='center'
					variant='heading'
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