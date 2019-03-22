import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import Taucharts from 'taucharts';
import tooltip from 'taucharts/dist/plugins/tooltip';
import legend from 'taucharts/dist/plugins/legend';
import 'taucharts/dist/plugins/tooltip.css';
import 'taucharts/dist/plugins/legend.css';
// imports for generated colors
// import tauBrewer from 'taucharts/dist/plugins/color-brewer';
// import 'taucharts/dist/colorbrewer.css';

import styles from './Chart.module.css';

export class Chart extends Component {
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
    this.chart.destroy();
    this.renderChart();
  }

  componentWillUnmount() {
		this.chart.destroy();
  }

  chartOptions = {
    guide: {
      x: { label: 'Market Capitalization' },
      y: { label: 'Volume' },
      padding: { b: 40, l: 40, t: 10, r: 10 },
      color:{ brewer: [styles.dot] },
    },
    type: 'scatterplot',
    x: 'marketCap',
    y: 'volume',
    size: 'graphPriceChange',
    // generated colors - looks ugly
    // color: 'name',
    // guide: { color: { brewer: tauBrewer('YlGnBu', 9) }},
    plugins: [
      tooltip({
        fields: ['name', 'marketCap', 'volume', 'priceChange'],
        formatters: {
          name: {
            label: 'Name',
          },
          marketCap: {
            label: "Market cap",
            format: n => numeral(n).format('$0,0.00'),
          },
          volume: {
            label: "Volume (24h)",
            format: n => numeral(n).format('$0,0.00'),
          },
          priceChange: {
            label: "Price change (24h)",
            format: n => numeral(n / 100).format('0,0.00%'),
          },
        }
      }),
      legend(),
    ],
  };

  getChartData() {
    return this.props.coins.slice(0, this.props.amount).map(coin => {
      return {
        name: coin.name,
        marketCap: +coin.quote.USD['market_cap'].toFixed(2),
        volume: +coin.quote.USD['volume_24h'].toFixed(2),
        priceChange: +coin.quote.USD['percent_change_24h'].toFixed(2),
        graphPriceChange: Math.abs(coin.quote.USD['percent_change_24h'].toFixed(2)),
      };
    });
  }

  renderChart() {
		this.chart = new Taucharts.Chart(
			Object.assign({}, this.chartOptions, { data: this.getChartData() })
    );
		this.chart.renderTo(this.refs.placeholder, { width: this.props.width, height: this.props.width });
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

export default connect(mapStateToProps)(Chart);
