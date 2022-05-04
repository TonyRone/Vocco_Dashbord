/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'

type Props = {
  className: string,
}

const TotalNumberOfNewUserMonth: React.FC<Props> = ({className}) => {
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
      <div className="card-header pt-5">
        {/* begin::Title */}
        <div className="card-title d-flex flex-column">
          {/* begin::Info */}
          <div className="d-flex align-items-center">
            {/* begin::Amount */}
            <span className="fs-2hx fw-bolder text-dark me-2 lh-1 ls-n2">10,500</span>
            {/* end::Amount */}
            {/* begin::Badge */}
            <span className="badge badge-success fs-base">
            {/* begin::Svg Icon | path: icons/duotune/arrows/arr065.svg */}
            <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
              </svg>
            </span>
            {/* end::Svg Icon */}2.2%</span>
            {/* end::Badge */}
          </div>
          {/* end::Info */}
          {/* begin::Subtitle */}
          <span className="text-gray-400 pt-1 fw-bold fs-6">New users this month</span>
          {/* end::Subtitle */}
        </div>
        {/* end::Title */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body d-flex align-items-end pt-0">
        {/* begin::Progress */}
        <div className="d-flex align-items-center flex-column mt-3 w-100">
          <div className="d-flex justify-content-between w-100 mt-auto mb-2">
            <span className="fw-boldest fs-6 text-dark">10,500 to Goal</span>
            <span className="fw-bolder fs-6 text-gray-400">21%</span>
          </div>
          <div className="h-8px mx-3 w-100 bg-light-success rounded">
            <div className="bg-success rounded h-8px" style={{width: '21%'}}></div>
          </div>
        </div>
        {/* end::Progress */}
      </div>
      {/* end::Body */}
    </div>
  )
}

const chartOptions = (): ApexOptions => {
  const chartHeight = 80;
  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-border-dashed-color');
  const baseColor = getCSSVariableValue('--bs-primary');
  const secondaryColor = getCSSVariableValue('--bs-gray-300');
  return {
    series: [{
      name: 'Sales',
      data: [30, 60, 53, 45, 60, 75, 53]
    }, ],
    chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: chartHeight,
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            borderRadius: 6
        }
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 9,
        colors: ['transparent']
    },
    xaxis: {                
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            style: {
                colors: labelColor,
                fontSize: '12px'
            }
        },
        crosshairs: {
            show: false
        }
    },
    yaxis: {
        labels: {
            show: false,
            style: {
                colors: labelColor,
                fontSize: '12px'
            }
        }
    },
    fill: {
        type: 'solid'
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
        x: {
            formatter: function (val) {
                return 'Feb: ' + val;
            }
        },
        y: {
            formatter: function (val) {
                return val + "%" 
            }
        }
    },
    colors: [baseColor, secondaryColor],
    grid: {
        padding: {
            left: 10,
            right: 10
        },
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        }             
    }
  }
}

export {TotalNumberOfNewUserMonth}
