import React from 'react'
import { Flex, Text } from './system'
import { Logo, Links } from './bridge'

const Intro = props => {
	return (
		<Flex
			height={{all: 'auto', sm: '100vh'}}
			p={{all: 2, md: 3}}
			flexes='cbc'
		>
			<Flex
				as='header'
				flexes='ccc'
				flexGrow='1'
				py={{all: 5, lg: 'auto'}}
			>
				<Logo/>
				<Text
					as='h1'
					textAlign='center'
					variant='title'
				>
					Freemia School <br/>Family Education
				</Text>
			</Flex>

			<Links/>

		</Flex>
		)
}

export default Intro