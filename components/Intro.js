import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { Links } from './index'

const Intro = props => {
	return (
		<Flex
			height='100vh'
			p={3}
			variant='flexes.cbc'
		>
			<Flex as='header' variant='flexes.ccc' flexGrow='1'>
				<Flex
					width='200px' height='200px'
					mb={3}
					sx={{
						borderRadius: '999px',
						border: '1px solid',
						borderColor: 'orange',

					}}
				/>
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