'use client';

import { Menu } from './components/Menu';
import { BarChart } from './components/BarChart';
import { PieChart } from './components/PieChart';

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
            <BarChart
              title="Monthly Revenue"
              categories={[
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ]}
              series={[
                {
                  name: 'Revenue',
                  data: [30, 40, 35, 50, 49, 60, 70, 91, 85, 95, 100, 110],
                },
              ]}
            />
          </div>
          <div className="bg-white rounded-2xl p-6 min-h-[200px]">
            <PieChart
              title="Product Distribution"
              labels={['Product A', 'Product B', 'Product C', 'Product D']}
              series={[44, 55, 13, 33]}
            />
          </div>
          <div className="bg-white rounded-2xl p-6 min-h-[200px]">
            <BarChart
              title="Monthly Revenue"
              categories={[
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ]}
              series={[
                {
                  name: 'Revenue',
                  data: [30, 40, 35, 50, 49, 60, 70, 91, 85, 95, 100, 110],
                },
              ]}
            />
          </div>
          <div
            className="
              bg-white rounded-2xl p-6 min-h-[200px]
              @[800px]:col-span-2
            "
          >
            <BarChart
              title="Monthly Revenue"
              categories={[
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ]}
              series={[
                {
                  name: 'Revenue',
                  data: [30, 40, 35, 50, 49, 60, 70, 91, 85, 95, 100, 110],
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
