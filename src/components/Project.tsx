import { UserRepo } from "@/types/types";

const Project = (repo: UserRepo) => {
  return (
    <>
      <div className="project">
        <div className="project-header">
          <a
            href={repo.website ? repo.website : repo.link}
            target="_blank"
            className="text-primary underline decoration-dotted underline-offset-4 "
          >
            {repo.repo}
          </a>
        </div>
        <div className="project-description mt-1 text-sm font-medium ">
          {repo.description}
        </div>
        {repo.languages && (
          <div className="project-languages mt-2 text-sm font-medium ">
            <span className="font-bold">Languages: </span>
            {repo.languages.join(" ⚫ ")}
          </div>
        )}
      </div>
    </>
  );
};

export default Project;
