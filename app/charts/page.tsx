'use client';

import { Menu } from './components/Menu';

export default function ChartDashboard() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
      <Menu />

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
          <div
            className="
              bg-white rounded-2xl p-6 min-h-[200px]
              @[800px]:col-span-2
            "
          >
            Wide Chart
          </div>
          <div className="bg-white rounded-2xl p-6 min-h-[200px]">Chart</div>
          <div className="bg-white rounded-2xl p-6 min-h-[200px]">Chart</div>
          <div
            className="
              bg-white rounded-2xl p-6 min-h-[200px]
              @[800px]:col-span-2
            "
          >
            Wide Chart
          </div>
        </div>
      </div>
    </div>
  );
}
