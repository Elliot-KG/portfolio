import * as React from "react"
import ProjectsJson from "../src/projects.json"
import { ProjectBox } from "./projectBox"
import { SkillsBar } from "./skillsBar";

export function Projects() {
    return (
        <div>
            <SkillsBar />
            <div className="p-10 flex justify-around">
                {ProjectsJson.map((project)=>(
                    <ProjectBox key={project.id} project={project}/>
                ))}
            </div>
        </div>
  );
}