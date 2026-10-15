import { InstitutionalFooter } from "@/components/layout/InstitutionalFooter";
import { InstitutionalHeader } from "@/components/layout/InstitutionalHeader";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InstitutionalHeader />
      <main className="flex-1">{children}</main>
      <InstitutionalFooter />
    </>
  );
}
