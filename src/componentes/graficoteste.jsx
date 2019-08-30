import React, { Component } from "react";
import { Chart } from "react-google-charts";

export default class Grafico extends Component {
    render() {
        return (
            <div className={"my-pretty-chart-container"}>
                <Chart
                    chartType="ScatterChart"
                    data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
                    width="100%"
                    height="400px"
                    legendToggle
                />
            </div>
        );
    }
}