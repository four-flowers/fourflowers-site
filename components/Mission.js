import { Flex, Text } from './system'
import { Heading, Copy, Layout } from './bridge'

export default function For(props) {
	return (
		<Flex as='section' bg='yellow' flexes='css'>
			<Heading color='#000'>{Copy.mission.heading}</Heading>
			<Flex
				width='100%'
				flexes='ccc'
				minHeight={{ all: 'auto', sm: '100vh' }}
				py={{ all: 5, sm: 0 }}
			>
				<Layout>
					<Text
						gridColumn={{ all: '1/-1', sm: '1/7' }}
						variant='body'
						pb={{ all: 2, sm: 0 }}
					>
						{Copy.mission.p1}
					</Text>
					<Text gridColumn={{ all: '1/-1', sm: '7/-1' }} variant='body'>
						{Copy.mission.p2}
					</Text>
				</Layout>
			</Flex>
		</Flex>
	)
}
