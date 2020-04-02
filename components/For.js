import { Flex, Text } from './system'
import { Heading, Copy, Layout } from './bridge'

const For = props => {
	return (
		<Flex
			as='section'
			minHeight={{all: 'auto', sm: '100vh'}}
			flexes='css'
			bg='green'
			color='grey'
		>
			<Heading color='#F9FAFC'>{Copy.for.heading}</Heading>
			<Layout
				flexGrow='1'
				// flexes='cec'
			>
				<Text
					gridColumn='1/7'
					variant='body'
					py={{all: 3, sm: 5, md: 7}}
					px={{all: 2, md: 3}}
				>
				{Copy.for.p1}
				</Text>
				<Text
					gridColumn='7/-1'
					variant='body'
					py={{all: 3, sm: 5, md: 7}}
					px={{all: 2, md: 3}}
				>
				{Copy.for.p2}
				</Text>
			</Layout>
		</Flex>
		)
}

export default For