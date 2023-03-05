import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Mountains } from "../components/mountains"
import { Sun } from "../components/sun"
import { Birds } from "../components/birds"
import { Projects } from "../components/projects"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-night w-full h-full">
      <Sun/>
      <Birds/>
      <Mountains />
      <Projects/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Elliot K. Goldman</title>
    <meta name="description" content="The portfolio site of Elliot K. Goldman" />
    <link id="icon" rel="icon" href="global-icon" />
  </>
)