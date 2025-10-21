const BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';

export async function fetchHome() {
  const res = await fetch(`${BASE}/api/home`);
  if (!res.ok) throw new Error('Failed to fetch home');
  return res.json();
}

export async function fetchAbout() {
  const res = await fetch(`${BASE}/api/about`);
  if (!res.ok) throw new Error('Failed to fetch about');
  return res.json();
}

export async function fetchPortfolio() {
  const res = await fetch(`${BASE}/api/portfolio`);
  if (!res.ok) throw new Error('Failed to fetch portfolio');
  return res.json();
}

export default { fetchHome, fetchAbout, fetchPortfolio };
