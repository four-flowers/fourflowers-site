import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import flexes from './flexes'

const breakpoints = ['375px', '768px', '1440px']

const colors = {
	black: '#000',
	white: '#FFF',
	orange: '#FB4926',
}

const fonts = {
	sans: 'Helvetica Neue, sans-serif',
	quatro: 'iA Writer Quattro S, monospace',
}

const text = {
	title: {
		fontSize: ['1rem', '3rem', '7rem'],
		lineHeight: 1.25,
		fontFamily: 'sans',
	},
	copy: {
		tag: 'p',
		fontSize: ['1.75rem', '3rem'],
		lineHeight: 3.25,
	},
}

const variants = {
	flexes,
}

const theme = {
	breakpoints,
	colors,
	fonts,
	text,
	variants,
}

export const Theme = (props) => <ThemeProvider theme={theme} {...props} />