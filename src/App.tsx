import { useState, type ReactNode } from "react";
import type { NavId } from "./data/resume";
import { LocaleProvider, useLocale } from "./locale";
import { LangToggle } from "./components/LangToggle";
import { MobileNav } from "./components/MobileNav";
import { Sidebar } from "./components/Sidebar";
import { PrintOnePager } from "./components/PrintOnePager";
import { ShareButton } from "./components/ShareButton";
import { ContactSection } from "./components/sections/Contact";
import { CredentialsSection } from "./components/sections/Credentials";
import { ExperienceSection } from "./components/sections/Experience";
import { ImpactSection } from "./components/sections/Impact";
import { MandateSection } from "./components/sections/Mandate";

const screens: Record<NavId, () => ReactNode> = {
  mandate: () => <MandateSection />,
  impact: () => <ImpactSection />,
  experience: () => <ExperienceSection />,
  credentials: () => <CredentialsSection />,
  contact: () => <ContactSection />,
};

function AppShell() {
  const [active, setActive] = useState<NavId>("mandate");
  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <div className="grid-bg fixed inset-0 pointer-events-none z-0 no-print" />

      <div className="relative z-10 flex min-h-dvh screen-only">
        <Sidebar active={active} onNavigate={setActive} />

        <main className="flex-1 min-w-0 pb-20 lg:pb-8">
          <div className="lg:hidden flex items-center justify-end px-4 pt-4 no-print">
            <LangToggle compact />
          </div>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-6 sm:py-8">
            {screens[active]()}
          </div>
        </main>
      </div>

      <MobileNav active={active} onNavigate={setActive} />
      <PrintOnePager />
    </div>
  );
}

export default function App() {
  return (
    <LocaleProvider>
      <AppShell />
    </LocaleProvider>
  );
}
