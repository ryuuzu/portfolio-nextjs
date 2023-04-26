import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { GitHub, Twitter, LinkedIn } from "iconoir-react";
import WorkExperience from "@/components/WorkExperience";

const workExperiences = [
  {
    company: {
      name: "Crocus Pearl Technologies",
      location: "Khusibun, Kathmandu, Nepal",
      website: "https://crocuspearl.com/",
    },
    position: "Back-end Intern",
    description:
      "A start-up company providing various design, development and digital marketing services.",
    duration: {
      start: "2023/02/01",
      // end: "2023-05-01",
    },
    skills: ["JavaScript", "PHP", "Laravel", "Python", "Django"],
  },
  {
    company: {
      name: "Islington College",
      location: "Kamalpokhari, Kathmandu, Nepal",
      website: "https://islington.edu.np/",
    },
    position: "Teaching Assistant",
    duration: {
      start: "2022/11/01",
      end: "2023/02/01",
    },
    description:
      "Teaching assistant for the course of Programming module which included Java.",
    tasks: [
      "Assisted Academics Department of the College",
      "Helped students with their assignments and projects",
      "Team Lead for an internal project for the College.",
    ],
    skills: ["JavaScript", "Tailwind CSS", "Python", "Django"],
  },
];

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen w-full flex-col items-center sm:flex-row ${dmSans.className}`}
    >
      <div className="w-full flex-grow bg-inherit px-5 py-3 text-primary dark:text-white sm:min-h-screen sm:w-3/4 sm:py-10 md:w-3/5">
        <div className="title-bar flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-0">
          <div className="header-text flex flex-row items-center gap-2 sm:flex-col sm:items-start sm:gap-1">
            <div className="name text-sm font-bold xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Utsav Gurmachhan Magar
            </div>
            <div className="separator block sm:hidden">|</div>
            <div className="position text-sm font-medium text-secondary xs:text-lg">
              Back-end Developer
            </div>
          </div>
          <div className="profile-links md: flex flex-row items-center gap-5 sm:text-base md:text-lg">
            <a
              href="https://github.com/ryuuzu/"
              className="transition-colors duration-300 hover:text-secondary"
              target="_blank"
            >
              <GitHub />
            </a>
            <a
              href="https://linkedin.com/in/utsavgurmachhan/"
              className="transition-colors duration-300 hover:text-secondary"
              target="_blank"
            >
              <LinkedIn />
            </a>
            <a
              href="https://twitter.com/UtsavGurmachhan/"
              className="transition-colors duration-300 hover:text-secondary"
              target="_blank"
            >
              <Twitter />
            </a>
          </div>
        </div>
        <div className="work-experiences pt-4 sm:pt-10">
          <h4 className="pb-1 text-xl font-bold text-tertiary sm:pb-2 sm:text-2xl">
            Work
          </h4>
          {workExperiences.map((workExperience, index) => {
            return (
              <>
                <WorkExperience
                  {...workExperience}
                  key={workExperience.company.name}
                />
                {index < workExperiences.length - 1 && (
                  <div className="work-experience-separator my-2 border-b border-secondary dark:border-tertiary"></div>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="w-full bg-primary px-5 py-3  text-white dark:bg-secondary sm:min-h-screen sm:w-1/4 sm:py-10 md:w-2/5">
        Hello, I am Utsav Gurmachhan. I am also called ryuuzu. <br />
        <br />
        I am a back-end developer based in Kathmandu, Nepal. With a passion of
        learning and building things, I am always looking for opportunities to
        learn and grow. I&apos;m constantly striving to stay up-to-date with the
        latest technology. <br /> <br />I am currently pursuing my
        Bachelor&apos;s degree in Computing from{" "}
        <a
          href="https://islington.edu.np/"
          className="text-white underline decoration-dotted underline-offset-4"
        >
          Islington College
        </a>
        . I am also working as a back-end intern at{" "}
        <a
          href="https://crocuspearl.com/"
          className="text-white underline decoration-dotted underline-offset-4"
        >
          Crocus Pearl Technologies
        </a>
        .
      </div>
    </main>
  );
}
