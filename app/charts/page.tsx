import { Menu } from './components/Menu';
import { BarChart } from './components/BarChart';
import { PieChart } from './components/PieChart';
import { LineChart } from './components/LineChart';
import { AreaChart } from './components/AreaChart';

export default function ChartDashboard() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
      <Menu />
      <div className="@container inline-size w-full h-full overflow-y-auto">
        <div className="grid min-h-full grid-cols-1 @[800px]:grid-cols-2 @[1200px]:grid-cols-3 auto-rows-fr gap-6 p-6">
          {/* Wide bar */}
          <div className="bg-white rounded-2xl p-6 @[800px]:col-span-2">
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
                { name: 'Revenue', data: [30, 40, 35, 50, 49, 60, 70, 91, 85, 95, 100, 110] },
              ]}
            />
          </div>

          {/* Line */}
          <div className="bg-white rounded-2xl p-6">
            <LineChart
              title="Users vs Signups"
              categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
              series={[
                { name: 'Users', data: [120, 200, 300, 420, 500, 620] },
                { name: 'Signups', data: [80, 150, 210, 300, 380, 460] },
              ]}
            />
          </div>

          {/* Pie */}
          <div className="bg-white rounded-2xl p-6">
            <PieChart
              title="Product Distribution"
              labels={['Product A', 'Product B', 'Product C', 'Product D']}
              series={[44, 55, 13, 33]}
            />
          </div>

          {/* Area (wide) */}
          <div className="bg-white rounded-2xl p-6 @[800px]:col-span-2">
            <AreaChart
              title="Traffic Growth"
              categories={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
              series={[{ name: 'Visits', data: [320, 410, 380, 520, 600, 720, 810] }]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
