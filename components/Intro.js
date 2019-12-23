import React from 'react'
import { Flex, Text } from 'rebass'
import { Logo, Links } from './bridge'
import Test from './Test'

const Intro = props => {
	return (
		<Flex
			height='100vh'
			p={3}
			variant='flexes.cbc'
		>
			<Test/>
			<Flex as='header' variant='flexes.ccc' flexGrow='1'>
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