// 

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
    image: "/assets/projects/Query.png",
    tags: [
      { id: 1, name: "Node.js", path: "/assets/logos/Node.js.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Express", path: "/assets/logos/Express.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
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
    image: "/assets/projects/splitter.png",
    tags: [
      { id: 1, name: "Node.js", path: "/assets/logos/Node.js.svg" },
      { id: 2, name: "EJS", path: "/assets/logos/ejs.svg" },
      { id: 3, name: "Express", path: "/assets/logos/Express.svg" },
      { id: 4, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
    ],
  },
  {
    id: 3,
    title: "Audio Classification Platform",
    description:
      "A machine learning pipeline for classifying environmental sounds, built using TensorFlow/Keras and deployed as an interactive web interface with Streamlit.",
    subDescription: [
      "Classifies various environmental sounds from the UrbanSound8K dataset using an optimized deep learning MLP architecture.",
      "Utilizes MFCC (Mel-Frequency Cepstral Coefficients) for robust audio feature extraction and processing pipeline.",
      "Trained using TensorFlow/Keras and deployed cleanly with Streamlit for real-time user file inference.",
    ],
    href: "https://github.com/Gyan-Aditya/Audio_classification",
    image: "/assets/projects/audio.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/Python.svg" },
      { id: 2, name: "TensorFlow", path: "/assets/logos/TensorFlow.svg" },
      { id: 3, name: "Streamlit", path: "/assets/logos/Streamlit.svg" },
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
];

export const educations = [
  {
    institute: "Kalinga Institute of Industrial Technology (KIIT)",
    degree: "Bachelor of Technology",
    date: "2022 - 2026",
    contents: [
      "Location: Bhubaneswar, Odisha, India",
      "Field of Study: Computer Science and Engineering",
      "Academic Performance: 8.51 / 10 CGPA",
    ],
  },
  {
    institute: "Litera Valley School",
    degree: "Class XI & XII (CBSE)",
    date: "2020 - 2022",
    contents: [
      "Location: Patna, Bihar, India",
      "Major: Physics, Chemistry, Mathematics, Computer Science",
      "Aggregate: 82%",
    ],
  },
];

export const reviews = [
  {
    name: "Aishwarya Nidhi",
    company: "D1g1t",
    body: "Exceptional engineering mindset. Gyan turns intricate ideas into modular, production-ready full-stack layouts cleanly.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Gautam Priyadarshi",
    company: "Optum",
    body: "Detail-oriented dev with a fantastic grip on logic architectures, data pipelines, and foundational problem-solving.",
    img: "https://robohash.org/john",
  },
];