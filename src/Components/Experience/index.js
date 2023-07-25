import React from "react";
import {
  ExperienceContainer,
  ExperienceWrapper,
  ExperienceH1,
  ExperienceH2,
  ExperienceInfo,
  ExperienceP,
  ExperienceQuestion,
  ExperienceText,
  Image
} from "./experienceElements";
import { Slide } from "react-awesome-reveal";
import ExperienceImage from '../../images/experience.svg'

function ExperienceElements() {
  return (
    <ExperienceContainer>
      <ExperienceWrapper>
        <ExperienceH2>Experience</ExperienceH2>
        <ExperienceText>
          <ExperienceInfo>
          <Slide direction="left">
            <ExperienceQuestion>
              <ExperienceH1>Company </ExperienceH1>
              <ExperienceP> = Vedspace Ventures</ExperienceP>
            </ExperienceQuestion>

            <ExperienceQuestion>
              <ExperienceH1>Title</ExperienceH1>
              <ExperienceP> = Front End Intern</ExperienceP>
            </ExperienceQuestion>

            <ExperienceQuestion>
              <ExperienceH1>Duration</ExperienceH1>
              <ExperienceP> = 5 months (August - December)</ExperienceP>
            </ExperienceQuestion>

            <ExperienceQuestion>
              <ExperienceH1>Skills used</ExperienceH1>
              <ExperienceP>= React js , React Native , Material Ui</ExperienceP>
            </ExperienceQuestion>
            </Slide>
          </ExperienceInfo>
          <Slide direction="right">
          <Image src={ExperienceImage} alt="Example" />
          </Slide>
        </ExperienceText>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
}

export default ExperienceElements;
