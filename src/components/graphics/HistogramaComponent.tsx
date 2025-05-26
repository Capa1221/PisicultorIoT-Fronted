import { createChart, ColorType, IChartApi, ISeriesApi, Time, HistogramData } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';
import { HistogramChartComponentProps } from '../../services/interfaces';

export const HistogramChartComponent: React.FC<HistogramChartComponentProps> = ({
    data,
    chartOptions = {
        layout: { textColor: 'black', background: { type: ColorType.Solid, color: 'white' } }
    },
    seriesOptions = { color: '#26a69a' }
}) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);
    const histogramSeriesRef = useRef<ISeriesApi<'Histogram'> | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (chartContainerRef.current) {
                chartRef.current?.applyOptions({ width: chartContainerRef.current.clientWidth });
            }
        };

        if (chartContainerRef.current) {
            chartRef.current = createChart(chartContainerRef.current, {
                layout: chartOptions.layout,
                width: chartContainerRef.current.clientWidth,
                height: 300,
            });

            const formattedData: HistogramData<Time>[] = data.map(item => ({
                time: item.time as Time,
                value: typeof item.value === 'string' ? parseFloat(item.value) : item.value, // Convertir a número si es necesario
            }));

            histogramSeriesRef.current = chartRef.current.addHistogramSeries(seriesOptions);
            histogramSeriesRef.current.setData(formattedData);

            chartRef.current.timeScale().fitContent();

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                chartRef.current?.remove();
                chartRef.current = null;
            };
        }
    }, [data, chartOptions, seriesOptions]);

    return <div ref={chartContainerRef} style={{ position: 'relative', width: '100%', height: 'auto' }} />;
};
