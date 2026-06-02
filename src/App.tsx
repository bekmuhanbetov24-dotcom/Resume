import { useEffect, useState } from "react";
import { resume, type NavId } from "./data/resume";
import { MobileNav } from "./components/MobileNav";
import { Sidebar } from "./components/Sidebar";
import { ContactSection } from "./components/sections/Contact";
import { ExperienceSection } from "./components/sections/Experience";
import { OverviewSection } from "./components/sections/Overview";
import { SkillsSection } from "./components/sections/Skills";
import { CertificatesScreen } from "./components/sections/Certificates";

const screens: Record<NavId, () => React.ReactNode> = {
  overview: () => <OverviewSection />,
  skills: () => <SkillsSection />,
  certificates: () => <CertificatesScreen />,
  experience: () => <ExperienceSection />,
  contact: () => <ContactSection />,
};

export default function App() {
  const [active, setActive] = useState<NavId>("overview");

  useEffect(() => {
    document.title = resume.meta.pageTitle;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <div className="grid-bg fixed inset-0 pointer-events-none z-0" />

      <div className="relative z-10 flex min-h-dvh">
        <Sidebar active={active} onNavigate={setActive} />

        <main className="flex-1 min-w-0 pb-20 lg:pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-6 sm:py-8">
            {screens[active]()}
          </div>
        </main>
      </div>

      <MobileNav active={active} onNavigate={setActive} />
    </div>
  );
}
