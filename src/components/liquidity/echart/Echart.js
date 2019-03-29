import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import echarts from 'echarts';

export class Echart extends Component {
  chart = {};

  componentDidMount() {
    this.renderChart();
  }

  shouldComponentUpdate(newProps) {
    if (newProps.amount === this.props.amount && newProps.width === this.props.width) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    this.chart.setOption(this.getChartOptions());
    this.chart.resize({opts: { width: this.props.width, height: this.props.width }});
  }

  componentWillUnmount() {
    this.chart.dispose();
  }

  getChartData() {
    return this.props.coins.slice(0, this.props.amount).map(coin => {
      return [
        +coin.quote.USD['market_cap'].toFixed(2),
        +coin.quote.USD['volume_24h'].toFixed(2),
        Math.abs(coin.quote.USD['percent_change_24h'].toFixed(2)),
        +coin.quote.USD['percent_change_24h'].toFixed(2),
        coin.name,
        'Coins',
      ];
    });
  }

  getChartOptions() {
    let zoom;
    switch (+this.props.amount) {
      case 50:
        zoom = 6;
      break;
      case 10:
        zoom = 100;
      break;
      default:
        zoom = 3;
      break;
    }
    return {
      backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
        {
          offset: 0,
          color: '#ffffff',
        },
        {
          offset: 1,
          color: '#f2f4f9',
        }
      ]),
      title: {
        text: 'Liquidity',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        right: 10,
        data: ['Coins'],
      },
      xAxis: {
        type: 'log',
        logBase: 10,
        axisLabel: {
          formatter: (val, index) => numeral(val).format('0a'),
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
          }
        }
      },
      yAxis: {
        type: 'log',
        logBase: 10,
        axisLabel: {
          formatter: (val, index) => numeral(val).format('0a'),
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
          }
        },
        scale: true,
      },
      dataZoom: [
        {
          type: 'slider',
          filterMode: 'filter',
          show: true,
          xAxisIndex: [0],
          start: 0,
          end: zoom,
        },
        {
          type: 'slider',
          filterMode: 'filter',
          show: true,
          yAxisIndex: [0],
          left: '93%',
          start: 0,
          end: zoom,
        },
        {
          type: 'inside',
          filterMode: 'filter',
          xAxisIndex: [0],
          start: 0,
          end: zoom,
        },
        {
          type: 'inside',
          filterMode: 'filter',
          yAxisIndex: [0],
          start: 0,
          end: zoom,
        }
      ],
      series: [
        {
          name: 'Coins',
          data: this.getChartData(),
          tooltip: {
            formatter: (params) => {
              return `${params.data[4]}:<br>
                Market cap: ${numeral(params.data[0]).format('$0,0.00')}<br>
                Volume (24h): ${numeral(params.data[1]).format('$0,0.00')}<br>
                Price change (24h): ${numeral(params.data[3] / 100).format('0,0.00%')}`;
            },
          },
          type: 'scatter',
          symbolSize: (data) => {
            let size = Math.abs(Math.ceil(data[2])) + 10;
            if (size > 100) {
              size = 100;
            }
            return size;
          },
          label: {
            emphasis: {
              show: true,
              formatter: (param) => param.data[4],
              position: 'top',
            }
          },
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: 'rgba(162, 92, 3, 0.2)',
              shadowOffsetY: 5,
              color: (data) => {
                console.log(data.data[3]);
                if(data.data[3] < 0) {
                  return '#ee0000';
                } else {
                  return '#00ff00';
                  // new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                  //   {
                  //     offset: 0,
                  //     color: 'rgb(249, 209, 10)',
                  //   },
                  //   {
                  //     offset: 1,
                  //     color: 'rgb(249, 175, 10)',
                  //   }
                  // ])
                }
              },
              // color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
              //   {
              //     offset: 0,
              //     color: 'rgb(249, 209, 10)',
              //   },
              //   {
              //     offset: 1,
              //     color: 'rgb(249, 175, 10)',
              //   }
              // ]),
            }
          }
        },
      ]
    };
  }

  renderChart() {
    this.chart = new echarts.init(this.refs.placeholder);
    this.chart.setOption(this.getChartOptions());
	}

  render() {
		return (<div style={{ width: this.props.width, height: this.props.width }} ref="placeholder"></div>);
  }
}

const mapStateToProps = (state) => {
  return {
    coins: state.coins.coins,
    amount: state.coins.amount,
  }
}

export default connect(mapStateToProps)(Echart);
