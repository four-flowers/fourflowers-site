import React from 'react'
import { Grid, Text } from './system'
import styled from '@emotion/styled'

export const Layout = props => {
	return (
		<Grid
			width='100%'
			gridTemplateColumns={`repeat(${props.columns}, 1fr)`}
			gridTemplateRows={`repeat(${props.rows}, 1fr)`}
			gridGap={props.gap}
			{...props}
		/>
	)
}

Layout.defaultProps = {
	gridTemplateColumns: 'repeat(12, 1fr)',
	gridTemplateRows: '1',
	gridColumnGap: '3',
}