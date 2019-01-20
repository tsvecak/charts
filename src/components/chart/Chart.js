import React from 'react'

import './chart.scss';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


const Chart = props => {
    const options = {
        title: {
            text: 'Rapid chart'
        },
        xAxis: {
            categories: [...props.data.labels],
            tickmarkPlacement: 'on',
            startOnTick: true,
            endOnTick: true,
        },
        series: [
            {
                name: 'CHS',
                data: [...props.data.series[0]]
            },
            {
                name: 'FHR',
                data: [...props.data.series[1]]
            },
            {
                name: 'SIM',
                data: [...props.data.series[2]]
            },
        ],
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 0,
                point: {
                    events: {
                        mouseOver: function () {
                            var chart = this.series.chart;
                            if (!chart.lbl) {
                                chart.lbl = chart.renderer.label('')
                                    .attr({
                                        padding: 10,
                                        l: 150,
                                        fill: Highcharts.getOptions().colors[1]
                                    })
                                    .css({
                                        color: '#FFFFFF',
                                    })
                                    .add();
                            }
                            chart.lbl
                                .show()
                                .attr({
                                    text: this.category + ' = ' + this.y
                                });
                        }
                    }
                },
                events: {
                    mouseOut: function () {
                        if (this.chart.lbl) {
                            this.chart.lbl.hide();
                        }
                    }
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    }
    return (
        <div className="wrap chart">
        
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
            
        </div>
    )
}

export default Chart;
