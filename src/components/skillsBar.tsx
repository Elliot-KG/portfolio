import * as React from "react"
import { SkillWrapper } from "./skillWrapper";
import { skills } from "./Skills/skills"
 
export function SkillsBar() {
  return (
    <div className="sticky top-2/4 h-0">
        <div className="left-2 relative top-[-100%] flex flex-col space-y-2">
            {skills.map((skill : React.ReactElement, index : number)=>(
                <SkillWrapper key={String(index)} deactivated={(index%2 == 0)? true : false} >
                    {skill}
                </SkillWrapper>
            ))}
        </div>
    </div>
  );
}



