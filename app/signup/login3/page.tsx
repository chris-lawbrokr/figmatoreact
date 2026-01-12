'use client';
import Image from 'next/image';
import SignUpCard from '@/app/signup/components/signupcard';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <div className="w-full h-full flex items-center justify-center p-12">
        <SignUpCard noBackground showLogo={false} />
      </div>
      <div className="w-full h-full bg-primary p-18 flex items-center justify-left">
        <div className="flex flex-col gap-8">
          <Image src="/images/logo.svg" alt="Logo" height={48} width={567} />
          <div>
            <h2
              className="
              text-white
              font-extrabold
              text-[clamp(1.75rem,3vw,2.25rem)]
              leading-[1.1]
              pb-4
              "
            >
              Boost Your Law Firm's
              <br />
              Web Traffic Conversions
            </h2>
            <p
              className="
              text-[var(--gray-200)] 
              font-normal
              text-[clamp(0.95rem,1.1vw,1rem)]
              leading-[1.5]
              text-white
            "
            >
              Gamify lead interactions with Lawbrokr's pre-qualification software.
              <br />
              No more wasted time on unqualified prospects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
