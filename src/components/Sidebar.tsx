import { resume, type NavId } from "../data/resume";
import { ProfilePhoto } from "./ui";

interface SidebarProps {
  active: NavId;
  onNavigate: (id: NavId) => void;
}

export function Sidebar({ active, onNavigate }: SidebarProps) {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-52 xl:w-56 shrink-0 sticky top-0 h-dvh p-5 border-r border-slate-700/40 bg-[#0f1218]/80">
      <div className="mb-6 flex items-center gap-3">
        <ProfilePhoto
          name={resume.profile.name}
          url={resume.profile.avatarUrl || undefined}
          size="sm"
        />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-100 truncate">
            {resume.profile.nameShort.split(" ")[0]}
          </p>
          <p className="text-[11px] text-slate-500 truncate">Project Manager</p>
        </div>
      </div>

      <nav className="flex flex-col gap-0.5 flex-1" aria-label="Разделы">
        {resume.nav.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                isActive
                  ? "bg-blue-600/15 text-blue-300 border border-blue-600/25"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent"
              }`}
            >
              <span className="text-xs w-4 text-center opacity-60">{item.icon}</span>
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-slate-700/40">
        <p className="text-[11px] text-slate-500 leading-relaxed">{resume.profile.status}</p>
      </div>
    </aside>
  );
}
