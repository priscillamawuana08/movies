import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h3 style={{ color: "teal", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        PriscyHair: Always provides the best
      </h3>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Nail Fixing</FooterLink>
            <FooterLink href="#">Hair Dressing</FooterLink>
            <FooterLink href="#">Hair products</FooterLink>
            
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">priscillabonsuktu@gmail.com</FooterLink>
            <FooterLink href="#">0543253440</FooterLink>
            
          </Column>
          <Column>
            <Heading>Social Media</Heading>
           
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
           
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;