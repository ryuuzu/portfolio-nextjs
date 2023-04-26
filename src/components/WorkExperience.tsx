type WorkExperienceProps = {
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

const WorkExperience = (workExperience: WorkExperienceProps) => {
  let startDate = new Date(workExperience.duration.start);
  let endDate = workExperience.duration.end
    ? new Date(workExperience.duration.end)
    : "Present";
  return (
    <>
      <div>
        <div className="work-experience-top flex flex-col text-sm font-bold text-secondary sm:flex-row sm:justify-between">
          <div>
            <div className="sm:pb-1">
              <a
                href={workExperience.company.website}
                className="text-primary underline decoration-dotted underline-offset-4 dark:text-white"
              >
                {workExperience.company.name},
              </a>{" "}
              {workExperience.position}
            </div>
            <div>{workExperience.company.location}</div>
          </div>
          <div>
            {startDate.toLocaleString("default", {
              month: "short",
              year: "numeric",
            })}{" "}
            -{" "}
            {endDate.toLocaleString("default", {
              month: "short",
              year: "numeric",
            })}
          </div>
        </div>
        <div className="work-experience-description mt-1 text-sm font-medium dark:text-tertiary">
          {workExperience.description}
        </div>
        {workExperience.tasks && (
          <div className="work-experience-tasks mt-2 text-sm font-medium dark:text-tertiary">
            <ul className="list-inside list-disc">
              {workExperience.tasks.map((task, index) => {
                return (
                  <li
                    key={`${workExperience.company.name.toLowerCase()}-task-${index}`}
                  >
                    {task}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className="work-experience-skills mt-2 text-sm font-medium dark:text-tertiary">
          <span className="font-bold">Skills: </span>
          {workExperience.skills.join(" ⚫ ")}
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
