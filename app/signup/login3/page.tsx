'use client';
import Image from 'next/image';
import SignUpCard from '@/app/signup/components/signupcard';

export default function Home() {
  return (
    <div className="flex flex-1 -m-24">
      <div className="w-full flex items-center justify-center p-12">
        <SignUpCard noBackground showLogo={false} />
      </div>
      <div className="w-full hidden lg:block bg-primary p-18"></div>
    </div>
  );
}
