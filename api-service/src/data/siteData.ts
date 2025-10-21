export const menu = [
  { id: 'home', label: 'Home', href: '/' , order: 1},
  { id: 'about', label: 'About', href: '/about', order: 2},
  { id: 'resume', label: 'Resume', href: '/resume', order: 3},
  { id: 'portfolio', label: 'Portfolio', href: '/portfolio', order: 4},
  { id: 'contact', label: 'Contact', href: '/contact', order: 5}
];

export const home = {
  heroTitle: 'Hi, I\'m Agung',
  heroSubtitle: 'Front-end developer and designer',
  cta: { label: 'View portfolio', href: '/portfolio' },
  highlights: [
    { id: 'h1', title: 'Fast', description: 'Optimized for performance' },
    { id: 'h2', title: 'Responsive', description: 'Desktop-first responsive design' }
  ]
};

export const about = {
  name: 'Agung',
  bio: 'I build web experiences using modern tools.',
  photoUrl: '/public/iPortfolio-1.0.0/assets/img/my-profile-img.jpg',
  skills: ['React', 'Next.js', 'TypeScript', 'CSS'],
  socials: [
    { name: 'github', url: 'https://github.com/agprasyo-nd' }
  ]
};

export const resume = {
  experiences: [
    { id: 'e1', role: 'Frontend Developer', company: 'ACME', from: '2022', to: 'Present', description: 'Building web apps' }
  ],
  education: [
    { id: 'ed1', degree: 'B.Sc. Computer Science', school: 'University', year: '2021' }
  ]
};

export const portfolio = [
  { id: '1', title: 'Project One', description: 'First sample project', image: '/public/iPortfolio-1.0.0/assets/img/portfolio/app-1.jpg' },
  { id: '2', title: 'Project Two', description: 'Second sample project', image: '/public/iPortfolio-1.0.0/assets/img/portfolio/app-2.jpg' }
];

export default { menu, home, about, resume, portfolio };
