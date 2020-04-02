import { Flex, Text, Link } from './system'
import { Copy, Layout } from './bridge'

export default function Footer(props) {
	return (
		<Layout
			bg='grey'
			py={6}
		>
			<Flex
				gridColumn='1/7'
				p={3}
				textAlign='center'
				flexes='ccc'
				sx={{
					border: '1px dashed',
					borderColor: 'border'
				}}
			>
				<Text variant='desc' pb={2}>{Copy.footer.desc}</Text>
				<Link
					decoration='default'
					href={Copy.footer.link.href}
					variant='desc'
				>
					{Copy.footer.link.name}
				</Link>
			</Flex>
			<Flex
				gridColumn='7/-1'
				p={3}
				textAlign='center'
				flexes='ccc'
				sx={{
					border: '1px dashed',
					borderColor: 'border'
				}}
			>
				<Text variant='desc'>{Copy.footer.copyright}</Text>
			</Flex>
		</Layout>
		)
}