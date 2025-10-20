import Link from 'next/link'

export const metadata = {
  title: 'Projects - My Portfolio',
}

interface Project {
  name: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    name: 'Project 1',
    description: 'A brief description of your first project, highlighting its purpose and the technologies used.',
    link: 'https://github.com/yourusername/project1',
  },
  {
    name: 'Project 2',
    description: 'Another project description goes here. Feel free to add as many projects as you like.',
    link: 'https://github.com/yourusername/project2',
  },
]

export default function ProjectsPage() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </nav>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View source
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}