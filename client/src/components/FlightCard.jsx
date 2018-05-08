import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Card} from 'antd'
import moment from 'moment'

const FlightCard = ({flight}) => (
    <Card>
        <Row>
            <Col span={12}>
                Откуда: {flight.direction.from}
            </Col>
            <Col span={12}>
                Куда: {flight.direction.to}
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                Время вылета: {moment(flight.departure).format('DD/MM/YYYY, HH:mm:ss')}
            </Col>
            <Col span={12}>
                Время прилета: {moment(flight.arrival).format('DD/MM/YYYY, HH:mm:ss')}
            </Col>
        </Row>
        <Row>
            Авиакомпания: {flight.carrier}
        </Row>
    </Card>
   );
   
export default FlightCard;



