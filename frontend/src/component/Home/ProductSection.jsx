import React from "react";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ProductSection.css"; // Import any CSS specific to ProductSection

import { motion } from "framer-motion";
import { fadeIn } from "../../../src/varients";
import HeaderWithUnderline from "../UnderLineAnimation/HeaderWithUnderline";
function ProductSection({ products }) {
  return (
    <motion.div
      className="product-section"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
    >
      <header>
        <HeaderWithUnderline
          sentence="Choose the right product"
          highlightedWord="product"
        />

        <p className="product-description">
          Our product ensures you get the best quality, performance, and value,
          so you are investing in both reliability and innovation.
        </p>
      </header>

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
    </motion.div>
  );
}

export default ProductSection;
