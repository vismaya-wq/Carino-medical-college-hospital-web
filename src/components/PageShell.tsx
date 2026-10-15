import { ProposalFooter } from "@/components/proposal/ProposalFooter";
import { ProposalHeader } from "@/components/proposal/ProposalHeader";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ProposalHeader />
      <main className="flex-1">{children}</main>
      <ProposalFooter />
    </div>
  );
}
