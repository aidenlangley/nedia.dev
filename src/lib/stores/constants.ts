import { readable } from 'svelte/store';

// Navigation
export const pages = [
	{
		page: 'home',
		url: '/'
	},
	{
		page: 'résumé',
		url: '/resume'
	},
	{
		page: 'blog'
		// url: '/blog',
	}
];

// About me.
export const forename = readable('Aiden');
export const surname = readable('Langley');
export const email = readable('aiden@nedia.dev');
export const phone = readable('+642040773742');
export const blurb = readable(
	`Born in Aotearoa and grew up in London, England.
  World of Warcraft nerd turned Software Engineer and Linux enthusiast.`
);
export const hobbies = readable([
	'cooking & baking',
	'games',
	'football',
	'technology',
	'art & design'
]);

// Projects
export const projects = readable([
	{
		title: 'bspcq',
		description: [
			`A hobby of mine is tinkering with Linux - this was
        something I wrote to visually represent the bspwm data structure.
        It uses binary space partitioning to divide your desktop into
        nodes that a program can occupy. The code is recursive since you
        can theoretically have an infinite number of nodes, and was a
        lot of fun to write.`
		],
		urls: [
			'https://github.com/aidenlangley/bspcq',
			'https://pypi.org/project/bspcq'
		],
		key_words: ['Python', 'A toy/tool for bspwm, a window manager for Linux']
	},
	{
		title: 'nedots',
		description: [
			`Another hobby related to the first is writing what you might call
        an installer - since I try out a lot of different operation
        systems I automate the process of installing packages, copying
        configuration files - generally the idea is to ensure that the
        things I'm likely to forget get done, and rebuilding from scratch
        is hands free.`,
			`Each time I usually pick a new language to write it in, so far
        I've covered Bash, Fish, Python and currently it's in Rust. I
        might not change this time around. Git does most of the work, so
        I've developed a good understanding of it thanks to this project.`,
			`This project in particular taught me the strengths of test-driven
        development.`
		],
		urls: [
			'https://github.com/aidenlangley/nedots',
			'https://crates.io/crates/nedots'
		],
		key_words: ['Rust', 'CLI', 'Interfaces with C bindings to libgit2']
	},
	{
		title: 'Contributions!',
		description: [
			`Most notable contribution is to a launcher that Pop_OS!
        develops. I have been interested in their distribution for a long
        time, the tiling window manager for Gnome in particular, and so I
        found some places where I was able to contribute code to improve
        the product.`
		],
		urls: ['https://github.com/pop-os/launcher'],
		key_words: ['Pop_OS!', 'Rust', 'System76']
	},
	// {
	//   title: 'chrono-elapsed',
	//   description: [
	//     `Very early foray into Rust - this uses chrono, a
	//       date/time crate and lets you know how much time has elapsed since some
	//       date/time. Roughly. Very roughly.`
	//   ],
	//   urls: [
	//     'https://github.com/aidenlangley/chrono_elapsed',
	//     'https://crates.io/crates/chrono_elapsed'
	//   ],
	//   key_words: ['']
	// },
	{
		title: 'Whakaoranga Whanau',
		description: [
			`During a rough patch in my life I ended up in the care of
        the Whakaoranga Whanau and I possessed some skills that are in short supply
        in the north of Aotearoa, so I volunteered here to get them discovered on
        Google Maps with an online presence. The mahi also involved setting up
        their IT infrastructure in their office, taking care of their hardware
        and teaching the whanau.`
		],
		urls: [
			'https://github.com/aidenlangley/wowhub.co.nz',
			'https://wowhub.co.nz'
		],
		key_words: ['Svelte', 'Hand drawn art']
	},
	{
		title: 'Even further back!',
		description: [
			`The reason I got into programming was World of Warcraft.
        I'd tinker with the settings & user interface more than play the game
        at games, and so I became involved with a community of tinkerers. I
        would help out on the forums, moderating for a time.`
		],
		urls: ['https://github.com/Tukui-org/Tukui', 'https://www.tukui.org'],
		key_words: ['Gaming', 'User interface', 'Lua']
	}
]);

