import { Flex, Text, Link } from './system'
import { Heading, Copy, Layout } from './bridge'

export default function Partners(props) {
	return (
		<Flex
			as='section'
			minHeight={{all: 'auto', sm: '100vh'}}
			flexes='css'
			bg='white'
			color='orange'
		>
			<Heading color='#FB4926'>{Copy.partners.heading}</Heading>
			<Layout
				flexGrow='1'
				py={6}
				// flexes='cec'
			>
				<Text
					gridColumn='1/7'
					variant='body'
					py={{all: 3, sm: 5, md: 7}}
					px={{all: 2, md: 3}}
				>
				{Copy.partners}
				</Text>
				<Link
					flexes='ccc'
					gridColumn='7/-1'
					variant='body'
					decoration='default'
					py={8}
					textAlign='center'
					verticalAlign='center'
					sx={{
						display: 'flex',
						border: '1px dashed orange',
						borderRadius: '999px',
						':hover': {
							bg: 'orange',
							color: 'white',
						}
					}}
				>
					<Text as='span'>Join group</Text>
				</Link>
			</Layout>
		</Flex>
		)
}