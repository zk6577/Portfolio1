export const fallbackProjects = [
  {
    _id: "talksy",
    title: "Talksy",
    subtitle: "Real-time MERN Chat Application",
    description:
      "Talksy is a full-stack chat application built with the MERN stack. It includes secure user authentication, protected routes, a clean responsive UI, and a smooth messaging experience. The backend is built with Node.js and Express.js, while MongoDB stores user and chat data.",
    image: "https://res.cloudinary.com/dk4k50ikk/image/upload/v1782477751/Screenshot_2026-06-26_180703_pbhhg1.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Render"],
    githubUrl: "https://github.com/zk6577/ChatApp",
    liveUrl: "https://chatapp-eseb.onrender.com/login",
    featured: true
  },
  {
    _id: "deepseek-ai",
    title: "DeepSeek AI Clone",
    subtitle: "AI-powered MERN Chatbot Platform",
    description:
      "DeepSeek AI Clone is a full-stack MERN AI chatbot application where users can sign up, log in securely, and interact with an AI assistant through a modern responsive interface. It uses JWT authentication, MongoDB for user data, and AI API integration for generating chatbot responses.",
    image: "https://res.cloudinary.com/dk4k50ikk/image/upload/v1782481666/Screenshot_2026-06-26_191647_kpojbs.png",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "AI API",
      "Render"
    ],
    githubUrl: "https://github.com/zk6577/deepseeAi",
    liveUrl: "https://deepseekai-xcii.onrender.com/",
    featured: true
  },
  {
  _id: "audio-q-a",
  title: "AudioQ-A",
  subtitle: "Voice-Based AI Q&A Assistant for Students",
  description:
    "AudioQ-A is a Python-based voice Q&A assistant designed for students. It allows users to ask questions using voice or text and provides intelligent responses using a trained TensorFlow/Keras chatbot model. The project uses speech recognition for voice input, text-to-speech for audio output, and a Streamlit interface for an interactive chatbot experience.",
  image: "PASTE_AUDIO_QA_IMAGE_URL_HERE",
  technologies: [
    "Python",
    "Streamlit",
    "TensorFlow",
    "Keras",
    "NumPy",
    "Scikit-learn",
    "SpeechRecognition",
    "pyttsx3"
  ],
  githubUrl: "https://github.com/zk6577/AudioQ-A",
  liveUrl: "PASTE_LIVE_URL_HERE",
  featured: true
}
];

export const fallbackSkills = [
  { _id: "skill-1", name: "React.js", level: 95, category: "Frontend" },
  { _id: "skill-2", name: "JavaScript", level: 92, category: "Frontend" },
  { _id: "skill-3", name: "Node.js", level: 88, category: "Backend" },
  { _id: "skill-4", name: "MongoDB", level: 84, category: "Database" },
  { _id: "skill-5", name: "UI / UX Design", level: 90, category: "Design" }
];

export const services = [
  {
    title: "Web Development",
    description: "Fast, responsive and modern websites using React and premium UI design.",
    icon: "code"
  },
  {
    title: "Backend APIs",
    description: "REST APIs with Express, MongoDB, JWT auth and clean controller structure.",
    icon: "database"
  },
  {
    title: "MERN Applications",
    description: "Complete frontend + backend projects with admin dashboard and database.",
    icon: "layers"
  },

];

export const testimonials = [
  {
    name: "Aman Sharma",
    role: "Startup Founder",
    message: "The website looked modern, premium and very professional. Great result.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "Product Manager",
    message: "Very clean design, smooth animations and strong communication throughout the project.",
    rating: 5
  },
  {
    name: "Michael Brown",
    role: "Business Owner",
    message: "The final website improved our brand image and worked perfectly on mobile.",
    rating: 5
  }
];
