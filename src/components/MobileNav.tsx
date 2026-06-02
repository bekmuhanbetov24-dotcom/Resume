import { resume, type NavId } from "../data/resume";

interface MobileNavProps {
  active: NavId;
  onNavigate: (id: NavId) => void;
}

export function MobileNav({ active, onNavigate }: MobileNavProps) {
  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 border-t border-slate-700/60 bg-[#0f1218]/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]"
      aria-label="Навигация"
    >
      <ul className="flex max-w-md mx-auto">
        {resume.nav.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="flex-1 min-w-0">
              <button
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center gap-0.5 w-full py-2 px-0.5 transition-colors ${
                  isActive ? "text-blue-400" : "text-slate-500"
                }`}
              >
                <span className="text-sm leading-none">{item.icon}</span>
                <span className="text-[10px] font-medium truncate max-w-full">
                  {item.shortLabel}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
