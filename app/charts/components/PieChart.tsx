'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

export interface PieChartProps {
  title?: string;
  labels: string[];
  series: number[];
  height?: number;
}

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

export const PieChart = ({ title, labels, series, height = 320 }: PieChartProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="flex items-center justify-center h-full">Loading chart…</div>;
  }

  const options = {
    chart: { id: 'pie-chart' },
    labels: labels.map(String),
    legend: {
      position: 'bottom' as const,
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    },
    title: title
      ? {
          text: String(title),
          align: 'left' as const,
          style: {
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: '18px',
            fontWeight: 600,
          },
        }
      : undefined,
    colors: ['#250d53', '#8460f7', '#ecc58e', '#4caf50', '#ff6b9d'],
  };

  return (
    <Chart options={options} series={series.map(Number)} type="pie" width="100%" height={height} />
  );
};
