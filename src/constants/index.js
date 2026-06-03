export const myProjects = [
  {
    id: 1,
    title: "SQL Query Generator",
    description:
      "A web-based application designed to convert natural language inputs (plain English) into precise SQL queries, simplifying complex database interactions for users.",
    subDescription: [
      "Generates corresponding SQL statements from plain English input using Natural Language Processing capabilities.",
      "Provides a User-Friendly Interface and features Real-Time Query Generation upon input submission.",
      "Built with a modern stack: React and Tailwind CSS for the client, and Node.js/Express for the server.",
      "Integrates the OpenAI GPT-4o model for AI-powered query translation.",
    ],
    href: "https://github.com/Gyan-Aditya/SQL-Query-Generator",
    logo: "",
    image: "/assets/projects/Query.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/logos/Node.js.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/logos/Express.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Splitter",
    description:
      "A modern bill-splitting app that helps groups divide shared expenses fairly, track contributions, and stay organized with an intuitive, collaborative experience.",
    subDescription: [
      "Secure Google OAuth 2.0 authentication powered by Passport.js for easy sign-in and personalized expense tracking.",
      "Create and manage group bills with automatic per-person calculations, tip support, and customizable expense shares.",
      "Built with an EJS-powered frontend and a Node.js/Express backend for fast, reliable interactions.",
      "Integrated Razorpay payment gateway for seamless, secure bill payments directly within the app.",
    ],
    href: "https://splitter-weog.onrender.com/login",
    logo: "",
    image: "/assets/projects/splitter.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/logos/Node.js.svg",
      },
      {
        id: 2,
        name: "EJS",
        path: "/assets/logos/ejs.svg",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/logos/Express.svg",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Audio Classification",
    description:
      "A machine learning model for classifying environmental sounds, built using TensorFlow/Keras and deployed as a user-friendly web interface with Streamlit.",
    subDescription: [
      "The model classifies various sounds (e.g., Dog Bark, Siren, Gunshot) from the UrbanSound8K dataset.",
      "Utilizes MFCC (Mel-Frequency Cepstral Coefficients) for robust audio feature extraction and processing.",
      "Trained using a deep learning model (ANN/MLP) implemented in TensorFlow/Keras.",
      "Deployed using the Streamlit framework for an interactive, web-based user experience (run via `streamlit run app.py`).",
    ],
    href: "https://github.com/Gyan-Aditya/Audio_classification",
    logo: "",
    image: "/assets/projects/audio.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/Python.svg",
      },
      {
        id: 2,
        name: "TensorFlow",
        path: "/assets/logos/TensorFlow.svg",
      },
      {
        id: 3,
        name: "Streamlit",
        path: "/assets/logos/Streamlit.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Modern, Secure, and Feature-Rich Blogging Platform",
    description:
      "A full-stack blogging application that allows users to create, read, update, and delete their own posts, featuring robust authentication and protected routes.",
    subDescription: [
      "Built on a full-stack architecture using Node.js/Express.js with EJS (Embedded JavaScript Templating) for server-side rendered views.",
      "Uses MongoDB as the database, interfaced with Mongoose for data persistence.",
      "Implemented secure authentication and authorization using JSON Web Tokens (JWT) and Salt for password hashing.",
      "Provides complete CRUD (Create, Read, Update, Delete) functionality for blog posts.",
    ],
    href: "https://github.com/Gyan-Aditya/Blog",
    logo: "",
    image: "/assets/projects/Blog.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/logos/Node.js.svg",
      },
      {
        id: 2,
        name: "MongoDB",
        path: "/assets/logos/MongoDB.svg",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/logos/Express.svg",
      },
      {
        id: 4,
        name: "EJS",
        path: "/assets/logos/ejs.svg",
      },
    ],
  },
  {
    id: 5,
    title: "URL Shortener Application",
    description:
      "A full-stack web service designed to convert long, complex Uniform Resource Locators (URLs) into short, manageable links, and manage the corresponding redirects.",
    subDescription: [
      "The entire application is built on a Node.js backend using the Express.js framework.",
      "Data persistence is managed using a MongoDB database (indicated by `connection.js` and standard architecture).",
      "The user interface is rendered using EJS (Embedded JavaScript Templating), making it a server-side rendered application.",
      "Core functionality includes generating a unique short ID for any input URL and immediately redirecting users from the short link back to the original long URL.",
    ],
    href: "https://github.com/Gyan-Aditya/URL-Shortener/",
    logo: "",
    image: "/assets/projects/url.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/logos/Node.js.svg",
      },
      {
        id: 2,
        name: "MongoDB",
        path: "/assets/logos/MongoDB.svg",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/logos/Express.svg",
      },
      {
        id: 4,
        name: "EJS",
        path: "/assets/logos/ejs.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/Gyan-Aditya/",
    icon: "/assets/socials/github-white-icon.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/gyan-aditya-58b46a2a8/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/gyan__aditya/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const educations = [
  {
    institute: "Kalinga Institute of Industrial Technology (KIIT)",
    degree: "Bachelor of Technology",
    date: "2022-2026",
    contents: [
      "Location-: Bhubaneswar, Odisha, India",
      "Field of study-: Computer Science and Engineering",
      "CGPA-: 8.51/10",
    ],
  },
  {
    institute: "Litera Valley",
    degree: "Class 11th and 12th",
    date: "2020-2022",
    contents: [
      "Board-: Central Board of Secondary Education (CBSE)",
      "Location-: Patna, Bihar, India",
      "Major subjects-: Physics, Chemistry, Mathematics, Computer Science",
      "12th Percentage-: 82%",
    ],
  },
  {
    institute: "Open Minds A Birla School",
    degree: "Class 10th",
    date: "2019-2020",
    contents: [
      "Board-: Central Board of Secondary Education (CBSE)",
      "Location-: Patna, Bihar, India",
      "Percentage-: 90.83%",
    ],
  },
];
export const reviews = [
  {
    name: "Aishwarya Nidhi",
    company: "D1g1t",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Dipen Solanki",
    company: "Solace",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "Gautam Priyadarshi Attry",
    company: "Optum",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Dev Krishn",
    company: "Capgemini",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Priyanshu Kumar",
    company: "GS labs",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Aryan Raj",
    company: "Zomato",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Ritu Raj",
    company: "Delloite",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Prince Kumar",
    company: "Softhub Technologies",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];