import { EducationDegreeProps } from "@/types/types";

const EducationDegree = (educationDegree: EducationDegreeProps) => {
  let endDate = educationDegree.end ? new Date(educationDegree.end) : "Current";
  return (
    <div>
      <div className="education-degree-top flex flex-col text-sm font-bold text-secondary sm:flex-row sm:justify-between">
        <div className="sm:pb-1">
          <a
            href={educationDegree.website}
            className="text-primary underline decoration-dotted underline-offset-4"
          >
            {educationDegree.institution},
          </a>{" "}
          {educationDegree.name}
        </div>
        <div>
          {endDate.toLocaleString("default", {
            year: "numeric",
          })}
        </div>
      </div>
      <div className="education-degree-description mt-1 text-sm font-medium ">
        {educationDegree.description}
      </div>
    </div>
  );
};

export default EducationDegree;
