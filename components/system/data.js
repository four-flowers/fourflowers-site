import React from 'react'
import Markdown from 'react-markdown'
import { Flex, Text, Link } from '../system'

function StyledLink(props) {
	if (props.href.match(/^(https?:)?\/\//))
		return <Link decoration='default' href={props.href}>{props.children}</Link>
}

export const Data = props => {
	return (
		<Text {...props} >
			<Markdown
				source={props.source}
				renderers={{ link: StyledLink}}
			/>
		</Text>
		)
}