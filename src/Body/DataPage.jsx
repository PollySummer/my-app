import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function DataPage({ shipmentData }) {
    // Check if shipmentData is defined and is an array
    if (!Array.isArray(shipmentData)) {
        return <div>No shipment data available.</div>;
    }

    const data = shipmentData.map((item, index) => ({
        consignee: item.consignee,
        customer: item.customer,
        date: item.date,
        orderNo: item.orderNo,
        status: item.status,
        trackingNo: item.trackingNo,
        // You can add more properties here if needed
    }));

    return (
        <Container>
            <h3 className='m-5'>SHIPMENT DETAILS</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>orderNo</th>
                        <th>date</th>
                        <th>customer</th>
                        <th>consignee</th>
                        <th>trackingNo</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ consignee, customer, date, orderNo, status, trackingNo }, index) => (
                        <tr key={index}>
                            <td>{orderNo}</td>
                            <td>{date}</td>
                            <td>{customer}</td>
                            <td>{consignee}</td>
                            <td>{trackingNo}</td>
                            <td>{status}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default DataPage;
