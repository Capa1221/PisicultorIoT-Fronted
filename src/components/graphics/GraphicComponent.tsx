import { createChart, ColorType, ISeriesApi, IChartApi, MouseEventParams, Time, AreaData, WhitespaceData } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

interface ChartComponentProps {
    data: { time: string; value: number }[];
    colors?: {
        backgroundColor?: string;
        lineColor?: string;
        textColor?: string;
        areaTopColor?: string;
        areaBottomColor?: string;
    };
}

export const GraphicComponent: React.FC<ChartComponentProps> = (props) => {
    const {
        data,
        colors: {
            backgroundColor = 'white',
            lineColor = '#2962FF',
            textColor = 'black',
            areaTopColor = '#2962FF',
            areaBottomColor = 'rgba(41, 98, 255, 0.28)',
        } = {},
    } = props;

    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);
    const areaSeriesRef = useRef<ISeriesApi<'Area'> | null>(null);
    const legendRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (chartContainerRef.current) {
                chartRef.current?.applyOptions({ width: chartContainerRef.current.clientWidth });
            }
        };

        if (chartContainerRef.current) {
            chartRef.current = createChart(chartContainerRef.current, {
                layout: {
                    background: { type: ColorType.Solid, color: backgroundColor },
                    textColor,
                },
                rightPriceScale: {
                    scaleMargins: {
                        top: 0.4,
                        bottom: 0.15,
                    },
                },
                crosshair: {
                    horzLine: {
                        visible: false,
                        labelVisible: false,
                    },
                },
                grid: {
                    vertLines: {
                        visible: false,
                    },
                    horzLines: {
                        visible: false,
                    },
                },
                width: chartContainerRef.current.clientWidth,
                height: 300,
            });

            areaSeriesRef.current = chartRef.current.addAreaSeries({
                lineColor,
                topColor: areaTopColor,
                bottomColor: areaBottomColor,
                lineWidth: 2,
                crosshairMarkerVisible: false,
            });
            areaSeriesRef.current.setData(data);

            const legend = document.createElement('div');
            legend.style.position = 'absolute';
            legend.style.left = '12px';
            legend.style.top = '12px';
            legend.style.zIndex = '1';
            legend.style.fontSize = '14px';
            legend.style.fontFamily = 'sans-serif';
            legend.style.lineHeight = '18px';
            legend.style.fontWeight = '300';
            legend.style.color = textColor;
            chartContainerRef.current.appendChild(legend);
            legendRef.current = legend;

            const getLastBar = (series: ISeriesApi<'Area'>) => {
                const lastIndex = series.dataByIndex(Number.MAX_SAFE_INTEGER - 1);
                return lastIndex;
            };

            const formatPrice = (price: number) => (Math.round(price * 100) / 100).toFixed(2);

            const setTooltipHtml = (name: string, date: string, price: string) => {
                if (legendRef.current) {
                    legendRef.current.innerHTML = `<div style="font-size: 24px; margin: 4px 0px;">${name}</div><div style="font-size: 22px; margin: 4px 0px;">${price}</div><div>${date}</div>`;
                }
            };

            const updateLegend = (param: MouseEventParams<Time> | null) => {
                if (!areaSeriesRef.current) return;

                const validCrosshairPoint = param && param.time !== undefined && param.point && param.point.x >= 0 && param.point.y >= 0;
                const bar = validCrosshairPoint ? param.seriesData.get(areaSeriesRef.current) as AreaData<Time> | WhitespaceData<Time> | undefined : getLastBar(areaSeriesRef.current);

                if (!bar) return;

                if ('value' in bar) {
                    const time = bar.time;
                    const price = bar.value !== undefined ? bar.value : (bar as any).close;
                    const formattedPrice = formatPrice(price);
                    setTooltipHtml('VALOR DATO', time as unknown as string, formattedPrice);
                }
            };

            chartRef.current.subscribeCrosshairMove(updateLegend);

            chartRef.current.timeScale().fitContent();

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                chartRef.current?.remove();
                chartRef.current = null;
            };
        }
    }, [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

    return <div ref={chartContainerRef} style={{ position: 'relative', width: '100%', height: '500px' }} />;
};
