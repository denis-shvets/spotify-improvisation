import Link from 'next/link';
import { ExternalLink, LayoutDashboard } from 'lucide-react';

const LINKS = [
  {
    href: 'https://www.linkedin.com/in/denisshvets/',
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/denis-shvets',
    label: 'GitHub',
  },
];

function Footer() {
  return (
    <footer className="text-footer-foreground border-t-decorative-subdued border-t py-6">
      <ul className="flex flex-col gap-4 px-4 sm:flex-row sm:items-center sm:gap-6 sm:px-8">
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              {link.label} <ExternalLink className="size-4" />
            </Link>
          </li>
        ))}
      </ul>
      <hr className="border-decorative-subdued my-6" />
      <div className="flex items-center gap-6 px-4 sm:px-8">
        <div className="bg-foreground rounded-sm p-2">
          <LayoutDashboard className="text-background size-6" />
        </div>
        <p className="text-[0.75rem] line-through">&copy; Improvisation</p>
      </div>
    </footer>
  );
}

export default Footer;
