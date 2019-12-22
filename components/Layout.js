import React from 'react'
import { Box, Text, Link as RebassLink } from 'rebass'
import { grid } from 'styled-system'
import styled from '@emotion/styled'

export const Grid = styled(Box)`
	${grid}
	display: grid;
`

export const Layout = props => {
	return (
		<Grid
			{...props}
			gridTemplateColumns={props.columns}
			gridTemplateRows={props.rows}
			gridColumnGap={props.gap}
			px={props.px}
		/>
	)
}

Layout.defaultProps = {
	gridTemplateColumns: 'repeat(12, 1fr)',
	gridTemplateRows: 1,
	gridColumnGap: 1,
	px: 3,
}

export const Link = props => {
	return (
			<NextLink href={props.href}>{props.children}</NextLink>
		)
}