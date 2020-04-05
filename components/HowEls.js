import { Flex, Text } from './system'
import { Layout } from './bridge'

export const Row = props => (
	<Layout
		columns='8'
		gridColumn={{ all: '1/-1', sm: '3/11' }}
		p={{ all: 2, sm: 3 }}
		bg='white'
		color='blue'
		sx={{
			borderBottom: '1px solid',
			borderColor: 'grey',
			':hover': {
				color: 'orange',
			},
		}}
	>
		<Text
			gridColumn={{ all: '1/-1', sm: '1/2' }}
			variant='desc'
			pr={3}
			width='inline-block'
			color={{all: 'orange', sm: 'inherit'}}
		>
			{props.id}
		</Text>
		<Text gridColumn={{ all: '1/-1', sm: '2/-1' }} variant='desc'>
			{props.desc}
		</Text>
	</Layout>
)
