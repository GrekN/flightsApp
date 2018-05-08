import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Select, Layout, Col } from 'antd';

import { fetchFlights } from "../actions"
import FlightCard from "./FlightCard.jsx"
import './Flights.css'

const { Option } = Select;
const { Content } = Layout;

export class Flights extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carrier: 'all'
        }
    }

    componentDidMount() {
        this.props.getFlights();
    }

    setFilter(value) {
        this.setState({
            carrier: value
        })
    }

    getFilter() {
        const { 
            flights
        } = this.props

        const carriers = [...new Set(flights.map((flight) => flight.carrier))]

        let selectOptions = carriers.map((option, index) => <Option value={option} key={index}>{option}</Option>)       
        const allCarriersOption = <Option value="all" key ={selectOptions.length}>Все авиакомпании</Option>
        selectOptions.push(allCarriersOption)

        let filter = <Select 
                        className='filter' 
                        onChange={this.setFilter.bind(this)} 
                        value={this.state.carrier}
                    >
                        {selectOptions}
                    </Select>
        return filter
    }

    getFlights() {
        const { 
            flights
        } = this.props

        const flightsToRender = flights
            .filter((flight) => this.state.carrier === 'all' || flight.carrier === this.state.carrier)
            .map((flight) => <FlightCard flight={flight} key={flight.id}/>)

        return flightsToRender
    }

    render() {
        return (
            <Layout className='layout'>
                <Content>
                    <Col span={8}>
                        {this.getFilter()}
                        {this.getFlights()}
                    </Col>
                </Content>
            </Layout>
        )
    }
}


export default connect(
    state => ({
        flights: state.flights
    }),
    dispatch => ({
        getFlights: () => {
            dispatch(fetchFlights())
        }
    })
)(Flights);
