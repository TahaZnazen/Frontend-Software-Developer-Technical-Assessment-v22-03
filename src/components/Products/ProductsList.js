import { chunk } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Product from './Product';

const ProductList = ({ products, onDelete }) => {
  const productsGroups = chunk(products, 3)

  return (
    <Container>
      {productsGroups.map((productsGroup, index) => (
        <Row key={index} className="mb-5">
          {productsGroup.map(product => (
            <Col sm="4" key={product.id} >
              <Product product={product} onDelete={onDelete} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductList;
