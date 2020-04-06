import React from 'react'
import Head from 'next/head'

const description = 'A learning resource for self-directed learners.'
const name = 'Four Flowers School · Self-Directed Learning'
const keywords = 'education, unschooling, free-schooling, school'
const url = 'https://fourflowers.school'

export default function Meta() {
	return (
		<Head>
			<meta charSet='utf-8' />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
  	  <meta name={name} />
    	<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
		  
			<meta property="og:image" content="https://fourflowers.school/thumb.jpg" />
			<meta property="image:width" content="1200" />
			<meta property="image:height" content="628" />
			<meta property="og:title" content={name} />
		  <meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:type" content="website" />
		  <link rel="icon" href="/fav.png" />
		  <title>{name}</title>
		</Head>
	)
}