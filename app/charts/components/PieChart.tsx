'use client';

import { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';

export interface PieChartProps {
  title?: string;
  labels: string[];
  series: number[];
  height?: number;
  colors?: string[];
}

export const PieChart = ({
  title,
  labels,
  series,
  height = 320,
  // colors = ['#EDDAC4', '#e5bd8f'],
  colors = ['#D3D3AD', '#BEB6CB', '#e8e8d3', '#dfdfc2'],
}: PieChartProps) => {
  const [Chart, setChart] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    import('react-apexcharts').then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  const options: ApexOptions = {
    chart: {
      id: 'pie-chart',
    },
    labels: labels.map(String),
    legend: {
      position: 'bottom',
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    },
    title: title
      ? {
          text: title,
          align: 'left',
          style: {
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: '18px',
            fontWeight: 600,
          },
        }
      : undefined,
    colors,
    dataLabels: {
      style: {
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      },
    },
  };

  if (!isMounted || !Chart) {
    return <div className="flex items-center justify-center h-full">Loading chart…</div>;
  }

  return (
    <Chart options={options} series={series.map(Number)} type="pie" width="100%" height={height} />
  );
};
