import React from "react";
import { Link } from "react-router-dom";
import "./Privacy.css";
import MetaData from "../component/layouts/MataData/MataData";
import { Container } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <Container className="privacy-policy-container">
      <MetaData title={"Privacy Policy"} />
      <Container className="content-container">
        <h1>Privacy Policy</h1>
        <p>
          At Learning Needs, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and safeguard your
          personal information when you visit our website, www.learningneeds.in,
          and purchase our products.
        </p>
        <h3>Information We Collect</h3>
        <h4>Personal Information</h4>
        <p>
          When you make a purchase or register an account on our website, we may
          collect the following personal information:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Shipping and billing address</li>
          <li>Phone number</li>
          <li>
            Payment information (processed securely through our payment
            processors)
          </li>
          <li>
            Non-Personal Information We may also collect non-personal
            information about your visit to our website, including:
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages you visit on our website</li>
              <li>Time and date of your visit</li>
              <li>The referring URL</li>
            </ul>
          </li>
        </ul>
        <h2>How We Use Your Information</h2>
        <h3>Personal Information</h3>
        <h4>We use your personal information to:</h4>
        <ul>
          <li>Process and fulfill your orders</li>
          <li>
            Communicate with you about your order status and provide customer
            support
          </li>
          <li>
            Send you updates, newsletters, and promotional materials (if you
            opt-in)
          </li>
          <li>Improve our website, products, and services</li>
          <li>Non-Personal Information</li>
        </ul>
        <h2>Non-personal information is used to:</h2>
        <ul>
          <li>Analyze website traffic and usage patterns</li>
          <li>Enhance the user experience on our website</li>
          <li>Maintain and improve website security</li>
        </ul>
        <h2>Sharing Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties except as described below:
        </p>
        <h2>Service Providers:</h2>
        <span>
          We may share your information with third-party service providers who
          assist us in operating our website, conducting our business, or
          servicing you. These providers are contractually obligated to protect
          your information and use it only for the purposes we specify.
        </span>
        <h2>Legal Requirements:</h2>
        <span>
          We may disclose your information if required to do so by law or in
          response to valid requests by public authorities (e.g., a court or
          government agency).
        </span>
        <h2>Data Security:</h2>
        <span>
          We implement a variety of security measures to maintain the safety of
          your personal information. These include:
        </span>
        <ul>
          <li>
            Secure Socket Layer (SSL) technology to encrypt sensitive
            information
          </li>
          <li>Regular security audits and vulnerability assessments</li>
          <li>
            Restricted access to personal information to authorized personnel
            only Despite our efforts, no method of transmission over the
            internet or method of electronic storage is 100% secure. Therefore,
            we cannot guarantee absolute security.
          </li>
        </ul>
        <h2>Cookies</h2>
        <span>
          We use cookies to enhance your experience on our website. Cookies are
          small files that a site or its service provider transfers to your
          computer&#39;s hard drive through your web browser (if you allow) that
          enables the site&#39;s systems to recognize your browser and capture
          and remember certain information. You can choose to disable cookies
          through your browser settings, but this may affect the functionality
          of our website.
        </span>
        <h2>Third-Party Links</h2>
        <span>
          Our website may contain links to third-party websites. These websites
          have their own privacy policies, and we do not accept any
          responsibility or liability for their content or activities. We
          encourage you to review the privacy policies of these third-party
          sites.
        </span>
        <h2>Children&#39;s Privacy</h2>
        <span>
          Learning Needs does not knowingly collect personal information from
          children under the age of 13. If we become aware that we have
          inadvertently received personal information from a child under the age
          of 13, we will delete such information from our records.
        </span>
        <h2>Changes to This Privacy Policy</h2>
        <span>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date. We encourage
          you to review this Privacy Policy periodically to stay informed about
          how we are protecting your information.
        </span>
        <h3>Contact Us</h3>
        <span>
          If you have any questions about this Privacy Policy, please contact us
          at: Learning Needs Email: infolearningneeds@gmail.com Phone:
          +8240554890
        </span>
        <h2>Effective Date: 01-01-2024</h2>
      </Container>
    </Container>
  );
};

export default PrivacyPolicy;
