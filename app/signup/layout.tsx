export default function SignUpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-screen justify-center items-center">
      <main className="dashboard-container min-h-[70vh] p-24 flex">{children}</main>
    </div>
  );
}
