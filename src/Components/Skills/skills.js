import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";
import { Slide } from "react-awesome-reveal";
import {
  SkillsSection,
  SectionTitle,
  SectionSubTitle,
  SkillsContainer,
  SkillsContainer1,
  SkillsContainer2,
  SkillsContainer3,
} from "./skillelements";
const skills = () => {
  return (
    <>
      <SkillsSection>
      <Slide direction="right">
        <SectionTitle>Skills</SectionTitle>
   
        <SectionSubTitle>My technical Skills</SectionSubTitle>
        </Slide>
        <SkillsContainer>
        <Slide direction="left">
          <SkillsContainer1>
            <Frontend />
          </SkillsContainer1>
          <SkillsContainer2>
            <Backend />
          </SkillsContainer2>
          <SkillsContainer3>
            <Tools />
          </SkillsContainer3>
          </Slide>
        </SkillsContainer>
      </SkillsSection>
    </>
  );
};

export default skills;
