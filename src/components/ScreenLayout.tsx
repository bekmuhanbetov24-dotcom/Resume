import type { ReactNode } from "react";
import { SectionTitle } from "./ui";

type ScreenLayoutProps = {
  id?: string;
  overline?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function ScreenLayout({
  id,
  overline,
  title,
  description,
  children,
}: ScreenLayoutProps) {
  return (
    <div id={id} className="animate-fade-up">
      <div className="page-header">
        <SectionTitle
          overline={overline}
          title={title}
          description={description}
          className="mb-0"
        />
      </div>
      <div className="screen-stack">{children}</div>
    </div>
  );
}
