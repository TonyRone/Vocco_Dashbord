<<<<<<< HEAD
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef, useState} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'
import {getdevicesbymonth} from './core/_requests'
import {IdCreatedAtModel} from './core/_models'
type Props = {
  className: string,
}

const EvolutionOfDownloadsThisMonth: React.FC<Props> = ({className}) => {
  const [downloads, setDownloads] = useState<Array<IdCreatedAtModel>>([]);
  const [totalDownloads, setTotalDownloads] = useState<number>(0);
  const chartRef = useRef<HTMLDivElement | null>(null)
  
  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    if (!downloads || !downloads.length) {
      return
    }

    var date = new Date(downloads[0].createdAt);
    var pDwonloadsCountArray = [];
    var dayArray = [];
    var maxCount = 0;
    var totalDownloads = 0;
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1 , 0).getDate();
    for (var dy = 1 ; dy <= lastDay; dy++){
      let sDay = new Date(date.getFullYear(), date.getMonth() , dy);
      dayArray.push(sDay.toLocaleDateString('en-us', { month:"short", day: 'numeric'}));
      let eDay = new Date(date.getFullYear(), date.getMonth() , dy + 1);
      let count = 0;
      downloads.map((user: IdCreatedAtModel, index: number) => {
        if (new Date(user.createdAt) >= sDay && new Date(user.createdAt) < eDay){
          count++;
        }
        return true;
      });
      if (count > maxCount) maxCount = count;
      totalDownloads += count;
      pDwonloadsCountArray.push(count);
    }
    setTotalDownloads(totalDownloads);
    const chart = new ApexCharts(
      chartRef.current,
      chartOptions(pDwonloadsCountArray, dayArray, maxCount)
    )
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef, downloads])

  useEffect(() =>{
    const fetchData = async () => {
      const {data: res} = await getdevicesbymonth();
      setDownloads(res.devices);
    }
  
    fetchData()
      .catch(console.error);

  }, [])

  return (
    <div className={`card ${className}`}>
      <div className="card-header py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark">Evolution of the downloads this month</span>
        </h3>
      </div>
      <div className="card-body d-flex justify-content-between flex-column pb-1 px-0">
        <div className="px-9 mb-5">
          <div className="d-flex align-items-center mb-2">
            <span className="fs-2hx fw-bolder text-gray-800 me-2 lh-1 ls-n2">{totalDownloads}</span>
            <span className="badge badge-success fs-base">
            <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
              </svg>
            </span>
            4.5%</span>
          </div>
        </div>
        <div
          id='chartContainer'
          className='min-h-auto ps-4 pe-6'
          ref={chartRef}
        ></div>
      </div>
    </div>
  )
}

const chartOptions = (cArray: Array<number>, dArray: Array<string>, max: number): ApexOptions => {
  const chartHeight = 350;
  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-border-dashed-color');
  const baseColor = getCSSVariableValue('--bs-primary');
  const lightColor = getCSSVariableValue('--bs-primary');
  return {
    series: [{
      name: 'Downloads',
      data: cArray
    }],
    chart: {
        fontFamily: 'inherit',
        type: 'area',
        height: chartHeight,
        toolbar: {
            show: false
        }
    },
    plotOptions: {

    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0,
            stops: [0, 80, 100]
        }
    },
    stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [baseColor]
    },
    xaxis: {
        categories: dArray,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        tickAmount: 6,
        labels: {
            rotate: 0,
            rotateAlways: true,
            style: {
                colors: labelColor,
                fontSize: '12px'
            }
        },
        crosshairs: {
            position: 'front',
            stroke: {
                color: baseColor,
                width: 1,
                dashArray: 3
            }
        },
        tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
                fontSize: '12px'
            }
        }
    },
    yaxis: {
        max: max * 4,
        min: 0,
        tickAmount: 4,
        labels: {
            style: {
                colors: labelColor,
                fontSize: '12px'
            },
            formatter: function (val) {
              return '' + val
            }
        }
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 0
            }
        }
    },
    tooltip: {
        style: {
            fontSize: '12px'
        },
        y: {
            formatter: function (val) {
              return '' + val
            }
        }
    },
    colors: [lightColor],
    grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        }
    },
    markers: {
        strokeWidth: 3
    }
  }
}

