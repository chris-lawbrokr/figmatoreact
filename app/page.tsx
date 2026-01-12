'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/stories/Button/Button';
import { Counter } from '@/stories/Counter/Counter';
import { Slider } from '@/stories/Slider/Slider';
import { TextField } from '@/stories/TextField/TextField';
import { Checkbox } from '@/stories/Checkbox/Checkbox';
import { RadioGroup } from '@/stories/Radio/Radio';

const pages = [
  { path: '/', label: 'Home - Components Demo' },
  { path: '/signup', label: 'Sign Up' },
  { path: '/signup/login1', label: 'Login 1' },
  { path: '/signup/login2', label: 'Login 2' },
  { path: '/signup/login3', label: 'Login 3' },
];

export default function Home() {
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState('/');

  const handlePageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPath = e.target.value;
    setSelectedPage(newPath);
    router.push(newPath);
  };

  return (
    <>
      <header className="p-4 max-w-6xl mx-auto flex justify-between items-center">
        <Image src="/images/logo.png" alt="Logo" height="100" width="300" />
        <div className="flex flex-col gap-2">
          <select
            id="page-selector"
            value={selectedPage}
            onChange={handlePageChange}
            className="px-4 py-2 border-2 border-border-gray rounded-lg bg-white text-text-dark focus:outline-none focus:border-primary cursor-pointer"
          >
            {pages.map((page) => (
              <option key={page.path} value={page.path}>
                {page.label}
              </option>
            ))}
          </select>
        </div>
      </header>
      <main>
        <div className="min-h-screen w-screen p-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-text-dark">Components</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Buttons */}
              <section className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-text-dark">Buttons</h2>
                <div className="flex flex-col gap-4">
                  <Button label="Primary" variant="primary" onClick={() => {}} />
                  <Button label="Outlined" variant="outlined" onClick={() => {}} />
                  <Button label="Loading" variant="loading" onClick={() => {}} />
                  <Button label="Success" variant="success" onClick={() => {}} />
                  <Button label="Disabled" variant="primary" disabled onClick={() => {}} />
                </div>
              </section>

              {/* Text Fields */}
              <section className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-text-dark">Text Fields</h2>
                <div className="flex flex-col gap-4">
                  <TextField label="Empty Field" placeholder="Enter text" />
                  <TextField label="Error Field" state="error" value="John" />
                  <TextField label="Success Field" state="success" value="John" />
                </div>
              </section>

              {/* Counter */}
              <section className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-text-dark">Counter</h2>
                <Counter label="Counter" value={5} onChange={() => {}} />
              </section>

              {/* Slider */}
              <section className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-text-dark">Slider</h2>
                <Slider label="Slider" value={30} max={100} onChange={() => {}} />
              </section>

              {/* Checkboxes */}
              <section className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-text-dark">Checkboxes</h2>
                <div className="flex flex-col gap-4">
                  <Checkbox label="Unchecked" withBackground onChange={() => {}} />
                  <Checkbox label="Checked" checked withBackground onChange={() => {}} />
                </div>
              </section>

              {/* Radio Buttons */}
              <section className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-text-dark">Radio Buttons</h2>
                <RadioGroup
                  name="demo-radio"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                  ]}
                  value="option2"
                  onChange={() => {}}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
