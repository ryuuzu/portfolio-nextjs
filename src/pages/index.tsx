import { DM_Sans } from "next/font/google";
import { GitHub, Twitter, LinkedIn, PinAlt } from "iconoir-react";
import WorkExperience from "@/components/WorkExperience";
import EducationDegree from "@/components/EducationDegree";
import getPinnedRepos from "@/utils/pinnedRepos";
import { useEffect, useState } from "react";
import { UserRepo } from "@/types/types";
import Project from "@/components/Project";
import Loading from "@/components/Loading";

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

const educationDegrees = [
  {
    name: "B.Sc. (Hons) Computing",
    institution: "Islington College",
    location: "Kamalpokhari, Kathmandu",
    website: "https://islington.edu.np/",
    description: "Currently pursuing a degree in Computing.",
  },
  {
    name: "SLC",
    institution: "Moonlight Higher Secondary School",
    location: "Kumaripati, Lalitpur",
    website: "https://molihss.edu.np/",
    end: "2020",
    description:
      "Completed high-school degree in Science stream focused on Physics, Chemistry and Mathematics.",
  },
  {
    name: "SEE",
    institution: "Nightingale International Secondary School",
    location: "Kupondole, Lalitpur",
    website: "https://nightingale.edu.np/",
    end: "2018",
    description:
      "Completed secondary education with distinction in English, Mathematics and Science.",
  },
];

