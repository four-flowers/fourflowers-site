import { Flex, Text } from './system'
import { Layout } from './bridge'

export const Row = props =>
	<Layout
		columns='8'
		gridColumn={{ all: '3/11' }}
		p={{ all: 3 }}
		bg='white'
		color='blue'
		sx={{
			borderBottom: '1px solid',
			borderColor: 'grey',
			':hover': {
				color: 'orange'
			}
		}}
	>
		<Text
			gridColumn='1/2'
			variant='desc'
			pr={3}
			width='inline-block'
		>
			{props.id}
		</Text>
		<Text
			gridColumn='2/-1'
			variant='desc'
		>
			{props.desc}
		</Text>
		
	</Layout>