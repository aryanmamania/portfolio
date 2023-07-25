import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { SkillsContent, SKillsTitle , SkillsBox , SkillsGroup , SkillsData , SkillsName } from './skillelements';


const Frontend = () => {
  return (
    <SkillsContent>
      <SKillsTitle>FrontEnd</SKillsTitle>
      <SkillsBox> 

        <SkillsGroup>
            <SkillsData>
           < FaCheck />
            <SkillsName>HTML</SkillsName>
            </SkillsData>

            <SkillsData>
           < FaCheck />
            <SkillsName>CSS</SkillsName>
            </SkillsData>

            <SkillsData>
           < FaCheck />
            <SkillsName>Java Script</SkillsName>
            </SkillsData>


            <SkillsData>
           < FaCheck />
            <SkillsName>React Js</SkillsName>
            </SkillsData>


        </SkillsGroup>
      </SkillsBox>
    </SkillsContent>
  )
}

export default Frontend;
