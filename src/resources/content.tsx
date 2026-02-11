import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Saaketh",
  lastName: "Kesireddy",
  name: `Saaketh Kesireddy`,
  role: "CS Student @ UF",
  avatar: "/images/avatar.jpeg",
  email: "saakethr.kesireddy@gmail.com",
  location: "America/New_York" // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/saakethk",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/saaketh-kesireddy/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Research-Centered CS Student</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Saaketh, a student focused on both theoretical and applied aspects of computing.
</>
  ),
};

const about: About = {
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
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Engineering college student at the University of Florida pursuing a major in computer
        science and an intended minor in statistics. Completed an extensive number of courses, 
        which have built my background in Python, C++, and Java. Extensive experience in conducting research projects. 
        Seeking a internship, part-time job or research assistant role in the realm of computer science, software engineering, or data science.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "University of Florida | ENGRAFT Lab",
        timeframe: "Jan. 2026 - Present",
        role: "Undergraduate Research Intern",
        achievements: [
          <>
            Utilizing high performance computing clusters to finetune BERT model.
          </>,
          <>
            Developing classification model for bias in clinical notes with F1-score {">"} 0.75.
          </>,
          <>
            Building processing pipeline for 400,000+ entries of unstructured text data.
          </>
        ],
        images: [],
      },
      {
        company: "University of Florida | Virtual Learning Lab",
        timeframe: "Sep. 2025 - Present",
        role: "Undergraduate Research Developer",
        achievements: [
          <>
            Building model to assess alignment of word ladder with associated lesson.
          </>,
          <>
            Implemented tree-based search for word ladder creation.
          </>,
          <>
            Admitted into Emerging Scholars Program with paper expected Dec. 2026.
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
        name: "University of Florida",
        description: <><><b>Major:</b> Computer Science (Expected Graduation May 2029)</>
         <><br/></>
         <><b>Relevant Coursework:</b> Discrete Math (Fall 2025), Data Structures & Algorithms (Spring
2026), Computational Linear Algebra (Spring 2026)</></>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Research Interests",
    skills: [
      {
        title: "Explanatory AI",
        description: (
          <>Interested in integrated gradients, and multimodal attributions in realm of robotics.</>
        ),
        tags: [
          {
            name: "Artificial Intelligence",
            icon: "ai",
          },
          {
            name: "Integrated Gradients",
            icon: "ai",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Educational Platform Development",
        description: (
          <>Building and developing gamified platforms for engaged learning.</>
        ),
        tags: [
          {
            name: "Text Mining",
            icon: "ai",
          },
          {
            name: "Full Stack",
            icon: "ai",
          },
          {
            name: "Education",
            icon: "ai",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Electronic Health Record Analysis",
        description: (
          <>Building scalable pipelines for natural language processing analysis of Electronic Health Record data.</>
        ),
        tags: [
          {
            name: "Big Data",
            icon: "ai",
          },
          {
            name: "Machine Learning",
            icon: "ai",
          },
          {
            name: "Sequence Models",
            icon: "ai",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
  interests: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Data Structures",
        description: (
          <>Sufficient knowledge of data structures like trees, maps, ect.</>
        ),
        tags: [
          {
            name: "AVL Trees",
            icon: "ai",
          },
          {
            name: "Maps",
            icon: "ai",
          },
          {
            name: "Stack",
            icon: "ai",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Machine Learning",
        description: (
          <>Sufficient knowledge of building machien learning pipelines for various models.</>
        ),
        tags: [
          {
            name: "Decision Trees",
            icon: "ai",
          },
          {
            name: "SVMs",
            icon: "ai",
          },
          {
            name: "Random Forest",
            icon: "ai",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Data Analysis",
        description: (
          <>Sufficient knowledge of data analysis and visualization tools.</>
        ),
        tags: [
          {
            name: "Scikit-learn",
            icon: "ai",
          },
          {
            name: "Pandas",
            icon: "ai",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Software projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
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
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
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
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };