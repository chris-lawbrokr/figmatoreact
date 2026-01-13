'use client';

import { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';

export interface BarChartProps {
  title?: string;
  categories: string[];
  series: {
    name: string;
    data: number[];
  }[];
  height?: number;
  colors?: string[];
}

export const BarChart = ({
  title,
  categories,
  series,
  height = 320,
  colors = ['#BEB6CB', '#bba7ff'],
}: BarChartProps) => {
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
      id: 'bar-chart',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: false,
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
    return <div className="flex items-center justify-center h-full">Loading chart…</div>;
  }

  return <Chart options={options} series={series} type="bar" width="100%" height={height} />;
};
