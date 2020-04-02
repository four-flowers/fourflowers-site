import { Flex, Text } from './system'
import { Heading, Copy, Layout } from './bridge'

export default function For(props) {
	return (
		<Flex
			as='section'
			minHeight={{all: 'auto', sm: '100vh'}}
			flexes='css'
			bg='yellow'
		>
			<Heading color='#000'>{Copy.mission.heading}</Heading>
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
				{Copy.mission.p1}
				</Text>
				<Text
					gridColumn='7/-1'
					variant='body'
					py={{all: 3, sm: 5, md: 7}}
					px={{all: 2, md: 3}}
				>
				{Copy.mission.p2}
				</Text>
			</Layout>
		</Flex>
		)
}