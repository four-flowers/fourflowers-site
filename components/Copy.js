export const links = {
	mission: {
		name: 'Mission',
		href: '/mission',
	},
	contact: {
		name: 'Contact',
		href: 'mailto:info@fourflowers.school',
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
		'p1': 'Four Flowers School is for parents and children practicing self-directed education, as well as for those looking to complement their regular schooling.',
		'p2': 'By joining Four Flowers School, you will be able to meet, discuss, and share your education program with others, or simply join a program of your interest.',
	},
	course: {
		heading: 'Creating a course is simple',
		pictograms: [
			{
				heading: 'Idea',
				desc: 'Offer a course idea and describe what you want to learn.',
			},
			{
				heading: 'Facilitator',
				desc: 'Find someone who can facilitate or mentor you.',
			},
			{
				heading: 'Peers',
				desc: 'Invite others to start learning together!',
			},
		],
	},
	how: {
		heading: 'How it works',
		items: [
			{id: 'a', desc: 'Create a topic for the course.'},
			{id: 'b', desc: 'Invite a facilitator who wants to make a course with you.'},
			{id: 'c', desc: 'Discuss with a facilitator what the course will be about.'},
			{id: 'd', desc: 'Define stages, time, and seminars together with a facilitator.'},
			{id: 'e', desc: 'Invite everyone interested.'},
			{id: 'f', desc: 'Start the course.'},
		],
	},
	mission: {
		heading: 'Mission',
		p1: 'At Four Flowers School, you decide which learning style and pace are comfortable for you, as well as what subjects to study and in which order. This is a place where we trust your choice.',
		p2: 'We believe that giving children freedom of knowledge is the best and most effective way of learning.'
	},
	partners: {
		heading: 'Partners',
		desc: 'Join our community on Facebook and help create a free learning environment for children. The project is a nonprofit initiative, based on everyone’s desire to share what you know and can do with the young generation.',
	},
	footer: {
		desc: 'The platform is currently under development: you can be the first to test the platform by signing up for updates.',
		copyright: 'Four Flowers School',
		year: '2020',
		location: 'Los Angeles, CA',
		link: {
			name: links.subscribe.name,
			href: links.subscribe.name,
		}
	},
}