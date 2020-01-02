import React from 'react'
import { Grid, Text } from './system'
import styled from '@emotion/styled'

export const Layout = props => {
	return (
		<Grid
			width='100%'
			gridTemplateColumns={`repeat(${props.columns}, 1fr)`}
			gridGap={{all: 2, md: 3}}
			{...props}
		/>
	)
}

Layout.defaultProps = {
	gridTemplateColumns: 'repeat(12, 1fr)',
}