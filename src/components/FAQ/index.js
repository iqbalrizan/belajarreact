import React, { useState } from "react";
import { UncontrolledAccordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import "./style.css";
function FAQ() {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <section class="faq" id="faq">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-12">
            <div class="faq-head">
              <h1>Frequently Asked Question</h1>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
            </div>
          </div>
          <div class="col-lg-7 col-md-12">
            <div className="acc">
              <UncontrolledAccordion defaultOpen="1">
                <AccordionItem className="accordion">
                  <AccordionHeader targetId="1">
                    <p>Apa saja syarat yang dibutuhkan?</p>
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    <strong>
                      <p>Apa saja syarat yang dibutuhkan?</p>
                    </strong>
                    You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="accordion">
                  <AccordionHeader targetId="2">
                    <p>Berapa hari minimal sewa mobil lepas kunci?</p>
                  </AccordionHeader>
                  <AccordionBody accordionId="2">
                    <strong>This is the second item's accordion body.</strong>
                    You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="accordion">
                  <AccordionHeader targetId="3">
                    <p>Berapa hari sebelumnya sabaiknya booking sewa mobil?</p>
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    <strong>This is the third item's accordion body.</strong>
                    You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="accordion">
                  <AccordionHeader targetId="4">
                    <p>Apakah Ada biaya antar-jemput?</p>
                  </AccordionHeader>
                  <AccordionBody accordionId="4">
                    <strong>This is the third item's accordion body.</strong>
                    You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="accordion">
                  <AccordionHeader targetId="5">
                    <p>Bagaimana jika terjadi kecelakaan</p>
                  </AccordionHeader>
                  <AccordionBody accordionId="5">
                    <strong>This is the third item's accordion body.</strong>
                    You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </AccordionBody>
                </AccordionItem>
              </UncontrolledAccordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
