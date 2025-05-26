import { createChart, ColorType, ISeriesApi, IChartApi } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';
import { ChartComponentProps } from '../../services/interfaces';

interface ChartDataItem {
    time: string;
    value: number | string;
}

export const ChartComponent: React.FC<ChartComponentProps> = ({
    data,
    colors: {
        backgroundColor = 'white',
        lineColor = '#2962FF',
        textColor = 'black',
        areaTopColor = '#2962FF',
        areaBottomColor = 'rgba(41, 98, 255, 0.28)',
    } = {},
}) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi>();
    const seriesRef = useRef<ISeriesApi<'Area'>>();

    useEffect(() => {
        const chartContainer = chartContainerRef.current;
        if (!chartContainer) return;

        const chart = createChart(chartContainer, {
            layout: {
                background: { type: ColorType.Solid, color: backgroundColor },
                textColor,
            },
            width: chartContainer.clientWidth,
            height: 300,
        });

        const areaSeries = chart.addAreaSeries({
            lineColor,
            topColor: areaTopColor,
            bottomColor: areaBottomColor,
        });

        seriesRef.current = areaSeries;
        chartRef.current = chart;

        chart.timeScale().fitContent();

        const formattedData = data.map(item => ({
            time: item.time,
            value: typeof item.value === 'string' ? parseFloat(item.value) : item.value,
        }));

        areaSeries.setData(formattedData);

        const handleResize = () => {
            if (chartRef.current && chartContainer) {
                chartRef.current.resize(chartContainer.clientWidth, 300);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }, [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

    return (
        <div
            ref={chartContainerRef}
            style={{
                width: '100%',
                height: '300px',
            }}
        />
    );
};
