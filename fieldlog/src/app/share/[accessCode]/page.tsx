import { GlassCard } from "@/components/ui/GlassCard";

export default async function SharedReportPage({
  params,
}: {
  params: Promise<{ accessCode: string }>;
}) {
  const { accessCode } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/20 to-cyan-50/30 dark:from-slate-950 dark:via-indigo-950/10 dark:to-cyan-950/10 flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-3xl space-y-8">
        <div className="text-center space-y-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg mx-auto">
            F
          </div>
          <h1 className="text-2xl font-bold">Shared Report</h1>
          <p className="text-sm text-slate-500">Access Code: {accessCode}</p>
        </div>

        <GlassCard className="space-y-6 p-8">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Urban Biodiversity Mapping</h2>
            <p className="text-sm text-slate-500">Report generated on July 22, 2026</p>
          </div>

          <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-200 dark:border-slate-700">
            {[
              { label: "Total Responses", value: "240" },
              { label: "Completion Rate", value: "87%" },
              { label: "Data Points", value: "1,920" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Summary</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              This report summarizes field data collected across 12 survey sites in the Nairobi region.
              Key findings indicate a 15% increase in urban green cover compared to the previous survey period.
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}