import { readable } from 'svelte/store';

// Navigation
export const pages = [
  {
    page: 'home',
    url: '/',
    active: true,
  },
  {
    page: 'résumé',
    url: '/resume',
    active: true
  },
  {
    page: 'blog',
    url: '/blog',
    active: false
  }
]

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
  'technology'
])

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
        I've developed a good understanding of it thanks to this project.`
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
export const skills = readable([
  {
    name: '', score: 3
  }
])
