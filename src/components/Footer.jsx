import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../components/FooterStyles";
import { FaFacebookF } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { AiOutlineTwitter } from "react-icons/ai";


const Footer = () => {
  return (
    <Box>
      <img
            style={{ textAlign: "center", marginTop: "-50px", width: "270px" }}
            src="../image.huella.png"
            alt=""
          />
      <Container>
        <Row>
          
          <Column>
            <Heading>Nosotros</Heading>
            <FooterLink href="#">Quienes somos</FooterLink>
            <FooterLink href="#">Nuestra Tienda</FooterLink>
            <FooterLink href="#">Consulturio</FooterLink>
          </Column>
          <Column>
            <Heading>Tienda</Heading>
            <FooterLink href="#">Accesorios</FooterLink>
            <FooterLink href="#">Indumentaria</FooterLink>
            <FooterLink href="#">Alimento para perros</FooterLink>
            <FooterLink href="#">Alimento para gatos</FooterLink>
          </Column>

          <Column>
            <Heading>Ayuda</Heading>

            <FooterLink href="#">Preguntas Frecuentes</FooterLink>

            <FooterLink href="#">Terminos y Condiciones</FooterLink>

            <FooterLink href="#">Metodos de envio</FooterLink>

            <FooterLink href="#">Medios de pago</FooterLink>
          </Column>

          <Column>
            <Heading>Seguinos</Heading>

            <span style={{ marginLeft: "10px" }}>
              <FooterLink href="https://es-la.facebook.com/" target="_blank">
                <FaFacebookF size="30px" color="#92979D" />
              </FooterLink>
              /
            </span>

            <span style={{ marginLeft: "10px", marginTop: "20px" }}>
              <FooterLink href="https://www.instagram.com/" target="_blank">
                {" "}
                <RxInstagramLogo size="30px" color="#92979D" />
              </FooterLink>
              /{" "}
            </span>

            <span style={{ marginLeft: "10px", marginTop: "15px" }}>
              <FooterLink href="https://twitter.com/" target="_blank">
                <AiOutlineTwitter size="30px" color="#92979D" />
              </FooterLink>
            </span>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