const skills = ["HTML", "JavaScript", "Python", "PHP"];

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const MadeWithTailwind = () => (
  <svg
    width="170"
    height="30"
    viewBox="0 0 170 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="168"
      height="28"
      rx="5"
      fill="#101926"
      stroke="#20314A"
      stroke-width="0.5"
    ></rect>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.0002 10C14.6 10 13.1002 11.1112 12.4999 13.3336C13.4 12.2224 14.4501 11.8058 15.65 12.0834C16.3346 12.2418 16.8242 12.7017 17.3656 13.211C18.2481 14.0403 19.2695 15 21.5001 15C23.8999 15 25.4 13.8888 26 11.6668C25.1002 12.778 24.0502 13.1946 22.8503 12.9166C22.1653 12.7582 21.6757 12.2983 21.1343 11.7893C20.2518 10.9594 19.2307 10 17.0002 10ZM12.4999 15C10.1001 15 8.59996 16.1112 8 18.3336C8.90012 17.2224 9.95015 16.8058 11.1497 17.0834C11.8347 17.2418 12.3243 17.7017 12.8657 18.211C13.7482 19.0403 14.7693 20 17.0002 20C19.4 20 20.9001 18.8891 21.5001 16.6668C20.6 17.778 19.5499 18.1946 18.35 17.9169C17.6654 17.7582 17.1758 17.2983 16.6344 16.7893C15.7519 15.96 14.7305 15 12.4999 15V15Z"
      fill="#38BDF8"
    ></path>
    <path
      d="M32.852 19V10.6H34.352L37.196 16.192L40.028 10.6H41.528V19H40.256V12.796L37.688 17.8H36.704L34.124 12.808V19H32.852ZM45.2028 19.144C44.6988 19.144 44.2828 19.06 43.9548 18.892C43.6268 18.724 43.3828 18.504 43.2228 18.232C43.0628 17.952 42.9828 17.648 42.9828 17.32C42.9828 16.744 43.2068 16.288 43.6548 15.952C44.1028 15.616 44.7428 15.448 45.5748 15.448H47.1348V15.34C47.1348 14.876 47.0068 14.528 46.7508 14.296C46.5028 14.064 46.1788 13.948 45.7788 13.948C45.4268 13.948 45.1188 14.036 44.8548 14.212C44.5988 14.38 44.4428 14.632 44.3868 14.968H43.1148C43.1548 14.536 43.2988 14.168 43.5468 13.864C43.8028 13.552 44.1228 13.316 44.5068 13.156C44.8988 12.988 45.3268 12.904 45.7908 12.904C46.6228 12.904 47.2668 13.124 47.7228 13.564C48.1788 13.996 48.4068 14.588 48.4068 15.34V19H47.3028L47.1948 17.98C47.0268 18.308 46.7828 18.584 46.4628 18.808C46.1428 19.032 45.7228 19.144 45.2028 19.144ZM45.4548 18.112C45.7988 18.112 46.0868 18.032 46.3188 17.872C46.5588 17.704 46.7428 17.484 46.8708 17.212C47.0068 16.94 47.0908 16.64 47.1228 16.312H45.7068C45.2028 16.312 44.8428 16.4 44.6268 16.576C44.4188 16.752 44.3148 16.972 44.3148 17.236C44.3148 17.508 44.4148 17.724 44.6148 17.884C44.8228 18.036 45.1028 18.112 45.4548 18.112ZM52.6019 19.144C52.0259 19.144 51.5179 19.008 51.0779 18.736C50.6379 18.464 50.2939 18.092 50.0459 17.62C49.7979 17.148 49.6739 16.612 49.6739 16.012C49.6739 15.412 49.7979 14.88 50.0459 14.416C50.2939 13.944 50.6379 13.576 51.0779 13.312C51.5259 13.04 52.0379 12.904 52.6139 12.904C53.0859 12.904 53.4979 12.996 53.8499 13.18C54.2099 13.364 54.4899 13.624 54.6899 13.96V10.36H55.9619V19H54.8219L54.6899 18.076C54.4979 18.356 54.2339 18.604 53.8979 18.82C53.5619 19.036 53.1299 19.144 52.6019 19.144ZM52.8299 18.04C53.3739 18.04 53.8179 17.852 54.1619 17.476C54.5139 17.1 54.6899 16.616 54.6899 16.024C54.6899 15.424 54.5139 14.94 54.1619 14.572C53.8179 14.196 53.3739 14.008 52.8299 14.008C52.2859 14.008 51.8379 14.196 51.4859 14.572C51.1339 14.94 50.9579 15.424 50.9579 16.024C50.9579 16.416 51.0379 16.764 51.1979 17.068C51.3579 17.372 51.5779 17.612 51.8579 17.788C52.1459 17.956 52.4699 18.04 52.8299 18.04ZM60.3497 19.144C59.7657 19.144 59.2457 19.016 58.7897 18.76C58.3417 18.496 57.9897 18.132 57.7337 17.668C57.4777 17.204 57.3497 16.664 57.3497 16.048C57.3497 15.424 57.4737 14.876 57.7217 14.404C57.9777 13.932 58.3297 13.564 58.7777 13.3C59.2337 13.036 59.7617 12.904 60.3617 12.904C60.9457 12.904 61.4537 13.036 61.8857 13.3C62.3177 13.556 62.6537 13.9 62.8937 14.332C63.1337 14.764 63.2537 15.24 63.2537 15.76C63.2537 15.84 63.2497 15.928 63.2417 16.024C63.2417 16.112 63.2377 16.212 63.2297 16.324H58.5977C58.6377 16.9 58.8257 17.34 59.1617 17.644C59.5057 17.94 59.9017 18.088 60.3497 18.088C60.7097 18.088 61.0097 18.008 61.2497 17.848C61.4977 17.68 61.6817 17.456 61.8017 17.176H63.0737C62.9137 17.736 62.5937 18.204 62.1137 18.58C61.6417 18.956 61.0537 19.144 60.3497 19.144ZM60.3497 13.948C59.9257 13.948 59.5497 14.076 59.2217 14.332C58.8937 14.58 58.6937 14.956 58.6217 15.46H61.9817C61.9577 14.996 61.7937 14.628 61.4897 14.356C61.1857 14.084 60.8057 13.948 60.3497 13.948ZM68.785 19L67.033 13.048H68.305L69.457 17.536L70.753 13.048H72.169L73.465 17.536L74.617 13.048H75.889L74.137 19H72.829L71.461 14.32L70.093 19H68.785ZM77.6568 11.92C77.4168 11.92 77.2168 11.848 77.0568 11.704C76.9048 11.552 76.8288 11.364 76.8288 11.14C76.8288 10.916 76.9048 10.732 77.0568 10.588C77.2168 10.436 77.4168 10.36 77.6568 10.36C77.8968 10.36 78.0928 10.436 78.2448 10.588C78.4048 10.732 78.4848 10.916 78.4848 11.14C78.4848 11.364 78.4048 11.552 78.2448 11.704C78.0928 11.848 77.8968 11.92 77.6568 11.92ZM77.0208 19V13.048H78.2928V19H77.0208ZM82.468 19C81.884 19 81.42 18.86 81.076 18.58C80.732 18.292 80.56 17.784 80.56 17.056V14.116H79.54V13.048H80.56L80.716 11.536H81.832V13.048H83.512V14.116H81.832V17.056C81.832 17.384 81.9 17.612 82.036 17.74C82.18 17.86 82.424 17.92 82.768 17.92H83.452V19H82.468ZM84.8235 19V10.36H86.0955V14.008C86.2955 13.664 86.5715 13.396 86.9235 13.204C87.2835 13.004 87.6795 12.904 88.1115 12.904C88.8235 12.904 89.3835 13.128 89.7915 13.576C90.1995 14.024 90.4035 14.692 90.4035 15.58V19H89.1435V15.712C89.1435 14.56 88.6835 13.984 87.7635 13.984C87.2835 13.984 86.8835 14.152 86.5635 14.488C86.2515 14.824 86.0955 15.304 86.0955 15.928V19H84.8235Z"
      fill="white"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M100.09 14.0462H98.525V16.953C98.525 17.7283 99.0551 17.7161 100.09 17.6676V18.8426C97.9946 19.0848 97.1614 18.5277 97.1614 16.953V14.0462H96V12.7864H97.1614V11.1597L98.525 10.7719V12.7864H100.09V14.0462ZM106.057 12.7864H107.42V18.8426H106.057V17.9706C105.577 18.6122 104.833 19 103.848 19C102.131 19 100.705 17.6072 100.705 15.8143C100.705 14.0099 102.131 12.6289 103.848 12.6289C104.833 12.6289 105.577 13.0164 106.057 13.6465V12.7864V12.7864ZM104.063 17.7524C105.199 17.7524 106.057 16.9408 106.057 15.8143C106.057 14.6878 105.199 13.8765 104.063 13.8765C102.927 13.8765 102.068 14.6881 102.068 15.8143C102.068 16.9408 102.927 17.7524 104.063 17.7524ZM109.693 11.878C109.213 11.878 108.822 11.4906 108.822 11.0423C108.823 10.8202 108.915 10.6075 109.079 10.4509C109.242 10.2943 109.463 10.2065 109.693 10.2066C109.923 10.2064 110.144 10.2942 110.307 10.4508C110.47 10.6074 110.563 10.8201 110.564 11.0423C110.564 11.4902 110.173 11.878 109.693 11.878ZM109.011 18.8426V12.7864H110.375V18.8426H109.011ZM111.953 18.8426V10H113.316V18.8422H111.953V18.8426ZM122.166 12.7864H123.605L121.623 18.8426H120.285L118.972 14.7608L117.646 18.8426H116.308L114.326 12.7864H115.765L116.99 16.9649L118.315 12.7864H119.616L120.928 16.9649L122.166 12.7864V12.7864ZM125.296 11.878C124.817 11.878 124.425 11.4906 124.425 11.0423C124.426 10.8201 124.519 10.6074 124.682 10.4508C124.845 10.2942 125.066 10.2064 125.296 10.2066C125.527 10.2064 125.748 10.2942 125.911 10.4508C126.074 10.6074 126.166 10.8201 126.167 11.0423C126.167 11.4902 125.776 11.878 125.296 11.878ZM124.615 18.8426V12.7864H125.978V18.8426H124.615V18.8426ZM130.876 12.6289C132.29 12.6289 133.3 13.5494 133.3 15.1241V18.8422H131.937V15.2572C131.937 14.3366 131.381 13.8524 130.523 13.8524C129.627 13.8524 128.92 14.3611 128.92 15.5965V18.8426H127.556V12.7864H128.92V13.5617C129.336 12.9319 130.018 12.6289 130.876 12.6289V12.6289ZM139.764 10.3641H141.127V18.8422H139.764V17.9702C139.284 18.6122 138.539 18.9997 137.555 18.9997C135.838 18.9997 134.411 17.6068 134.411 15.8139C134.411 14.0095 135.838 12.6286 137.555 12.6286C138.539 12.6286 139.284 13.0161 139.764 13.6461V10.3641V10.3641ZM137.769 17.7524C138.905 17.7524 139.764 16.9408 139.764 15.8143C139.764 14.6878 138.905 13.8765 137.769 13.8765C136.633 13.8765 135.774 14.6881 135.774 15.8143C135.774 16.9408 136.633 17.7524 137.769 17.7524ZM145.697 19C143.791 19 142.364 17.6072 142.364 15.8143C142.364 14.0099 143.791 12.6289 145.697 12.6289C146.934 12.6289 148.007 13.2464 148.512 14.1914L147.338 14.8456C147.06 14.2762 146.442 13.9128 145.684 13.9128C144.574 13.9128 143.728 14.7244 143.728 15.8143C143.728 16.9045 144.574 17.7161 145.684 17.7161C146.442 17.7161 147.06 17.3405 147.363 16.7833L148.537 17.4253C148.007 18.3821 146.934 18.9997 145.697 18.9997V19ZM150.784 14.4578C150.784 15.5602 154.18 14.8938 154.18 17.1349C154.18 18.3462 153.082 19 151.719 19C150.456 19 149.547 18.4547 149.143 17.5827L150.317 16.9289C150.519 17.4738 151.024 17.8009 151.719 17.8009C152.325 17.8009 152.792 17.6072 152.792 17.1223C152.792 16.0447 149.396 16.6503 149.396 14.4822C149.396 13.3435 150.418 12.6289 151.706 12.6289C152.741 12.6289 153.6 13.0893 154.042 13.8887L152.893 14.5063C152.665 14.034 152.223 13.8158 151.706 13.8158C151.214 13.8158 150.784 14.0218 150.784 14.4578V14.4578ZM156.604 14.4578C156.604 15.5602 160 14.8938 160 17.1349C160 18.3462 158.902 19 157.538 19C156.276 19 155.367 18.4547 154.963 17.5827L156.137 16.9289C156.339 17.4738 156.844 17.8009 157.538 17.8009C158.144 17.8009 158.611 17.6072 158.611 17.1223C158.611 16.0447 155.216 16.6503 155.216 14.4822C155.216 13.3435 156.238 12.6289 157.526 12.6289C158.561 12.6289 159.419 13.0893 159.861 13.8887L158.712 14.5063C158.485 14.034 158.043 13.8158 157.526 13.8158C157.033 13.8158 156.604 14.0218 156.604 14.4578V14.4578Z"
      fill="white"
    ></path>
  </svg>
);

