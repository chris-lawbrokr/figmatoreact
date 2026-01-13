'use client';

import { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';

export interface LineChartProps {
  title?: string;
  categories: string[];
  series: {
    name: string;
    data: number[];
  }[];
  height?: number;
  colors?: string[];
}

export const LineChart = ({
  title,
  categories,
  series,
  height = 320,
  colors = ['#D3D3AD', '#BEB6CB', '#D3D3AD'],
}: LineChartProps) => {
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
      id: 'line-chart',
      toolbar: { show: false },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    markers: {
      size: 4,
    },
    xaxis: {
      categories,
      labels: {
        style: {
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        },
      },
    },
    legend: {
      position: 'top',
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
  };

  if (!isMounted || !Chart) {
    return <div className="flex items-center justify-center h-full">Loading chart...</div>;
  }

  return <Chart options={options} series={series} type="line" width="100%" height={height} />;
};
