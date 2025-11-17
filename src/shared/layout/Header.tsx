import { LayoutDashboard } from 'lucide-react';

function Header() {
  return (
    <header className="sticky inset-0 bottom-auto bg-[linear-gradient(180deg,var(--background,#ffffff)_0%,rgba(18,18,18,0.1)_99%)]">
      <div className="flex items-center gap-2 p-8 font-black">
        <div className="bg-foreground rounded-sm p-1.5">
          <LayoutDashboard className="text-background size-3.5" />
        </div>
        Improvisation
      </div>
    </header>
  );
}

export default Header;
