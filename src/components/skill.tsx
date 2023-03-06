import * as React from "react"

const Skills : Array<React.ReactElement> = []

export function SkillWrapper({children} : {children : React.ReactElement}) {
  return (
    <div className="w-10 h-10 rounded-md bg-slate-300 flex justify-center">
        {children}
    </div>
  );
}