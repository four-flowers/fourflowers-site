import { Flex, Text } from './system'
import { Heading, Copy, Layout } from './bridge'

export default function For(props) {
	return (
		<Flex as='section' bg='green' color='grey'>
			<Heading color='#F9FAFC'>{Copy.for.heading}</Heading>
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
						{Copy.for.p1}
					</Text>
					<Text gridColumn={{ all: '1/-1', sm: '7/-1' }} variant='body'>
						{Copy.for.p2}
					</Text>
				</Layout>
			</Flex>
		</Flex>
	)
}
