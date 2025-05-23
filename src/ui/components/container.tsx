import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="flex justify-center">{children}</div>;
}
