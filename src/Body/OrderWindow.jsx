import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OrderWindow({ show, onHide, selectedOrder }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Order Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedOrder && (
          <Container>
            <Row>
              <Col>
                <Form.Label>OrderNo</Form.Label>
                <Form.Control type="text" value={selectedOrder.orderNo} readOnly />
              </Col>
              <Col>
                <Form.Label>Date</Form.Label>
                <Form.Control type="text" value={selectedOrder.date} readOnly />
              </Col>
              <Col>
                <Form.Label>Customer</Form.Label>
                <Form.Control type="text" value={selectedOrder.customer} readOnly />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Consignee</Form.Label>
                <Form.Control type="text" value={selectedOrder.consignee} readOnly />
              </Col>
              <Col>
                <Form.Label>TrackingNo</Form.Label>
                <Form.Control type="text" value={selectedOrder.trackingNo} readOnly />
              </Col>
              <Col>
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" value={selectedOrder.status} readOnly />
              </Col>
            </Row>
          </Container>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default OrderWindow;
