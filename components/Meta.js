import React from 'react'
import Head from 'next/head'

export default function Meta() {
	return (
		<Head>
			<meta charSet='utf-8' />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
  	  <meta name="Four Flowers School · Family Education" />
    	<meta name="description" content="A personalised learning resource for self-directed learners." />
			<meta name="keywords" content="education, unschooling, free-schooling, school" />
		  
			<meta property="og:image" content="https://fourflowers.school/thumb.jpg" />
			<meta property="image:width" content="1200" />
			<meta property="image:height" content="628" />
			<meta property="og:title" content="Four Flowers School · Family Education" />
		  <meta property="og:description" content="A personalised learning resource for self-directed learners." />
			<meta property="og:url" content="https://fourflowers.school" />
			<meta property="og:type" content="website" />
		  <link rel="icon" href="/fav.png" />
		  <title>Four Flowers School · Family Education</title>
		</Head>
	)
}