export {EvolutionOfDownloadsThisMonth}
=======
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'

type Props = {
  className: string,
}

const EvolutionOfDownloadsThisMonth: React.FC<Props> = ({className}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  
  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(
      chartRef.current,
      chartOptions()
    )
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header py-5">
        {/* begin::Title */}
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark">Evolution of the downloads this month</span>
        </h3>
        {/* end::Title */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body d-flex justify-content-between flex-column pb-1 px-0">
        {/* begin::Info */}
        <div className="px-9 mb-5">
          {/* begin::Statistics */}
          <div className="d-flex align-items-center mb-2">
            {/* begin::Value */}
            <span className="fs-2hx fw-bolder text-gray-800 me-2 lh-1 ls-n2">37,060</span>
            {/* end::Value */}
            {/* begin::Label */}
            <span className="badge badge-success fs-base">
            {/* begin::Svg Icon | path: icons/duotune/arrows/arr065.svg */}
            <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
              </svg>
            </span>
            {/* end::Svg Icon */}4.5%</span>
            {/* end::Label */}
          </div>
          {/* end::Statistics */}
          {/* begin::Description */}
          <span className="fs-6 fw-bold text-gray-400">Total Discounted Sales This Month</span>
          {/* end::Description */}
        </div>
        {/* end::Info */}
        {/* begin::Chart */}
        <div
          id='chartContainer'
          className='min-h-auto ps-4 pe-6'
          ref={chartRef}
        ></div>
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  )
}

const chartOptions = (): ApexOptions => {
  const chartHeight = 350;
  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-border-dashed-color');
  const baseColor = getCSSVariableValue('--bs-primary');
  const lightColor = getCSSVariableValue('--bs-primary');
  return {
    series: [{
      name: 'Downloads',
      data: [125, 1250, 2541, 862, 2251, 125, 325, 225, 445, 1254, 445, 332, 229, 249, 159, 35, 459, 2236, 1260]
    }],
    chart: {
        fontFamily: 'inherit',
        type: 'area',
        height: chartHeight,
        toolbar: {
            show: false
        }
    },
    plotOptions: {

    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0,
            stops: [0, 80, 100]
        }
    },
    stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [baseColor]
    },
    xaxis: {
        categories: ['', 'May 02', 'May 03', 'May 04', 'May 05', 'May 06', 'May 07', 'May 08', 'May 09', 'May 10', 'May 11', 'May 12', 'May 13', 'May 14', 'May 17', 'May 18', 'May 19', 'May 21', ''],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        tickAmount: 8,
        labels: {
            rotate: 0,
            rotateAlways: true,
            style: {
                colors: labelColor,
                fontSize: '12px'
            }
        },
        crosshairs: {
            position: 'front',
            stroke: {
                color: baseColor,
                width: 1,
                dashArray: 3
            }
        },
        tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
                fontSize: '12px'
            }
        }
    },
    yaxis: {
        max: 3000,
        min: 0,
        tickAmount: 6,
        labels: {
            style: {
                colors: labelColor,
                fontSize: '12px'
            },
            formatter: function (val) {
              return '' + val
            }
        }
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 0
            }
        }
    },
    tooltip: {
        style: {
            fontSize: '12px'
        },
        y: {
            formatter: function (val) {
              return '' + val
            }
        }
    },
    colors: [lightColor],
    grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        }
    },
    markers: {
        strokeWidth: 3
    }
  }
}

export {EvolutionOfDownloadsThisMonth}
>>>>>>> 7efb2ae9bfd5ff75ec627c17f0cf3af148a7c714
