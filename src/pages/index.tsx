import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Mountains } from "../components/mountains"
import { Sun } from "../components/sun"
import { Birds } from "../components/birds"
import { Projects } from "../components/projects"
import { SkillsBar } from "../components/skillsBar"

const IndexPage: React.FC<PageProps> = () => (
  <main className="bg-night w-full h-full">
    <Sun />
    <Birds />
    <Mountains />
    <h1 className="p-10 text-white text-4xl my-14">Hi, I&rsquo;m Elliot—a Developer, Illustrator, and Motion Designer passionate about creating beautiful, human-centered experiences.</h1>
    <SkillsBar />
    <Projects />

  </main>
)

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Elliot K. Goldman</title>
    <meta name="description" content="The portfolio site of Elliot K. Goldman" />
    <link id="icon" rel="icon" href="global-icon" />
  </>
)