'use client';
import Image from 'next/image';

import { Button } from '@/stories/Button/Button';
import { Checkbox } from '@/stories/Checkbox/Checkbox';
import { TextField } from '@/stories/TextField/TextField';
import { Card, CardTitle } from '@/stories/Card/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-1 gap-24">
      <div className="w-full flex items-center justify-center">
        <Card>
          <Image src="/images/logo.png" alt="Logo" height="32" width="126" />
          <CardTitle>Welcome back</CardTitle>
          <div className="flex gap-6">
            <TextField label="Email" onChange={() => {}} placeholder="" state="default" value="" />
            <TextField
              label="Password"
              onChange={() => {}}
              placeholder=""
              state="default"
              value=""
            />
          </div>
          <div className="flex justify-between">
            <Checkbox label="Remember me" onChange={() => {}} />
            <Link href={'/'} className="text-purple-link hover:underline">
              Sign up
            </Link>
          </div>
          <Button label="Button" onClick={() => {}} variant="primary" />
          <p className="text-sm font-light leading-relaxed text-text-dark font-helvetica">
            Don&#8217;t have an account yet?{' '}
            <Link href={'/'} className="text-purple-link hover:underline">
              Sign up
            </Link>
          </p>
        </Card>
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
