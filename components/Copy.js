const links = {
	mission: {
		name: 'Mission',
		href: '/mission',
	},
	contact: {
		name: 'Contact',
		href: 'mailto:hi@freemia.school',
	},
	subscribe: {
		name: 'Subscribe',
		href: 'http://eepurl.com/gOnRAz',
	},
	twitter: {
		name: 'Twitter',
		href: 'https://twitter.com',
	},
}

export default {
	intro: {
		description: 'A personalised learning resource for self&#8209;directed learners.',
		links: [
			links.mission,
			links.contact,
			links.subscribe,
		],
	},
	for: {
		heading: 'For everyone',
		body: 'This place is created both for little self-learners, their parents, and for tutors. Whether you study at home or with a group, you are welcome to join our community to start learning and sharing knowledge.'
	},
	how: [
		{
			heading: 'Find',
			subHeading: 'a teacher or become one',
		},
		{
			heading: 'Create',
			subHeading: 'your own courses',
		},
		{
			heading: 'Connect',
			subHeading: 'with students around you',
		},
	],
	pillars: {
		heading: 'Three Pillars',
		items: [
			{
				heading: 'To be',
				subHeading: 'Know yourself better',
				body: 'This type of learning answers such questions as “What do I love doing?”, “What is my dream?”, “What are my unique strengths?” and even “What is my role in a group?”. Here reflection is necessary. Learning to be is the most individualistic of the three different types of learning.',
			},
			{
				heading: 'To know',
				subHeading: 'Understand how world works',
				body: 'The pillar focuses on knowledge that can be captured in books and lectures. This includes timelines and dates, definitions and facts. Most schools are very busy at developing this type of learning.',
			},
			{
				heading: 'To do',
				subHeading: 'Develop practical skills',
				body: 'Focusing on developing skills that can be applied, such as in the productive world. Learning to do almost always involves significant practice. Learning to do topics include such abstract skills as leadership, innovation, stewardship, and project management on one end, and more literal skills, such as how to build, grow, use, or fix things, on the other.',
			},
		],
	},
	mission: {
		heading: 'Mission',
		body: '[link!](https://link.com) We believe in free education, for everyone. We believe we can do better. Learn more about our mission.'
	},
	footer: {
		description: 'Freemia School · 2019',
		links: [
			links.twitter,
			links.contact,
			links.subscribe,
		],
	},
}