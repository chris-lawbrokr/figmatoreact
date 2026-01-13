'use client';

import { Logo } from '@/stories/Logo/Logo';

export default function ChartDashboard() {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="shrink-0 p-6 bg-white rounded-r-2xl shadow-[0_4px_50px_rgba(37,14,83,0.12)]">
        <Logo height={50} width={300} />
      </div>

      {/* Scrollable main area */}
      <div className="@container inline-size w-full h-full overflow-y-auto">
        <div
          className="
            grid
            min-h-full
            grid-cols-1
            @[800px]:grid-cols-2
            @[1200px]:grid-cols-3
            auto-rows-fr
            gap-6
            p-6
          "
        >
          <div className="bg-white rounded-2xl p-6 min-h-[200px]">Item 1</div>
          <div className="bg-white rounded-2xl p-6 min-h-[200px]">Item 2</div>
          <div className="bg-white rounded-2xl p-6 min-h-[200px]">Item 3</div>
          <div className="bg-white rounded-2xl p-6 min-h-[200px]">Item 4</div>
          <div className="bg-white rounded-2xl p-6 min-h-[200px]">Item 5</div>
          <div className="bg-white rounded-2xl p-6 min-h-[200px]">Item 6</div>
        </div>
      </div>
    </div>
  );
}
