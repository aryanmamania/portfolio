import image from "../../images/download.jpg";

import React, { useState } from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { Link as LinkR } from 'react-router-dom'

const ProjectContainer = styled.div`
  background-color: black;
  height: 700px;
  width: 100%;
  margin-top: 0px;
  margin-bottom:0px;
`;
const ProjectHeading = styled.div`
  font-size: 90px;
  color: #01bf71;
  padding: 80px;
  margin-left: 350px;
`;
const ProjectContainerWrapper = styled.div`
  display: flex;
  space-between: 20px;
`;
const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding:10px;
  margin-left:150px;
  &:hover > div {
    opacity: 1;

`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const ImageText = styled.div`
  position: absolute;
  bottom: 20%;
  left: 25%;
  transform: translate(0%, -10%);
  opacity: 0;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  transition: opacity 0.3s ease-in-out;
`;

const NavBtn = styled.nav`
display: flex;
align-items: center;

position: absolute;
margin: 550px;
margin-left: 700px;
`

export const NavBtnLink = styled(LinkR)`
width: 20px;
border-radius:50px;
background: white;
padding: 10px 22px;
color: black;
font-size: 35px;
outline: none;
cursor : pointer;
border: none;
transition: all 0.2s ease-in-out;
z-index:10;
text-decoration: none;
 &:hover{
  
  width: 230px;
   transition: all 0.2s ease-in-out;
   background: #010606;
   color: white;
   border: 2px solid #01bf71;
   
 }

position: absolute;
padding: 10px;
margin-left:10px;
`



const ProjectNameh1 = styled.h1`
  top: 0px;
  left: 10%;
  opacity: 1;
  color: #01bf71;
  margin-left: 25px;
`;
const ProjectImage = styled.div`
  display: inline-block;

  max-height: 300px;
`;
const Project = () => {
  return (
    <ProjectContainer>
       <Slide direction="left">
      <ProjectHeading>MY PROJECTS</ProjectHeading>
      </Slide>
      <ProjectContainerWrapper>
      <Slide direction="right">
        <ImageContainer>
          <ProjectImage>
            <Image src={image} alt="Image" />
            <ProjectNameh1>Project Name</ProjectNameh1>
          </ProjectImage>

          <ImageText>Image Description</ImageText>
        </ImageContainer>

        <ImageContainer>
          <ProjectImage>
            <Image src={image} alt="Image" />
            <ProjectNameh1>Project Name</ProjectNameh1>
          </ProjectImage>

          <ImageText>Image Description</ImageText>
        </ImageContainer>

        <ImageContainer>
          <ProjectImage>
            <Image src={image} alt="Image" />
            <ProjectNameh1>Project Name</ProjectNameh1>
          </ProjectImage>

          <ImageText>Image Description</ImageText>
        </ImageContainer>
        </Slide>
      </ProjectContainerWrapper>
    </ProjectContainer>
  );
};

export default Project;