// Website info.
export const source_gh = readable('https://github.com/aidenlangley/nedia.dev');
export const svelte = readable('https://svelte.dev/');
export const svelte_kit = readable('https://kit.svelte.dev/');

// Resume
export const dob = readable(new Date(1993, 10));
export const education = readable([
	{
		institute: 'Woodbridge High School',
		grade: "11 GCSE's, 2 A Levels"
	},
	{
		institute: 'City & Guilds',
		grade: 'Diploma in IT & Systems Engineering'
	}
]);
export const experience = readable([
	{
		company: 'Bottomline Technologies',
		industry: 'Financial Technology',
		location: "St Paul's, London",
		duration: '2.5 years',
		titles: ['Technical Analyst'],
		technologies: ['Java', 'OracleDB', 'C#/.Net'],
		responsibilities: [
			`Design bespoke payment solutions for banks & other corporates.`,
			`Work with the client onsite or otherwise on implementing their
      solution.`,
			`Implementing & ensuring compliance with SWIFT & SEPA standards.`
		],
		notables: [
			"Tesco's",
			'Deutche Bank',
			'Lloyds TSB',
			'HSBC',
			'Barclays',
			'Scottish Widows',
			'HSBC',
			'J.P. Morgan'
		]
	},
	{
		company: 'ezyVet',
		industry: 'Veterinary',
		location: 'Auckland, New Zealand',
		duration: 'Closing on 3 years',
		titles: [
			'Full Stack Engineer',
			'Conversion Engineer',
			'Global 2nd Line Support'
		],
		responsibilities: [
			`Originally in a small team of developers during the start-up era of the
        company - bug fixes & features were the primary focus.`,
			`Later moved into a role in the conversions team responsible for reverse
        engineering competing products & extracting data from the customers
        database to transfer it to our own solution.`,
			`Spent a year of my time in London providing 2nd line support and working
        the hours that our Kiwi team preferred not to (very late nights supporting
        AU.)`
		],
		technologies: [
			'PHP',
			'C#/.Net',
			'Lots of Linux',
			'AWS, primarily EC2, DynamoDB & CloudWatch',
			`Extensive range of databases including MySQL, PostreSQL, Microsoft SQL
        Server and some lesser known such as Firebird & FileMaker`
		],
		notables: [
			'Miscellaneous veterinary clinics from Guame to California',
			'Competitors such as IDEXX: Cornerstone'
		]
	},
	{
		company: 'New Era Technologies',
		industry: 'Education',
		location: 'Northland, New Zealand',
		duration: '6 months',
		titles: ['Networking & Support Technician'],
		technologies: [
			'DHCP',
			'Networking',
			'Microsoft Servers',
			'Hardware Repairs'
		],
		responsibilities: [
			`A change of pace for me due to a move to a rural location and some health
        troubles.`,
			`I'd work closely with the teachers & students rectifying any problems they
        encountered with their devices.`,
			`Ensure the school is safe by keeping the network secure, and ensuring
        it provided adequate coverage of the sites we would work on.`,
			`Generally being an aide to the school & teachers. Often our teachers
        would something as simple as a camera set up on a tripod to record an
        event and we would oblige.`
		],
		notables: [
			'On-site support',
			'Some of the largest schools in the North',
			'Whanagarei Girls & Boys High',
			'Kerikeri High',
			'Okaihau College'
		]
	},
	{
		company: 'Whakaoranga Whanau Recovery Hub',
		industry: 'Alcohol & Other Drug Rehabilitation',
		location: 'Northland, New Zealand',
		duration: '1.5 years',
		titles: ['IT Director'],
		technologies: [
			'Networking',
			'DHCP',
			'Cloud Solutions',
			'Google Workspace',
			'Svelte',
			'Netlify & NetlifyCMS'
		],
		responsibilities: [
			`Learning and conversing in Te Reo Māori was a large part of the role.
        I'm of Māori heritage so it was less of a job and more of an experience,
        but I was able to set up a budding organisation up with some IT
        infrastructure.`,
			'Kapahaka',
			'Interpersonal skills'
		],
		notables: [
			`Voluntary role with little by way of financial compensation but a fulfilling job nonetheless`,
			`Managing all IT infrastructure for a small office`,
			`Lots of teaching`
		]
	}
]);
