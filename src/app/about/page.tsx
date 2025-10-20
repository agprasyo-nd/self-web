import Link from 'next/link'

export const metadata = {
  title: 'About - My Portfolio',
}

export default function AboutPage() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </nav>
      <h1>About Me</h1>
      <p>
        This is a great place to introduce yourself. Write a few paragraphs about your
        experience, skills, and what makes you passionate about technology or your
        profession. You can also talk about your education, achievements, and any
        hobbies or interests that make you stand out.
      </p>
    </main>
  )
}