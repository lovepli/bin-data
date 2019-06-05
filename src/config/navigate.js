// 定义左侧导航

import { DEFAULT_COLORS } from '../utils/defaultColors'

const list = [
  {
    type: 'Basic',
    title: '基础',
    icon: 'ios-browsers',
    children: [
      {
        title: '基本折线图',
        name: 'v-line',
        icon: 'ios-leaf',
        api_data: {
          source: [
            { x: '1/1', y: 375 },
            { x: '1/2', y: 200 },
            { x: '1/3', y: 25 },
            { x: '1/4', y: 190 },
            { x: '1/5', y: 90 },
            { x: '1/6', y: 277 }
          ]
        },
        apis: {
          labelMap: {
            'x': '类目',
            'y': '值',
            's': '系列1'
          }
        },
        config: {
          title: {
            content: '主标题',
            textStyle: {
              color: '#ffffff',
              fontSize: 20
            }
          },
          grid: {
            left: 20,
            top: 60,
            right: 20,
            bottom: 30
          },
          legend: {
            show: true,
            textStyle: {
              color: '#ffffff',
              fontSize: 12
            },
            itemGap: 12,
            icon: '',
            position: 'top-center'
          },
          xAxis: {
            show: true,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            axisLabel: {
              color: '#ffffff',
              fontSize: 12,
              rotate: 0
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            }
          },
          yAxis: {
            show: true,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            axisLabel: {
              color: '#ffffff',
              fontSize: 12
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#fff'
              }
            }
          },
          series: {
            smooth: true,
            label: {
              normal: {
                show: false,
                color: '#fff',
                fontSize: 12
              }
            },
            areaStyle: {
              opacity: 0
            }
          },
          colors: DEFAULT_COLORS
        },
        view: { width: 500, height: 400, x: 710, y: 340 } // 710,340为中间
      }
    ]
  }
]

export default list
