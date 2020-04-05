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
		name: 'Get updates',
		href: 'http://eepurl.com/gOnRAz',
	},
	twitter: {
		name: 'Twitter',
		href: 'https://twitter.com',
	},
}

export default {
	intro: {
		description: 'A learning resource helping self&#x2011;directed learners.',
		links: [
			links.contact,
			links.subscribe,
		],
	},
	for: {
		heading: '',
		'p1': 'This is a school for children practicing self-directed education, as well as for those who wants to complement the main program.',
		'p2': 'If you create a curriculum yourself, this site will help you to meet, chat and share your education program with others, or join a program of your interest.',
	},
	course: {
		heading: 'Creating a course is simple',
		pictograms: [
			{
				heading: 'Idea',
				desc: 'Offer a course idea and describe what you want to learn.',
			},
			{
				heading: 'Teacher',
				desc: 'Find a teacher who can facilitate/mentor you.',
			},
			{
				heading: 'Peers',
				desc: 'Invite others to learn together!',
			},
		],
	},
	how: {
		heading: 'How it works',
		items: [
			{id: 'a', desc: 'Create a topic for the course.'},
			{id: 'b', desc: 'Invite a teacher who wants to make a course with you.'},
			{id: 'c', desc: 'Describe with a teacher what the course will be about.'},
			{id: 'd', desc: 'Define stages, time, and seminars together with a teacher.'},
			{id: 'e', desc: 'Invite everyone interested.'},
			{id: 'f', desc: 'Start the course.'},
		],
	},
	mission: {
		heading: 'Mission',
		p1: 'In Four Flowers School you decide what subjects to study and in which order, what your learning style and comfortable pace are. This is a place where we trust your choice.',
		p2: 'We believe that giving children freedom of knowledge is the best and most effective way of learning.'
	},
	partners: {
		heading: 'Partners',
		desc: 'Join our community on Facebook and help create a free learning environment for children. The project is nonprofit, based on a personal desire of everyone to bring something to the world and share with the young generation what you know and can do.',
	},
	footer: {
		desc: 'The platform is currently under development: you can be the first to test the platform by signing up for updates.',
		copyright: 'Freemia School · 2019',
		link: {
			name: links.subscribe.name,
			href: links.subscribe.name,
		}
	},
}