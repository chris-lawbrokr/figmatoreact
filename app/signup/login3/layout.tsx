export default function Login3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-screen p-0">
      <main className="w-full min-h-screen flex p-0">{children}</main>
    </div>
  );
}
