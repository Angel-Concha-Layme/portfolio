import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import fakestoreApi from "public/projects/fakestore-api.webp";
import teamcode from "public/projects/teamcode-runner.webp";
import haddopSearch from "public/projects/hadoop-search.webp";
import noteBoard from "public/projects/noteboard.webp";
import clinicalMind from "public/projects/clinicalmind.webp";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [projectSection, onSectionChange]);

  return (
    <div
    ref={sectionRef}
    className="project-panel bg-white dark:bg-[#1B2731] relative"
  >
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/Angel-Concha-Layme"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
    </div>
  );
  
};

const projects = [
  {
    title: "Fake Store API - Enhanced Version",
    type: "Backend",
    image: (
      <Image
        src={fakestoreApi}
        sizes="100vw"
        fill
        alt="Fake Store API"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Fake Store API is an advanced evolution of the 'Platzi Fake Store API, expanding and improving upon its original functionalities. This service offers CRUD operations, JWT authentication, and advanced features like filtering and pagination, all developed using Spring Boot, MySQL, Spring Security, and Spring Data JPA. Unlike the original project, this version features an extended database and a more sophisticated order processing system with enhanced authentication and authorization. The frontend, like in the Platzi version, is built with Starlight Astro, ensuring a modern and efficient user interface. The entire system is deployed on Google Cloud, ensuring greater scalability and performance.",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "MySQL",
      "Google Cloud Platform",
      "Postman",
      "Swagger",
    ],
    liveUrl: "https://fake-store-api-docs.vercel.app/",
    codeUrl: "https://github.com/Angel-Concha-Layme/Fake-Store-API",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Team Code Runner",
    type: "Backend & Frontend",
    image: (
      <Image
        src={teamcode}
        sizes="100vw"
        fill
        alt="Team Code Runner"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Web platform for code execution in multiple languages (Java, Python, JavaScript), utilizing a microservices architecture. Each language-specific service is built using Express for JavaScript, Flask for Python, and Spring Boot for Java, orchestrated by a primary Spring Boot service. The frontend is developed with Vue.js and incorporates Ace Editor for syntax highlighting and autocompletion. The entire application is deployed on Google Cloud Platform.",
    tags: [
      "Java",
      "Python",
      "JavaScript",
      "Spring Boot",
      "Flask",
      "Express",
      "Vue.js",
      "Ace Editor",
      "Microservices",
      "Google Cloud Platform",
    ],
    liveUrl: "https://angel-concha-layme.github.io/FrontSampleTeamCode/",
    codeUrl: "https://github.com/Angel-Concha-Layme/FrontSampleTeamCode",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Hadoop Search Engine",
    type: "Backend",
    image: (
      <Image
        src={haddopSearch}
        sizes="100vw"
        fill
        alt="Hadoop Search Engine"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Hadoop Search Engine is a project that develops a search engine based on Hadoop, focused on efficient indexing and searching within large data sets. Using a 10 GB dataset of public domain books from the Gutenberg Project, an inverted index is constructed with Hadoop, which is then stored in a relational database. The interface, implemented with Java Swing, facilitates the search for specific words, displaying the results according to their relevance, determined by an adapted PageRank algorithm that leverages a word co-occurrence matrix among the books. This approach demonstrates the practical application of distributed techniques for the effective management of large volumes of information.",

    tags: ["Java", "Hadoop", "MapReduce", "PageRank", "MySQL", "Java Swing"],
    liveUrl: "https://github.com/Angel-Concha-Layme/hadoop-search-engine",
    codeUrl: "https://github.com/Angel-Concha-Layme/hadoop-search-engine",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "NoteBoard",
    type: "Full Stack",
    image: (
      <Image
        src={noteBoard}
        sizes="100vw"
        fill
        alt="NoteBoard Challenge"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "The NoteBoard Challenge is a versatile and user-friendly application for managing notes. The first phase allows users to create, edit, delete, archive, and unarchive notes, as well as list active and archived notes. The second phase introduces the ability to add or remove categories from notes and filter them by category. The backend is developed using Spring Boot, Spring Data JPA, Flyway, Lombok, and MySQL, and is deployed on Google Cloud Platform. The frontend, crafted with Vue.js, Vite, and Node.js, offers a smooth and responsive user experience, deployed using Vercel.",
    tags: [
      "Spring Boot",
      "Spring Data JPA",
      "Flyway",
      "Lombok",
      "MySQL",
      "Java",
      "Vue.js",
      "Vite",
      "Node.js",
      "Google Cloud Platform",
      "Vercel",
    ],
    liveUrl: "https://noteboard-frontend.vercel.app/",
    codeUrl: "https://github.com/Angel-Concha-Layme/Noteboard",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "ClinicalMind App Design",
    type: "Ux Design",
    image: (
      <Image
        src={clinicalMind}
        sizes="100vw"
        fill
        alt="NoteBoard Challenge"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "The ClinicalMind app is a mobile tool that allows patients to easily and quickly schedule medical appointments, access their medical prescriptions, and stay informed about their treatment. The app focuses on providing an intuitive and enjoyable user experience, with a clear and user-friendly interface. With ClinicalMind, patients can manage their healthcare comfortably and securely anytime, anywhere.",
    tags: [
      "Figma",
      "User Experience",
      "User Interface",
      "Mobile App",
      "Design",
      "Prototyping",
      "Wireframing",
      "Usability Testing",
      "User Research",
    ],
    liveUrl: "https://www.figma.com/proto/nuKOP7cObNRW0eXFQdqxeH/Hi-Fi-ClinicalMind?page-id=0%3A1&node-id=1-57&viewport=942%2C376%2C0.1&scaling=min-zoom&starting-point-node-id=1%3A57",
    codeUrl: "https://docs.google.com/presentation/d/176isY8T-hZZwMgFsUq7gpxw5i0-u3cSQbSIk7rl4cWY/edit?usp=sharing",
    bgColor: "bg-[#B4BEE0]",
  },
];

export default ProjectSection;
