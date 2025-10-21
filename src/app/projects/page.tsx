import Link from 'next/link'
import { fetchPortfolio } from '../../lib/api';

export const metadata = {
  title: 'Projects - My Portfolio',
}

export default async function ProjectsPage() {
  let items: any[] = [];
  try {
    items = await fetchPortfolio();
  } catch (e) {}

  return (
    <main>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </nav>
      <h1>My Projects</h1>
      <ul>
        {items.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.image && <img src={project.image} alt={project.title} style={{ maxWidth: 240 }} />}
          </li>
        ))}
      </ul>
    </main>
  )
}