export default function Home() {
  const [pinnedRepos, setPinnedRepos] = useState<
    (UserRepo | undefined)[] | undefined
  >([]);

  useEffect(() => {
    getPinnedRepos().then((repos) => {
      let filteredRepos = repos?.filter((repo) => repo !== undefined);
      setPinnedRepos(filteredRepos);
    });
  }, []);

  return (
    <main
      className={`flex min-h-screen w-full flex-col items-center sm:flex-row sm:items-stretch ${dmSans.className}`}
    >
      <div className="w-full flex-grow bg-white px-5 py-3 text-primary  sm:min-h-screen sm:w-3/4 sm:py-10 md:w-3/5">
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
                  <div className="work-experience-separator my-5"></div>
                )}
              </>
            );
          })}
        </div>
        <div className="cv-separator my-4 border-b border-secondary "></div>
        <div className="projects">
          <h4 className="pb-1 text-xl font-bold text-tertiary sm:pb-2 sm:text-2xl">
            Projects
          </h4>
          {pinnedRepos && pinnedRepos?.length >= 1 ? (
            <>
              {pinnedRepos?.map((repo, index) => {
                if (!repo) return null;
                return (
                  <>
                    <Project {...repo} key={`${repo.owner}/${repo.repo}`} />
                    {index < pinnedRepos.length - 1 && (
                      <div className="projects-separator my-5"></div>
                    )}
                  </>
                );
              })}
            </>
          ) : (
            <Loading />
          )}
        </div>
        <div className="cv-separator my-4 border-b border-secondary "></div>
        <div className="education">
          <h4 className="pb-1 text-xl font-bold text-tertiary sm:pb-2 sm:text-2xl">
            Education
          </h4>
          {educationDegrees.map((educationDegree, index) => {
            return (
              <>
                <EducationDegree
                  {...educationDegree}
                  key={educationDegree.name}
                />
                {index < educationDegrees.length - 1 && (
                  <div className="education-separator my-5"></div>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="w-full bg-primary px-5 py-8 text-white sm:min-h-screen sm:w-1/4 sm:py-10 md:w-2/5">
        <div>
          Hello, I am Utsav Gurmachhan. I am also called ryuuzu. <br />
          <br />
          I am a back-end developer based in Kathmandu, Nepal. With a passion of
          learning and building things, I am always looking for opportunities to
          learn and grow. I&apos;m constantly striving to stay up-to-date with
          the latest technology. <br /> <br />I am currently pursuing my
          Bachelor&apos;s degree in Computing from{" "}
          <a
            href="https://islington.edu.np/"
            className="text-white underline decoration-dotted underline-offset-4"
            target="_blank"
          >
            Islington College
          </a>
          . I am also working as a back-end intern at{" "}
          <a
            href="https://crocuspearl.com/"
            className="text-white underline decoration-dotted underline-offset-4"
            target="_blank"
          >
            Crocus Pearl Technologies
          </a>
          .
        </div>
        <a
          href="https://goo.gl/maps/JdGHKxArPFvGGv6w7"
          className="my-5 flex flex-row items-center gap-2 text-tertiary transition-colors duration-300 hover:text-slate-300"
          target="_blank"
        >
          <PinAlt /> <div>Chandragiri, Kathmandu, Nepal</div>
        </a>
        <a
          href="https://leonard.sh/"
          target="_blank"
          className="text-xs decoration-dotted underline-offset-2 hover:underline"
        >
          Inspired by Leonard
        </a>
      </div>
    </main>
  );
}
