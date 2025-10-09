import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dechasa Teshome",
  initials: "DT",
  url: "https://Github.com/Dechie",
  location: "Addis Ababa, Ethiopia",
  locationLink: "",
  description:
    "I'm a Passionate Software Engineer. I craft beautiful mobile apps. I love programming.",
  summary:
    "I am Software Engineering graduate from AASTU. I love everything about software and computers. When I'm not busy building mobile apps and powerful backends, I play around with my Linux system and experiment with niche languages like Haskell and Rust. And I am highly enthusiastic about the latest developments in AI/ML.",
  avatarUrl: "/me.jpg",
  skills: [
    "Flutter",
    "Dart",
    "Laravel",
    "Firebase",
    "Java (Springboot)",
    "Python",
    "Jupyter",
    "Postgres",
    "Mariadb",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dechassa0@gmail.com",
    tel: "+251989543013",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Dechie",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/dechasa-teshome-013021277",
        icon: Icons.linkedin,
        navbar: true,
      },
      telegram: {
        name: "Telegram",
        url: "https://t.me/Twhd_O",
        icon: Icons.telegram,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "dechassa0@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Private Clients",
      href: "",
      badges: [],
      location: "Remote",
      title: "Flutter Developer(Contract)",
      logoUrl: "/dev.png",
      start: "September 2024",
      end: "August 2025",
      description: "Developing High quality mobile apps for private clients.",
    },
    {
      company: "Abay QR",
      href: "",
      badges: [],
      location: "Remote",
      title: "Flutter Developer",
      logoUrl: "/abayqr.jpg",
      start: "February 2025",
      end: "July 2025",
      description: "Developed Desktop Windows App using Flutter",
    },
    {
      company: "Kuraz Technologies",
      href: "https://www.kuraztech.com/",
      badges: [],
      location: "Hybrid",
      title: "Flutter intern",
      logoUrl: "/kuraztech.png",
      start: "July 2024",
      end: "September 2024",
      description:
        "Worked with Flutter MVVM architecture, developed a number of apps, integrated backend API to Flutter app.",
    },
    {
      company: "AfroEl Technologies",
      badges: [],
      href: "https://afroel.com/",
      location: "Remote",
      title: "Flutter & Laravel developer",
      logoUrl: "/afroel.jpg",
      start: "November 2023",
      end: "January 2024",
      description:
        "Designed and developed multi-tenant logistics system with Laravel backend and Flutter application",
    },
    {
      company: "Icog Labs",
      href: "https://icog-labs.com/",
      badges: [],
      location: "Hybrid",
      title: "Flutter and ML intern",
      logoUrl: "/icoglabs.png",
      start: "April 2023",
      end: "September 2023",
      description:
        "Worked on ML and deep learning, converted figma design to Flutter UI, and integrated REST API.",
    },
  ],
  education: [
    {
      school: "Addis Ababa Science and Technology University",
      href: "www.aastu.edu.et",
      degree: "Undergrad, Software Engineering",
      logoUrl: "/aastu.jpg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Password Manager",
      href: "",
      dates: "Aug 2024 - Dec 2024",
      active: true,
      description:
        "A highly secure application to store, view and edit your passwords, guarded by pin and secured by advanced encryption algorithms like AES. All crud operatios are guarded by a pin that can only be inserted via app's internal keyboard.",
      technologies: ["Flutter", "Dart", "Firebase"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Dechie/password-manager",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/passwordmanager.jpg",
      video: "/passwordmanager.mp4",
    },
    {
      title: "News App",
      href: "",
      dates: "August 2024 - October 2024",
      active: true,
      description:
        "Developed a UI implementation for a news aggregator application.",
      technologies: ["Flutter", "Dart", "Stacked Architecture"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Dechie/my-news-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/newsapp.png",
      video: "/newsapp.mp4",
    },
    {
      title: "Fit track",
      href: "",
      dates: "Apr 2025",
      active: true,
      description:
        "A simple and intuitive app that lets gym goers record and track their exercises sessions to the smallest detail.",
      technologies: ["Flutter", "Dart", "Firebase Auth", "Firestore"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Dechie/FitTrack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fittrack.jpg",
      video: "/fittrack.mp4",
    },
    {
      title: "Et-explore",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Collaborated with team members to design and develop a culture explorer app for all cultures and ceremnies in Ethiopia.",
      technologies: ["Flutter", "Provider", "stacked architecture", "Laravel"],
      links: [],
      image: "/exploreapp.png",
      video: "/exploreapp.mp4",
    },
    {
      title: "Spotify Clone",
      href: "",
      dates: "Dec 2023 - Jul 2024",
      active: false,
      description:
        "A spotify clone application made with Flutter and custom Laravel backend. Including additional feature for users to upload their own music.",
      technologies: ["Flutter", "Dart", "Laravel", "Mysql", "Provider"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Dechie/spotify-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/spotifyapp.png",
      video: "/spotifyapp.mp4",
    },
    {
      title: "Electronics Shop",
      href: "",
      dates: "Dec 2023 - Jul 2024",
      active: false,
      description:
        "A Mobile and Laptop buying platform with Laravel Backend and Flutter frontend",
      technologies: ["Flutter", "Dart", "Riverpod", "Laravel", "Mysql"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Dechie/spotify-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/electroshop.png",
      video: "/electroshop.mp4",
    },
    {
      title: "Health Guard",
      href: "https://healthguard.biruklemma.com",
      dates: "April 2024 - Present",
      active: true,
      description:
        "Collaborated with team mates to develop mental-health solution platform that connects university students with professionals",
      technologies: ["Laravel", "Blade template", "Mysql", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://healthguard.biruklemma.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Dechie/health-guard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/healthguard.png",
      video: "/healthguard.mp4",
    },
    {
      title: "Eisenhower Matrix Todo",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Designed and developed a productivity and task management tool.",
      technologies: ["Flutter", "Hive", "Riverpod"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Dechie/eisenhower-matrix-todo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/eisenhowerapp.png",
      video: "/eisenhowerapp.mp4",
    },
  ],
  clientProjects: [
    {
      title: "E learning Application",
      href: "",
      dates: "Dec 2024 - May 2025",
      client: "Excelet Academy",
      description:
        "Built a fully functional Flutter application that helps students from 1-12 grades as well as university, in finding course materials and previous year exams for national exams.",
      image: "/excelet.jpg",
      technologies: ["Flutter", "Laravel", "Riverpod"],
      links: [],
      video: "/excelet.mp4",
    },
    {
      title: "Data Visualization app",
      href: "",
      dates: "Sep 2024 - Dec 2024",
      client: "Ethiopian Customs Commission",
      description: "Built a data visualization application",
      technologies: ["Flutter", "Laravel", "Riverpod"],
      links: [],
      image: "/eccdatavis.jpg",
    },
    {
      title: "Event Management App",
      href: "",
      dates: "Jul 2025 - Aug 2025",
      client: "",
      description:
        "Built Application for managing workforce trainings, attendance management and user entry to halls via qr codes",
      technologies: ["Flutter", "BloC"],
      links: [],
      image: "/event-manage.jpg",
    },
  ],
  hackathons: [],
} as const;
