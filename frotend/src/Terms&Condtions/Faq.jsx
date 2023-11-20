import * as React from "react";
import "./Faq.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
export default function Faq() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="FAq_image">
      {/* 1,2 */}
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            1.
          </Typography>{" "}
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            What type of training and workshops do you provide?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            We are diversified in all training areas. It depends on what you are
            exactly looking for. We do customized training for corporates and
            schools according to the need of our client.
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            2.
          </Typography>{" "}
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            Where and how do you deliver your training and workshop?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">We deliver onsite training and in person.</p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      {/* 3,4 */}
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            3.
          </Typography>{" "}
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            Who can attend the training and workshop?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            Anyone who is willing to transform from good to better.
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            4.
          </Typography>{" "}
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            What are the topics covered in training and workshop?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            Every individual and organizations have different challenges, so we
            do need analysis and prepare module according to their need.
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      {/* 5,6 */}
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            5.
          </Typography>{" "}
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            What is the cost involved during training and workshop? type of
            training and workshops do you provide?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            Well! That is a good news, even if we deliver customized program, we
            are very much competitive to market and work in your budget range.
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            6.
          </Typography>{" "}
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            Who can open a school?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            Anyone who is willing to join education industry to contribute
            something good to society
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      {/* 7,8 */}
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            7.
          </Typography>{" "}
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            Why choose Learning Needs?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            We don't give franchisee rather we help you to build your own school
            without any franchisee fee and royalty. Our expertise and experience
            has helped many people in establishing their own Pre-schools and
            High School.
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            8.
          </Typography>{" "}
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            How much area is required for opening a school?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            It's totally depended on your school model - Primary, Middle, or
            High School. Generally to open a Pre-schools you should have minimum
            2000 to 25000 square feet space , for Primary school it's suggested
            5000 to 6000 square feet, and for High School according to the
            government affiliation norms.
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      {/* 9,10 */}
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            9.
          </Typography>{" "}
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            What is the investment to open a school?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            Again it depends upon the school model and geographical location for
            Pre School 10 to 15 Lac, Primary School it's 20 to 25 Lac and for
            High School it's depends upon construction and school size.
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            10.
          </Typography>{" "}
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            How you will help in curriculum?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            We don't sell books. Yes, we provide curriculum and syllabus along
            with its implementation and teachers training.
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      {/* 11,12 */}
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            11.
          </Typography>{" "}
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            Benefits of choosing Learning Needs for our School ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            With our domain expertise and justified fee, your school will rise
            from any level.
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            12.
          </Typography>{" "}
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            Benefits for existing school?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            We provide total transformation in all the areas like Teachers
            Training, Marketing Training, Admission, Operational Plan,
            Advertisement and Marketing Plan, Expansion Plan, Branding and many
            more.
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      {/* 13,14 */}
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            13.
          </Typography>{" "}
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            What is your consultancy fee?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            Discuss financials according to the project model.
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            14.
          </Typography>
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            What products you sell on Learning Needs Site?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            We sell world class selected books, exclusive work sheets along with
            our Learning Needs exclusive product range which is not available
            anywhere in market or online. Our products give every individual
            chance to enhance their skills.
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      {/* 15,16 */}
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            15.
          </Typography>
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            When will you ship my order?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            Your order will be shipped within 24-48 hours after receipt of
            payment. You will be informed if for any reason the order is
            delayed. Please note that weekends and holidays are not counted as
            business days.
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            16.
          </Typography>
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            Which carrier do you use to ship orders to your customers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            Orders are shipped via Fedex, DTDC, Speed Post. There are multiple
            choices available in terms of courier service and speed post for
            delivery options that are most convenient to you.
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      {/* 17,18 */}
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            17.
          </Typography>
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            Will you email me the corresponding package tracking number?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            Yes, you will receive the tracking # after your order is shipped.
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            18.
          </Typography>
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            What are my payment options?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            For the convenience of our customers, we have established
            multi-options • Payment policy; which gives you the flexibility to
            make a payment • We Accept all major credit cards such as, Visa,
            Master Card, American Express, • Payment gateway, PayPal
          </p>
        </AccordionDetails>
      </Accordion>
      &nbsp;
      {/* 19 */}
      <Accordion sx={{ border: "1px solid #E8E2E2", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",

              color: "#FF6D28",
            }}
          >
            19.
          </Typography>
          &nbsp;
          <Typography
            style={{
              color: "#3AB0FF",
              fontFamily: "'Poppins', sans-serif",

              fontWeight: 600,
            }}
          >
            What is your return/Refund policy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="desc_body">
          <p className="Faq_desc">
            We want you to be completely satisfied with your purchase. Hence, we
            offer 30 days risk free full refund/replacement facility, in other
            words you have 30 days privilege to examine the product and if for
            any reason, you are not satisfied, a full refund of the merchandise
            minus the shipping charges will be made to you, there will be no
            questions asked or any lengthy procedure be followed. Customers have
            30 days to return an item. Items on sale or special offers can be
            returned only for exchange. After 30 days of your purchase, you can
            return an item for replacement or exchange within 60 days of the
            original date on the invoice.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
