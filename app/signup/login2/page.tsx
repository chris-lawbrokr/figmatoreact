'use client';
import Image from 'next/image';
import SignUpCard from '@/app/signup/components/signupcard';

export default function Login() {
  return (
    <div className="flex flex-1 gap-24">
      <div className="w-full flex flex-col gap-6 items-center justify-center max-w-[448px] mx-auto">
        <Image src="/images/logo.png" alt="Logo" height="32" width="126" />
        <SignUpCard showLogo={false} />
      </div>
    </div>
  );
}
