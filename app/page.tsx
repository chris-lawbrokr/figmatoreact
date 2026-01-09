'use client'
import { Button } from "@/stories/Button/Button";
import { Counter } from "@/stories/Counter/Counter";
export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      {/* <Button
        label="Button"
        onClick={() => {}}
        variant="primary"
      /> */}
      <Counter
        label="Counter"
        onChange={() => {}}
        value={0}
      />
    </main>
  );
}
