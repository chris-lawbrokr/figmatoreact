'use client';
import Image from 'next/image';
import SignUpCard from '@/app/signup/components/signupcard';

export default function Login() {
  return (
    <div className="flex flex-1 gap-24">
      <div className="w-full flex items-center justify-center">
        <SignUpCard />
      </div>
      <div className="w-full hidden lg:block">
        <Image
          src="/images/login-graphic.svg"
          alt=""
          height="100"
          width="100"
          className="w-full h-full aspect-1/1"
        />
      </div>
    </div>
  );
}
