import React, { Component } from "react";
import Chart from "react-google-charts";
import axios from "axios";

const data = [
    ["Name", "Salary", "Full time employee"],
    ["Mike", { v: 10000, f: "$10,000" }, true],
    ["Jim", { v: 8000, f: "$8,000" }, false],
    ["Alice", { v: 12500, f: "$12,500" }, true],
    ["Bob", { v: 7000, f: "$7,000" }, true]
];
const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
    pageSize: 20
};

const URL = 'http://prg01.datacoper.com.br:40580/IntegradorProgress/rest/ExecGeral?programa=edu3.del&base=BDDesenv.properties'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {data: []}
        axios.get(URL).then(resp => {
            this.setState({...this.state, data: resp.data.registro})
        })
    }
    render() {
        return (
            <div className="container">
                <div className="my-pretty-chart-container">
                    <Chart
                        chartType="Table"
                        width="100%"
                        height="800px"
                        data={this.state.data}
                        options={options}
                    />
                </div>
            </div>
        );
    }
}