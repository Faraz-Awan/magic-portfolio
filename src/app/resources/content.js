import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Faraz",
  lastName: "Awan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Princeton MAE Grad",
  avatar: "/images/projects/project-01/profile-pic.png",
  email: "hello@faraz-awan.com",
  location: "America/Atlanta  ", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu/Hindi", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/faraz-awan1/",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Bridging hardware and software through robotics, simulation, and system design</>,
  featured: {
    display: false,
    title: <><strong className="ml-4">Check out my   Project Portfolio</strong></>,
    href: "/work",
  },
  subline: (
    <>
      I'm Faraz, a mechanical and aerospace engineer focused on building real-world 
      systems—from robotic arms to orbital simulations. I use CAD, FEA, and STK to 
      design and test how things move and interact.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Princeton University graduate with a Bachelor of Science in 
        Engineering for Mechanical and Aerospace Engineering and a certifcate 
        for Robotics and Intelligent Systems. I'm passionate about aerospace 
        and additive manufacturing. I've previously worked at the intersection 
        of these areas as a Spacecraft Design Engineering Intern.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Millennium Space Systems" ,
        timeframe: "June 2023 - August 2023",
        role: "Spacecraft Engineering Design Intern",
        achievements: [
          <>
            Redesigned spacecraft components, tooling in SolidWorks to reduce mass 
            by over 15% and simplify manufacturability
          </>,
          <>
            Adapted existing test fixtures by modeling and 3D printing components 
            for three-point bend test stress analysis to determine mechanical properties 
            of propellant tubes 2 weeks ahead of schedule while saving company resources
          </>,
          <>
            Validated execution and data collection of 3 vibration shock tests and 2 thermal 
            vacuum chamber tests
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "",
            alt: "Once UI Project",
            width: 0,   //make this non-zero when you add images
            height: 0,   //make this non-zero when you add images
          },
        ],
      },
      {
        company: "Umbra Space",
        timeframe: "May 2022 - August 2022",
        role: "Modeling and Simulation Intern",
        achievements: [
          <>
            Built and documented 4 satellite models and scenarios in STK for 
            use in simulations with global and local target decks to fulfill 
            customer needs by providing product capability estimates 3 days 
            ahead of schedule
          </>,
          <>
            Authored Excel spreadsheet outlining over 30 technical and business 
            performance metrics for 12 industry competitors
          </>,
        ],
        images: [],
      },
      {
        company: "Princeton University Makerspace",
        timeframe: "March 2022 – May 2024",
        role: "Senior Makerspace Assistant",
        achievements: [
          <>
            Trained patrons how to use equipment: 3D printers, 
            CNC mills, soldering irons, cutting plotters, and large printer
          </>,
          <>
            Developed 3D CAD models in CREO and printed on 3D printers to serve as 
            representative examples and decor
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Princeton University",
        description: <>B.S.E. Mechanical and Aerospace Engineering</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
