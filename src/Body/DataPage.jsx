import { useSelector, useDispatch } from 'react-redux';
import { setSelectedOrder, setShowModal, setHiddenRows } from '../services/stateServices';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import OrderWindow from './OrderWindow';

function DataPage() {
    const selectedOrder = useSelector((state) => state.selectedOrder);
    const shipmentData = useSelector((state) => state.shipmentData);
    const showModal = useSelector((state) => state.showModal);
    const hiddenRows = useSelector((state) => state.hiddenRows);
    const dispatch = useDispatch();


    const toggleRowVisibility = (index) => {
        if (hiddenRows.includes(index)) {
            dispatch(setHiddenRows(hiddenRows.filter((rowIndex) => rowIndex !== index)));
        } else {
            dispatch(setHiddenRows([...hiddenRows, index]));
        }
    };

    if (!Array.isArray(shipmentData)) {
        return <div>No shipment data available.</div>;
    }

    const data = shipmentData.map((item) => ({
        consignee: item.consignee,
        customer: item.customer,
        date: item.date,
        orderNo: item.orderNo,
        status: item.status,
        trackingNo: item.trackingNo,
    }));

    const handleInfoClick = (order) => {
        dispatch(setSelectedOrder(order));
        dispatch(setShowModal(true));
    };

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
                        <th>_</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((order, index) => (
                        hiddenRows.includes(index) ? null : (
                            <tr key={index}>
                                <td>{order.orderNo}</td>
                                <td>{order.date}</td>
                                <td>{order.customer}</td>
                                <td>{order.consignee}</td>
                                <td>{order.trackingNo}</td>
                                <td>{order.status}</td>
                                <td>
                                    <div className='ms-3'>
                                        <Button variant="info" onClick={() => handleInfoClick(order)}>&#8520;</Button>
                                        <Button variant="danger" onClick={() => toggleRowVisibility(index)}>X</Button>
                                    </div>
                                </td>
                            </tr>
                        )
                    ))}
                </tbody>
            </Table>

            <OrderWindow show={showModal} onHide={() => dispatch(setShowModal(false))} selectedOrder={selectedOrder} />
        </Container>
    );
}

export default DataPage;
