const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Riten Bhagra | Portfolio",
  description:
    "Master's student at USC with a passion for data science and web development, leveraging advanced analytics and full-stack skills to drive insights and innovation.",
  og: {
    title: "Riten Portfolio",
    type: "website",
    url: "https://ritenbhagra.netlify.app/education",
  },
};

//Home Page
const greeting = {
  title: "Hi 👋!",
  sub: " Seeking for Full time Opportunities",
  logo_name: "Riten Bhagra",
  resumeLink:
    "https://drive.google.com/file/d/1SuZF_AJQpcN7S3jL_9NEazbHLYdNTjQF/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/thebarcelonaguy",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/ritenbhagra2000",
    },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/rohan0301",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@rohankokkula",
    // },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/riten-bhagra/",
    },
    // {
    //   siteName: "HashNode",
    //   iconifyClassname: "simple-icons:hashnode",
    //   style: {
    //     color: "#2962ff",
    //   },
    //   profileLink: "",
    // },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Specialize in building and optimizing machine learning models for large-scale data analysis, employing advanced programming skills in Python, Java, and C/C++, and leveraging frameworks like TensorFlow.",
        "⚡ Harness the capabilities of large language models (LLMs) to construct sophisticated AI applications, utilizing the Langchain framework to integrate conversational AI and advanced text processing into user-centric solutions.",
        "⚡ Having good hands-on with Data Cleaning, processing & Analysing using Pandas, Tableau & PowerBI",
        "⚡ Apply expertise in computer vision and natural language processing to extract meaningful insights from complex datasets, leveraging tools like OpenCV and transformer models like those from OpenAI.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, BootStrap5, ReactJS & NodeJS",
        "⚡ Creating application backend in Node, Flask & Streamlit",
        "⚡ Having experience in Domain & Hosting using Netlify, Vercel, Heroku & Hostinger",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interfaces for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //     "⚡ Applying latest Design principles and experienced in product wireframing",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Photoshop",
    //       fontAwesomeClassname: "simple-icons:adobephotoshop",
    //       style: {
    //         color: "#2fa3f7",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Hadoop MapReduce",
      img_path: "hadoop1.webp",
      description:
        "Developed innovative Python solution for high-performance Hadoop MapReduce emulation, boosting data processing and increasing efficiency.",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "Flask",
          color: "#820032",
        },
      ],
      // link: "https://teath.herokuapp.com ",
      code: "https://github.com/thebarcelonaguy/DSCI-551-Project",
      linkcolor: "white",
    },

    {
      title: "Sentiment Analysis on Movie Reviews",
      img_path: "sentiment.png",
      description:
        "Created a deep learning model to perform sentiment analysis on movie reviews using BERT, getting an accuracy of 94% on IMDB dataset. Focused on fairness and bias in AI to provide equitable predictions.",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "BERT",
          color: "#c47206",
        },
        {
          lang: "Scikit-learn",
          color: "#4257f5",
        },
      ],
      link: "",
      code:
        "https://github.com/thebarcelonaguy/MovieReviewSentimentAnalysis/tree/main/BERT_on_Movie_Reviews-main",
      linkcolor: "white",
    },
    {
      title: "Twitter Data Analytics",
      img_path: "twitter.png",
      description:
        "Engineered a real-time ETL pipeline, streaming tweets to MySQL, analyzing sentiments with TextBlob, and summarizing via word cloud visualization.",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "MySQL",
          color: "#8700b0",
        },
        {
          lang: "tweepy",
          color: "#c47206",
        },
        {
          lang: "NLTK",
          color: "#ff4b4b",
        },
        {
          lang: "Wordcloud",
          color: "#3c0095",
        },
      ],
      // link: "https://neuralviz.herokuapp.com/",
      code: "https://github.com/thebarcelonaguy/TwitterETL",
      linkcolor: "white",
    },
    {
      title: "Landmark Classification with CNN",
      img_path: "transfer.png",
      description:
        "Leveraged CNNs and transfer learning to classify landmark images, achieving 97% f1 score for categories and 87% for individual landmarks.",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "Flask",
          color: "#820032",
        },
        {
          lang: "Tensorflow",
          color: "#c47206",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Stock Portfolio Management",
      img_path: "stock.webp",
      description:
        "Developed a stock portfolio management system with time series analysis using LSTM, enabling command-line trading signal predictions and performance tracking through MySQL integration and CSV reporting.",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "Pandas",
          color: "#051c61",
        },
        {
          lang: "Scikit-learn",
          color: "#4257f5",
        },
        {
          lang: "Tensorflow",
          color: "#c47206",
        },
        {
          lang: "SQL",
          color: "#8700b0",
        },
      ],
      link: "",
      code: "https://github.com/thebarcelonaguy/StockMarketForcasting",
      linkcolor: "white",
    },

    {
      title: "PDFChatbot",
      img_path: "pdf.webp",
      description:
        "A Python GUI application that demonstrates how to build a custom PDF chatbot using LangChain and GPT 3.5 / Llama 2.t",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "Langchain",
          color: "green",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "OpenAI",
          color: "#051c61",
        },
      ],
      link: "https://newsearcher.herokuapp.com/",
      code: "https://github.com/rohankokkula/Newsearcher",
      linkcolor: "white",
    },
    // {
    //   title: "ActiWeight",
    //   img_path: "acti.gif",
    //   description:
    //     "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
    //   code: "https://github.com/rohankokkula/Actiweight",
    //   linkcolor: "white",
    // },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Web Developer",
        subtitle: "Graduates Rising in Information and Data Science",
        date: "August 2023 - Feb 2024",
        content: [
          "Spearheaded development of 3 dynamic, user-centric web applications with Next.js, ensuring server-side rendering improves page loading speeds by up to 15% and yields a 10% boost in SEO rankings.",
          "Utilized Angular's two-way data binding to create real-time, interactive, and data-driven web applications, elevating user experience.",
          "Ensured secure, reliable, and smooth data transfer between frontend and backend systems through effective API integrations using JavaScript and Next.js and reducing data fetch times by 20%.",
        ],
      },
      {
        title: "Data Analyst",
        subtitle: "Syvylyze Analytics",
        date: "May 2021 - November 2021",
        content: [
          "Improved operational efficiency by optimizing Google Maps API to decrease geolocation lookup time by 30%, resulting in a faster data retrieval process.",
          "Devised user-friendly apps for accessing Google Drive APIs, resulting in a 40% increase in GSheet data retrieval speed.",
          "Conducted and presented detailed quantitative analyses to business stakeholders, aiding data-driven decision- making by utilizing tools such as Tableau for visualization.",
          "Achieved 98% accuracy in log analysis by configuring Elastic Search, Logstash, Kibana Stack to identify and resolve system issues promptly.",
        ],
      },
      {
        title: "Technical Intern",
        subtitle: "Madhya Pradesh Police",
        date: "May 2020 - June 2020",
        content: [
          "Designed an efficient SOS prototype application, cutting down response time by 40% for emergency situations",
          "Collaborated with law enforcement officers to establish reward criteria and regulations, ensuring compliance with legal framework of the Indian Penal Code, resulting in 95% compliance rate among users.",
          "Designed and implemented automated reports for analytics, ensuring stakeholders received timely and accurate insights for strategic decision- making.",
        ],
      },
      // {
      //   title: "Summer Analytics Participant",
      //   subtitle: "IIT Guwahati",
      //   date: "April 2020 - June 2020",
      //   content: [
      //     "Learnt & applied various Machine Learning libraries",
      //     "Had hands-on with Data Visualization techniques using matplotlib, plotly, streamlit",
      //     "Understood and applied Neural networks using Tensorflow and finally competed in Kaggle Hackathon ranking 135 (top 16 percentile) among 854 Kaggle participants",
      //     "Ranked 85 out of 1500+ students for overall performance.",
      //   ],
      // },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Master of Science in Applied Data Science",
          subtitle:
            "University of Southern California, Los Angeles, California",
          date: "Jan 2023–Dec 2024",
          content: [
            "GPA: 3.80/4.0",
            "Relevant Coursework: Foundations of Data Management, Machine Learning, Optimisation techniques for Data Science, Data Science Professional Practicum, Data Mining.",
          ],
        },
        {
          title: "Computer Science and Engineering",
          subtitle: "Vellore Institute of Technology",
          date: "2018 - 2022",
          content: ["GPA: 3.8/4"],
        },
      ],
    },
    {
      title: ["Ranks and Achivements"],
      data: [
        {
          title: "Ranks",
          content: [
            "Achieved 2nd rank in the Bachelor of Technology program , demonstrating a strong grasp of computer science principles, dedication to academic excellence, and a consistent track record of outstanding performance in a competitive academic environment. ",
            "#113/5064 in CV-NLP Hackathon by HackerEarth",
          ],
        },
        {
          title: "Achievements",
          content: [
            "Marketing Team Head at AdVitya-VIT",
            "5⭐ Gold Badges for Python & Problem Solving at HackerRank ",
          ],
        },
      ],
    },

    //   title: ["Freelance Work"],
    //   data: [
    //     {
    //       title: "Consultancy Website",
    //       subtitle: "kidsworldeducationconsultants.com",
    //       content: [
    //         "Created and hosted a website for consultancy providers in Kids Education Domain",
    //       ],
    //     },
    //     {
    //       title: "Portfolio Website",
    //       subtitle: "pranavphulware.netlify.app",
    //       content: [
    //         "Built a personal Filmography portfolio for a friend and later hosted it at Netlify",
    //       ],
    //     },
    //   ],
    // },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Tableau Analyst",
      subtitle: "Tableau",
      logo_path: "tabana-01.png",
      certificate_link:
        "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Tableau Consumer",
      subtitle: "Tableau",
      logo_path: "tabcon-01.png",
      certificate_link: "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Problem solving",
      subtitle: "HackerRank",
      logo_path: "problem-01.png",
      certificate_link: "https://www.hackerrank.com",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Python",
      subtitle: "HackerRank",
      logo_path: "python-01.png",
      certificate_link: "https://www.hackerrank.com",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    // {
    //   title: "Certificate of Merit",
    //   subtitle: "Summer Analytics | IIT Guwahati",
    //   logo_path: "iitg-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "IITG",
    //   color_code: "#000000",
    // },
    {
      title: "Tableau Desktop Qualified Associate",
      subtitle: "SimpliLearn",
      logo_path: "simplilearn-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTMA",
      alt_name: "Simplilearn",
      color_code: "#000000",
    },
    {
      title: "Question Generation using Transformers",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b17c4c21-91e3-4f8b-b9c2-2594689109856/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Machine Learning",
      subtitle: "Stanford University",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTMA",
      alt_name: "Stanford University",
      color_code: "#000000",
    },
    {
      title: "Data Visualization",
      subtitle: "University of Michigan",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTMA",
      alt_name: "University of Michigan",
      color_code: "#000000",
    },
    // {
    //   title: "Data Scientist Career Track",
    //   subtitle: "DataCamp",
    //   logo_path: "datacamp-01.png",
    //   certificate_link:
    //     "https://www.datacamp.com/statement-of-accomplishment/track/29f2ddab3fbfd0a470713a19c729c0f9d89c88aa",
    //   alt_name: "DataCamp",
    //   color_code: "#000000",
    // },
    // {
    //   title: "PowerBI Masters",
    //   subtitle: "iNeuron.ai",
    //   logo_path: "ineuron-01.png",
    //   certificate_link:
    //     "https://academy.ineuron.ai/certificates/downloads/PB009929.pdf",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Tableau Masters",
    //   subtitle: "iNeuron.ai",
    //   logo_path: "ineuron-01.png",
    //   certificate_link:
    //     "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours :)",
  },
  addressSection: {
    title: "Address",
    subtitle: "Los Angeles, CA-90007",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 840200****",
  },
};

// Example of updating contactInfo in portfolio.js

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/thebarcelonaguy",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/riten-bhagra/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/c/rohanalytics",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:bhagra@usc.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/barcelonaguy22",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "lightblue", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
