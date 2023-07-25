import React from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { Link as LinkR } from 'react-router-dom'


const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ContactContainer>
            <ProfileName>
   <Slide direction="left" delay={1}>
          <h1>Contact Us</h1>
        </Slide>
  </ProfileName> 
      <Container>

 
      
      <Profile>
     
        <div className="links">
          <Slide direction="left">
            <h1>Contact me directly:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+919868909640">+91 9868909640</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="aryanmamania17@gmail.com">aryanmamania17@gmail.com</a>
            </Slide>
          </div>
        </div>

        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      <TableContainer>
      <Form>
        <Slide direction="right">
          <form>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input type="text" placeholder="Fullname..." />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input type="email" placeholder="Email..." />
            </div>
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea cols="30" rows="10" placeholder="Message..."></textarea>
            </div>
            <NavBtn>
       <NavBtnLink to = "/"> Submit Me</NavBtnLink> </NavBtn>
          </form>
        </Slide>
      </Form>
      </TableContainer>
    </Container>
    </ContactContainer>
  );
};

export default Footer;

const ContactContainer = styled.div`
background: black;
margin-top:0px;
max-width:100%;
max-height:100%
`
const ProfileName = styled.h1`
color:white;
margin:-45px;
margin-left:550px;
color:#01bf71;
padding-top:50px;
`

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
 

  .links {
    h1 {
      font-size: 50px;
      margin-bottom: 0.5rem;
      color: #01bf71;
      padding-top:30px;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        font-size:30px;
        color: white;
        &:hover {
          color: orange;
        }
      }
    }
  }

 
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #01be96;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;

const TableContainer = styled.div`
margin-top:40px;
width: 500px;
`
const Form = styled.div`
  flex: 1;


  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 10px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    
  }
`;
 const ButtonClass = styled.div`
border-radius:100%;
margin-left:210px;

`
const NavBtn = styled.nav`
display: flex;
align-items: center;

position: absolute;
color:white;
margin-left: 700px;
`

export const NavBtnLink = styled(LinkR)`
width: 20px;
border-radius:50px;
background: white;
padding: 10px 22px;
color: white;
font-size: 35px;
outline: none;
cursor : pointer;
border: none;
transition: all 0.2s ease-in-out;
text-decoration: none;
 &:hover{
  
  width: 230px;
   transition: all 0.2s ease-in-out;
   background: #010606;
   color: white;
   border: 2px solid #01bf71;
   
 }
 z-index: 10;
position: absolute;
padding: 10px;
margin-left:10px;
`