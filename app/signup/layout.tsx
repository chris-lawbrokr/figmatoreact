'use client';
import { usePathname } from 'next/navigation';

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin3 = pathname === '/signup/login3';

  if (isLogin3) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen w-screen justify-center items-center">
      <main className="dashboard-container min-h-screen min-h-[70vh] p-6 md:p-12 sm:p-24 flex">
        {children}
      </main>
    </div>
  );
}
