import React from "react";
import "./TermsAndCondtion.css";
import MetaData from "../component/layouts/MataData/MataData";

import AOS from "aos";
import "aos/dist/aos.css";
const TermsAndConditionsPage = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="terms-container" style={{ backgroundColor: "white" }}>
      <MetaData title="Terms and Conditions" />
      <div
        className="content-container"
        style={{ marginTop: "130px", backgroundColor: "white" }}
      >
        <h1>Terms and Conditions</h1>
        <p>
          Welcome to Learning Needs. These terms and conditions outline the
          rules and regulations for the use of Learning Needs&#39;s website,
          located at www.Learning Needs.in
        </p>
        <p>
          By accessing this website, we assume you accept these terms and
          conditions. Do not continue to use Learning Needs if you do not agree
          to take all the terms and conditions stated on this page.
        </p>
        <h3>Terminology</h3>
        <span>
          The following terminology applies to these Terms and Conditions,
          Privacy Statement, Disclaimer Notice, and all Agreements:
        </span>
        <span>
          &quot;Client&quot;, &quot;You&quot;, and &quot;Your&quot; refers to
          you, the person logging on this website and compliant with the
          Company’s terms and conditions. &quot;The Company&quot;,
          &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot;, and
          &quot;Us&quot;, refers to our Company, Learning Needs.
          &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to
          both the Client and ourselves. Use of the Website By accessing our
          website, you warrant and represent that you are at least 18 years of
          age or are accessing the website under the supervision of a parent or
          guardian. We grant you a limited, revocable, and non-exclusive license
          to access and use the website for personal use only. You agree not to
          use the website for any commercial purpose or any illegal or
          unauthorized activity.
        </span>
        <h3>Products and Services</h3>
        <span>
          Learning Needs offers a variety of educational products including
          books, story books, activity books, work books, Pdf Worksheets, busy
          books, and other educational resources designed to spark creativity
          and encourage exploration in children. All products are subject to
          availability, and we reserve the right to limit the quantity of any
          products or services that we offer.
        </span>
        <h3>Pricing and Payment</h3>
        <span>
          All prices listed on Learning Needs are in Rupees and are subject to
          change without notice. We make every effort to ensure the accuracy of
          pricing, but errors may occur. In the event of a pricing error, we
          reserve the right to cancel any orders placed at the incorrect price.
          Payment must be made at the time of purchase, and we accept various
          payment methods as indicated on our website.
        </span>
        <h3>Shipping and Delivery</h3>
        <span>
          We aim to dispatch all orders within 3 to 5 business days of receiving
          your order. Delivery times may vary depending on your location and the
          shipping method selected. Learning Needs is not responsible for any
          delays caused by the shipping carrier. All shipping and handling
          charges are the responsibility of the customer and will be calculated
          at checkout. This policy applies exclusively to physical products. Any
          digital products will be delivered via email or will be downloaded
          automatically within 30 minutes of ordering.
        </span>
        <h3>Returns and Refunds</h3>
        <span>
          We want you to be satisfied with your purchase. We do not refund and
          return on digital product like PDF downloads at any cost what may be
          the reason is. For books and other products If for any reason you have
          received defective or incorrect product, you need inform us in writing
          with product picture and explanation within [24] hours of receipt for
          a refund or exchange, subject to our return policy. Items must be
          returned in their original condition, unused and in their original
          packaging.
        </span>
        <h3>Intellectual Property</h3>
        <span>
          All content on this website, including but not limited to text,
          graphics, logos, images, and software, is the property of Learning
          Needs or its content suppliers and is protected by laws. You may not
          use, reproduce, distribute, or create derivative works of such content
          without our prior written consent.
        </span>
        <h3>Limitation of Liability</h3>
        <span>
          Learning Needs shall not be liable for any direct, indirect,
          incidental, special, or consequential damages resulting from the use
          or inability to use our products or services, or from any errors or
          omissions in the content of our website.
        </span>
        <h3>Changes to Terms and Conditions</h3>
        <span>
          We reserve the right to make changes to these terms and conditions at
          any time. Any changes will be posted on this page, and it is your
          responsibility to review these terms regularly to ensure you are aware
          of any updates.
        </span>
        <h3>Governing Law</h3>
        <span>
          These terms and conditions are governed by and construed in accordance
          with the laws of West Bengal, and you irrevocably submit to the
          exclusive jurisdiction of the courts in that location.
        </span>
        <h3>Contact Us</h3>
        <span>
          If you have any questions about these terms and conditions, please
          contact us at: Learning Needs Email: infolearningneeds@gmail.com
          Phone: 8240554890
        </span>
        <h2>Effective Date: 01-01-2024</h2>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
