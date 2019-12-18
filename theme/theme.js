import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { injectGlobal } from 'emotion'
import flexes from './flexes'

const breakpoints = [0, '375px', '768px', '1440px']
breakpoints.all = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]

const space = [0, 8, 16, 32, 48, 64, 96, 128, 256]

const colors = {
	transparent: 'rgba(0,0,0,.0)',
	black: '#000',
	white: '#FFF',
	orange: '#FB4926',
	grey: '#F9FAFC',
	blue: '#0F72B9',
	brown: '#CB996F',
	yellow: '#FEDA31',
	border: 'rgba(0,0,0,.16)',
}

const fonts = {
	sans: 'Helvetica Neue, sans-serif',
	spaced: 'iA Writer Quattro S, monospace',
}

const text = {
	title: {
		fontSize: ['2rem', null, '7rem'],
		lineHeight: 1.2,
		fontFamily: 'sans',
		letterSpacing: ['.02em', null, '.04em'],
	},
	heading: {
		fontSize: ['1.75rem', null, '3rem'],
		lineHeight: 1.25,
		fontFamily: 'sans',
		letterSpacing: ['.02em', null, '.04em'],
	},
	body: {
		fontSize: ['1.75rem', '3rem'],
		lineHeight: 1.2,
		fontFamily: 'spaced',
	},
	desc: {
		fontSize: ['1.25rem', '1.75rem'],
		lineHeight: 1.5,
		fontFamily: 'spaced',
	},
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
		border-bottom: 1px solid ${colors.transparent};
		color: inherit;
		cursor: pointer;
	}

	h1, h2, h3, h4 {
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
