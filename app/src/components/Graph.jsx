import React, { Component } from "react";
import "zingchart/es6";
import ZingChart from "zingchart-react";

class Simple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        type: 'bar',
        backgroundColor: '#fff',
        borderWidth: '5px',
        borderColor: '#CDEDFD',
        width: '96%',
        height: '90%',
        x: '2%',
        y: '3%',
      title: {
        text: 'Water Usage Per Weekday by Gallons',
        marginTop: '7px',
        marginLeft: '20px',
        backgroundColor: 'none',
        fontColor: '#1B263B',
        fontFamily: 'Arial',
        fontSize: '20px',
        fontWeight: 'bold',
        shadow: false,
        textAlign: 'left'
      },
      plot: {
        tooltip: {
          padding: '5px 10px',
          backgroundColor: '#707e94',
          borderRadius: '6px',
          fontColor: '#1B263B',
          fontFamily: 'Arial',
          fontSize: '11px',
          shadow: false
        },
        animation: {
          delay: 500,
          effect: 'ANIMATION_SLIDE_BOTTOM'
        },
        barWidth: '33px',
        hoverState: {
          visible: false
        }
      },
      plotarea: {
        margin: '45px 20px 38px 45px'
      },
      scaleX: {
        values: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        guide: {
          visible: false
        },
        item: {
          paddingTop: '2px',
          fontColor: '#1B263B',
          fontFamily: 'Arial',
          fontSize: '15px'
        },
        itemsOverlap: true,
        lineColor: '#d2dae2',
        maxItems: 9999,
        offsetY: '1px',
        tick: {
          lineColor: '#d2dae2',
          visible: false
        }
      },
      scaleY: {
        values: '0:10000:500',
        guide: {
          rules: [
            {
              lineWidth: '0px',
              rule: '%i == 0'
            },
            {
              alpha: 0.4,
              lineColor: '#d2dae2',
              lineStyle: 'solid',
              lineWidth: '1px',
              rule: '%i > 0'
            }
          ]
        },
        item: {
          paddingRight: '5px',
          fontColor: '#1B263B',
          fontFamily: 'Arial',
          fontSize: '10px'
        },
        lineColor: 'none',
        maxItems: 11,
        maxTicks: 4,
        tick: {
          visible: false
        }
      },
      series: [
        {
          values: [1500, 4650, 1730, 2001, 5805, 8905, 9602, 1050], 
          styles: [
            {
              backgroundColor: '#4dbac0'
            },
            {
              backgroundColor: '#25a6f7'
            },
            {
              backgroundColor: '#ad6bae'
            },
            {
              backgroundColor: '#707d94'
            },
            {
              backgroundColor: '#f3950d'
            },
            {
              backgroundColor: '#e62163'
            },
            {
              backgroundColor: '#4e74c0'
            },
            {
              backgroundColor: '#9dc012'
            }
          ]
        }
      ]
    },
    }
  }
  render() {
    return (
      <div>
        <ZingChart ref={this.chart} data={this.state.config} />
      </div>
    );
  }
}

export default Simple;
