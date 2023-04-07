import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const areaChartOptions = {
    chart: {
        height: 340,
        type: 'line',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 1.5
    },
    grid: {
        strokeDashArray: 4
    },
    xaxis: {
        type: 'datetime',
        categories: [
            '2018-05-19T00:00:00.000Z',
            '2018-06-19T00:00:00.000Z',
            '2018-07-19T01:30:00.000Z',
            '2018-08-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-10-19T04:30:00.000Z',
            '2018-11-19T05:30:00.000Z',
            '2018-12-19T06:30:00.000Z'
        ],
        labels: {
            format: 'MMM'
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        show: false
    },
    tooltip: {
        x: {
            format: 'MM'
        }
    }
};

// ==============================|| REPORT AREA CHART ||============================== //

const ReportAreaChart = () => {
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;

    /*const [options, setOptions] = useState(areaChartOptions);

    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: [theme.palette.warning.main],
            xaxis: {
                labels: {
                    style: {
                        colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary, secondary]
                    }
                }
            },
            grid: {
                borderColor: line
            },
            tooltip: {
                theme: 'light'
            },
            legend: {
                labels: {
                    colors: 'grey.500'
                }
            }

            
    
        }));
    }, [primary, secondary, line, theme]);

    const [series] = useState([
        {
            name: 'Series 1',
            data: [58, 115, 28, 83, 63, 75, 35, 55]
        }
    ]);*/
    const options = {
        labels: ['Paso 1', 'Paso 2', 'Paso 3'],
        legend: {
            show: true,
            showForSingleSeries: false,
            showForNullSeries: true,
            showForZeroSeries: true,

            horizontalAlign: 'center',
            floating: false,
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial',
            width: undefined,
            height: undefined,
            formatter: undefined,
            offsetX: 0,
            offsetY: 0,
            labels: {
                colors: undefined,
                useSeriesColors: false
            },
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: '#fff',
                radius: 12,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            },

            onItemClick: {
                toggleDataSeries: true
            },
            onItemHover: {
                highlightDataSeries: true
            }
        },
        plotOptions: {
            radialBar: {
                size: undefined,
                inverseOrder: false,
                startAngle: 0,
                endAngle: 275,
                offsetX: 0,
                offsetY: 0,
                hollow: {
                    margin: 5,
                    size: '50%',
                    background: 'transparent',
                    image: undefined,
                    imageWidth: 150,
                    imageHeight: 150,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    imageClipped: true,
                    position: 'front',
                    dropShadow: {
                        enabled: false,
                        top: 0,
                        left: 0,
                        blur: 3,
                        opacity: 0.5
                    }
                },
                track: {
                    show: true,
                    startAngle: undefined,
                    endAngle: undefined,
                    background: '#f2f2f2',
                    strokeWidth: '97%',
                    opacity: 1,
                    margin: 5,
                    dropShadow: {
                        enabled: false,
                        top: 0,
                        left: 0,
                        blur: 3,
                        opacity: 0.5
                    }
                },
                dataLabels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '22px',
                        fontFamily: undefined,
                        color: undefined,
                        offsetY: -10
                    },
                    value: {
                        show: true,
                        fontSize: '16px',
                        fontFamily: undefined,
                        color: undefined,
                        offsetY: 16,
                        formatter: function (val) {
                            return val + '%';
                        }
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        color: '#373d3f',
                        formatter: function (w) {
                            return (
                                Math.round(
                                    w.globals.seriesTotals.reduce((a, b) => {
                                        return a + b;
                                    }, 0) / w.globals.series.length
                                ) + '%'
                            );
                        }
                    }
                }
            }
        }
    };
    const series = [100, 90.5, 100];

    return <ReactApexChart options={options} series={series} type="radialBar" height={345} />;
};

export default ReportAreaChart;
