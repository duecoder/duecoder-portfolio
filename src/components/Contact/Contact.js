/* eslint-disable import/order */
import React, { useRef } from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./ContactStyles";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import { isEmail } from "validator";
import { Col, Row, Container } from "react-bootstrap";

export const Acomplishments = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const firstName = document.getElementById("name");
    const lastName = document.getElementById("lastname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
    let valid = true;

    const successToast = () => {
      console.log("Sent");
      toast.success("Your message has been sent!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    };

    if (!firstName.value) {
      toast.error("Field First Name must be filled!");
      valid = false;
    }

    if (!lastName.value) {
      toast.error("Field Last Name must be filled!");
      valid = false;
    }

    if (!isEmail(email.value)) {
      toast.error("Invalid E-mail");
      valid = false;
    }

    if (!phone.value) {
      toast.error("Field Phone must be filled!");
      valid = false;
    }

    if (!message.value) {
      toast.error("You must describe what you need!");
      valid = false;
    }

    if (valid) {
      emailjs
        .sendForm(
          "service_regetms",
          "template_x1ehdkh",
          form.current,
          "Xg0wgmPZ8qpufWOez"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
            e.target.reset();
          }
        );
      successToast();
    }
  };

  return (
    <Section id="contact">
      <SectionDivider />
      <SectionTitle main>Get in touch with me</SectionTitle>
      <form ref={form} onSubmit={sendEmail} className="form">
        <Container className="text-center">
          <Row>
            <Col sm={6} className="px-1">
              <input
                type="text"
                placeholder="First Name"
                name="user_name"
                id="name"
              />
            </Col>
            <Col sm={6} className="px-1">
              <input
                type="text"
                placeholder="Last Name"
                name="user_lastname"
                id="lastname"
              />
            </Col>
            <Col sm={6} className="px-1">
              <input
                type="email"
                placeholder="Email Address"
                name="user_email"
                id="email"
              />
            </Col>
            <Col sm={6} className="px-1">
              <input
                type="tel"
                placeholder="Phone"
                name="user_phone"
                id="phone"
              />
            </Col>
            <Col className="text-center">
              <textarea
                row="6"
                placeholder="Message"
                name="message"
                id="message"
              />
              <button type="submit">
                <span>Send</span>
              </button>
            </Col>
          </Row>
        </Container>
      </form>
      <ToastContainer
        toastStyle={{ backgroundColor: "#191A19", color: "white" }}
      />
    </Section>
  );
};

export default Acomplishments;
