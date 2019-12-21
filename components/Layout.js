import React from 'react'
import { Box } from 'rebass'
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
			// width={'100%'}
			gridTemplateColumns={'repeat(12, 1fr)'}
			gridColumnGap={1}
			px={4}
		/>
	)
}