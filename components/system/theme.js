import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { injectGlobal } from 'emotion'
import flexes from './flexes'

const breakpoints = [0, '40em', '64em', '80em', '90em', '100em']
breakpoints.all	= breakpoints[0]
breakpoints.sm	= breakpoints[1] // 640
breakpoints.md	= breakpoints[2] // 1024
breakpoints.lg	= breakpoints[3] // 1280
breakpoints.xlg	= breakpoints[4] // 1440+

const space = [
	0,		// 0
	8,		// 1
	16,		// 2
	32,		// 3
	48,		// 4
	64,		// 5
	96,		// 6
	128,	// 7
	256		// 8
]

const colors = {
	transparent: 'rgba(0,0,0,.0)',
	black: '#000',
	blacks: [
		'rgba(0,0,0,.08)',
		'rgba(0,0,0,.16)',
		'rgba(0,0,0,.32)',
		'rgba(0,0,0,.64)',
		],
	white: '#FFF',
	orange: '#FB4926',
	grey: '#F9FAFC',
	blue: '#0F72B9',
	brown: '#CB996F',
	yellow: '#FEDA31',
	green: '#3E7247',
	border: 'rgba(0,0,0,.08)',
}

const fonts = {
	sans: 'Helvetica Neue, Sans-Serif',
	spaced: 'monospace',
}

const text = {
	title: {
		fontSize: ['2rem', null, '3rem', '5rem'],
		lineHeight: 1.2,
		fontFamily: 'sans',
		fontWeight: 'normal',
		letterSpacing: ['.02em', null, '.04em'],
	},
	heading: {
		fontSize: ['1.75rem', null, '2.25rem', null, '3rem'],
		lineHeight: 1.25,
		fontFamily: 'sans',
		fontWeight: 'normal',
		letterSpacing: ['.02em', null, '.04em'],
	},
	body: {
		fontSize: ['1.75rem', null, '2.25rem'],
		lineHeight: 1.3,
		fontFamily: 'spaced',
		fontWeight: 'normal',
	},
	desc: {
		fontSize: ['1.25rem', null, '1.5rem'],
		lineHeight: 1.6,
		fontFamily: 'spaced',
		fontWeight: 'normal',
	},
}

const decoration = {
	default: {
		textDecoration: 'underline',
	}
}

const variants = {
	flexes,
}

const theme = {
	breakpoints,
	space,
	colors,
	fonts,
	text,
	variants,
	flexes,
	decoration,
}

const Global = injectGlobal`

	* {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	  border: none;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  font-size: 16px;
	  font-weight: normal;
	  font-family: ${fonts.sans};
	  -webkit-text-size-adjust: 100%;
	}

	input,
	optgroup,
	select,
	textarea {
	  font-family: inherit;
	  font-size: 100%;
	  margin: 0;
	}

	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
	  -webkit-appearance: button;
	}

	button::-moz-focus-inner,
	[type="button"]::-moz-focus-inner,
	[type="reset"]::-moz-focus-inner,
	[type="submit"]::-moz-focus-inner {
	  border-style: none;
	  padding: 0;
	}

	a {
		text-decoration: none;
		color: inherit;
		cursor: pointer;
	}

	h1, h2, h3, h4, p, a, span {
		font-family: inherit;
		font-weight: normal;
		font-size: inherit;
		font-weight: inherit;
	}

	li {
		list-style: none;
	}
`


export const Theme = ({children}) => {
	return (
		<ThemeProvider theme={theme}>
			<>
			{Global}
			{children}
			</>
		</ThemeProvider>
	)
}
