export type EducationDegreeProps = {
  name: string;
  institution: string;
  end?: string;
  description: string;
  website: string;
};

export type WorkExperienceProps = {
  company: {
    name: string;
    website: string;
    location: string;
  };
  position: string;
  duration: {
    start: string;
    end?: string;
  };
  description: string;
  tasks?: string[];
  skills: string[];
};

export type UserRepo = {
  owner: string;
  repo: string;
  link: string;
  description?: string;
  image: string;
  website?: string;
  language?: string;
  languageColor?: string;
  stars: number;
  forks: number;
  languages?: string[];
};
