'use client';
import Image from 'next/image';

import { Button } from '@/stories/Button/Button';
import { Checkbox } from '@/stories/Checkbox/Checkbox';
import { TextField } from '@/stories/TextField/TextField';
import { Card, CardTitle } from '@/stories/Card/Card';
import Link from 'next/link';

export default function SignUpCard({ showLogo = true }: { showLogo?: boolean }) {
  return (
    <Card className="@container">
      {showLogo && <Image src="/images/logo.png" alt="Logo" height="32" width="126" />}
      <CardTitle>Welcome back</CardTitle>
      <div className="flex gap-6 flex-col @md:flex-row">
        <TextField
          label="Email Address"
          onChange={() => {}}
          placeholder="Enter your email"
          state="default"
          value=""
          variant="form"
        />
        <TextField
          label="Email Address"
          onChange={() => {}}
          placeholder="Enter your email"
          state="default"
          value=""
          variant="form"
        />
      </div>
      <div className="flex justify-between">
        <Checkbox label="Remember me" onChange={() => {}} />
        <Link href={'/'} className="text-purple-link hover:underline">
          Sign up
        </Link>
      </div>
      <Button borderRadius="md" label="Log In" onClick={() => {}} variant="primary" />
      <p className="text-sm font-light leading-relaxed text-text-dark font-helvetica">
        Don&#8217;t have an account yet?{' '}
        <Link href={'/'} className="text-purple-link hover:underline">
          Sign up
        </Link>
      </p>
    </Card>
  );
}
