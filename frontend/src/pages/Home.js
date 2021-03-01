import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../data/products';
import Product from '../components/Product';

const Home = () => {
  return (
    <>
      <h1>Lastest products</h1>
      <Row>
        {products.map((products) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={products} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
