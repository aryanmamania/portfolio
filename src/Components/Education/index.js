import React from "react";
import {
  EducationContainer,
  EduH1,
  EducationH1,
  EducationP,
  EducationH2,
  EducationWrapper,
  EducationDiv,
  EducationRizz,
  Image
} from "./EducationElements";
import EducationImage from '../../images/education.svg'
import { Slide } from "react-awesome-reveal";
function Education() {
  return (

    <EducationContainer>
      
      <EducationWrapper>
        <EduH1>EDUCATION</EduH1>
        <EducationRizz>
        <Slide direction="left" delay={1}>
          <EducationDiv>

            <EducationH1>School = Ahlcon International School</EducationH1>
            <EducationP> 2010-2020</EducationP>
            <EducationH2>
              College= Rao Birender Singh State Institute of Engineering And
              Technology
            </EducationH2>
            <EducationP> 2020-2040</EducationP>
          </EducationDiv>
          </Slide>
          <Slide direction="right" delay={1}>
          <Image src={EducationImage} alt="Example" />
          </Slide>
        </EducationRizz>
      </EducationWrapper>
     
    </EducationContainer>
  );
}

export default Education;
