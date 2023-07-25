import {React , useEffect, useState} from "react";
import Video from "../../Video/video.mp4";
import { Slide } from "react-awesome-reveal";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroH2,
  NavBtn,
  NavBtnLink,
  NavBtnLink2,
  NavBtn1,
  HeroPara,
  Image,
  HeroRizz,
  Typewrter,
  Typing
} from "./HeroElements";
import HeroImage from "../../images/face.svg";
import Type from "./Type";




const HeroSection = () => {

 

  return (
    <HeroContainer>
     
      <HeroContent>
      <HeroRizz>
        <HeroPara>
       
          <HeroH1>Hello I Am Aryan Mamania</HeroH1>
          
         

         
<Slide direction="left" delay={1}>
  <Typewrter>
         
          <Typing>
          <Type/>
          </Typing>
          </Typewrter>
          </Slide>
        </HeroPara>

        
        <Image src={HeroImage} alt="Example"   />
     </HeroRizz>
      </HeroContent>
   
    
    
\
    
    
      <NavBtn>
        <NavBtnLink to="/contactUs"> Contact Me</NavBtnLink>{" "}
  </NavBtn>



      <NavBtn1>
        {" "}
        <NavBtnLink2 to="/">Resume </NavBtnLink2>
      </NavBtn1>
  
    </HeroContainer>
  );
};

export default HeroSection;
