export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50/20 to-cyan-50/30 dark:from-slate-950 dark:via-indigo-950/10 dark:to-cyan-950/10 p-4">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}