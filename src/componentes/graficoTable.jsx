import React, { Component } from "react";
import Chart from "react-google-charts";
import axios from "axios";

const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
    pageSize: 20
};

const URL = 'http://prg01.datacoper.com.br:40580/IntegradorProgress/rest/ExecGeral'
   + '?programa=edu3.del&base=BDDesenv.properties'

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