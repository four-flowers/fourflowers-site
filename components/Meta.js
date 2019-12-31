import React from 'react'
import Head from 'next/head'

export const Meta = () => {
	return (
		<Head>
		  <meta charSet='utf-8' />
		  <meta name="viewport" content="initial-scale=1.0, width=device-width" />

  	  <meta name="Freemia School · Family Education" />
    	<meta name="description" content="A personalised learning resource for self-directed learners." />
			<meta name="keywords" content="education, unschooling, free-schooling, school" />
		  
    	<meta property="og:image"					content="/og.jpg" />
		  <meta property="og:title"					content="Freemia School · Family Education" />
		  <meta property="og:description"		content="A personalised learning resource for self-directed learners."
		   />
		   <meta property="og:type"					content="website" />
    	<meta property="og:url"						content="https://freemia.school" />
		  <link rel="icon" href="/fav.png" />
		  <title>Freemia School · Family Education</title>
		</Head>
	)
}