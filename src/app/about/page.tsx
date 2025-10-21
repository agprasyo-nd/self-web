import Link from 'next/link'
import { fetchAbout } from '../../lib/api';

export const metadata = {
  title: 'About - My Portfolio',
}

export default async function AboutPage() {
  let about: any = null;
  try {
    about = await fetchAbout();
  } catch (e) {}

  return (
    <main>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </nav>
      <h1>{about?.name ?? 'About Me'}</h1>
      <p>{about?.bio ?? 'This is a great place to introduce yourself.'}</p>
      {about?.skills && (
        <ul>
          {about.skills.map((s: string) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}
    </main>
  )
}