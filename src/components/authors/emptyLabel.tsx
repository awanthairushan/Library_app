import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';

const EmptyLabel: React.FC = () => {
  return (
    <Row>
        <Col xs={12} className="empty-label">
            <p >no authors listed here</p>
        </Col>
    </Row>
);
} 

export default EmptyLabel;