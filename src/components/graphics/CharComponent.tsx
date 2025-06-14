import {
    createChart,
    ColorType,
    ISeriesApi,
    IChartApi,
    Time,
    AreaData,
} from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';
import { ChartComponentProps } from '../../services/interfaces';

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
    const chartRef = useRef<IChartApi | null>(null);
    const seriesRef = useRef<ISeriesApi<'Area'> | null>(null);

    useEffect(() => {
        const chartContainer = chartContainerRef.current;
        if (!chartContainer) return;

        chartRef.current = createChart(chartContainer, {
            layout: {
                background: { type: ColorType.Solid, color: backgroundColor },
                textColor,
            },
            width: chartContainer.clientWidth,
            height: 300,
        });

        seriesRef.current = chartRef.current.addAreaSeries({
            lineColor,
            topColor: areaTopColor,
            bottomColor: areaBottomColor,
        });

        // Convertimos los datos al formato correcto
        const formattedData: AreaData<Time>[] = data.map((item) => ({
            time: item.time as Time,
            value: typeof item.value === 'string' ? parseFloat(item.value) : item.value,
        }));

        seriesRef.current.setData(formattedData);
        chartRef.current.timeScale().fitContent();

        const handleResize = () => {
            if (chartContainer && chartRef.current) {
                chartRef.current.resize(chartContainer.clientWidth, 300);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chartRef.current?.remove();
            chartRef.current = null;
        };
    }, [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

    return (
        <div
            ref={chartContainerRef}
            style={{
                position: 'relative',
                width: '100%',
                height: '300px',
            }}
        />
    );
};
