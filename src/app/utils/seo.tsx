import type { Metadata } from 'next'

export const setStaticMetadata: Function = (title: string = "ProjectsHub", description: string = "ProjectsHub is a blog by ProjectsHub.") => {
  const metadata: Metadata = {
    title,
    description
  }
  return metadata
}