import React, { Component } from "react";
import Chart from "react-google-charts";
import axios from "axios";

const URL = 'http://prg01.datacoper.com.br:40580/IntegradorProgress/rest/ExecGeral'
    + '?programa=edu2.del&base=BDBomJesusDesenv.properties'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = { data: [] }
        axios.get(URL).then(resp => {
            let data = []
            data.push(resp.data.registro[0])
            Array.prototype.push.apply(data,
                resp.data.registro.slice(1).map(arr => {
                    let dataMes = new Date(arr[0].ano, arr[0].mes - 1)
                    console.log(dataMes)
                    return [dataMes, arr[1]]
                })
            )
            this.setState({ ...this.state, data })
        })
    }
    render() {
        return (
            <div className="container">
                <div className="my-pretty-chart-container">
                    <Chart
                        width={'600px'}
                        height={'400px'}
                        chartType="Line"
                        loader={<div>Loading Chart</div>}
                        data={this.state.data}
                        options={{
                            chart: {
                                title: 'Entrega de Produtos Agrícolas 2019',
                                subtitle: 'Em kgs',
                            },
                            hAxis: {
                                title: 'Time',
                            },
                            vAxis: {
                                title: 'Popularity',
                            },
                        }}
                        rootProps={{ 'data-testid': '3' }}
                    />
                </div>
            </div>
        );
    }
}