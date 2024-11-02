import React from "react";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ProductSection.css"; // Import any CSS specific to ProductSection
import underline from "../../Image/home/underline.png";

function ProductSection({ products }) {
  return (
    <div className="product-section">
      <h2>
        Choose the right <span>product</span>
        <img src={underline} alt="underline" className="underline-image" />
      </h2>
      <p>
        lorem sapasnf ksoqwe dscnko dsllapwok sdknk aoqbzpo mnqqwe dkdnc
        kvnksdsddd dhiowbjvb ndjd hadvm
      </p>
      <Container className="trending-products">
        <Row>
          {products &&
            products.map((product) => (
              <Col
                key={product._id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-4"
              >
                <ProductCard product={product} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductSection;
