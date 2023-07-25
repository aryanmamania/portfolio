import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { SkillsContent, SKillsTitle , SkillsBox , SkillsGroup , SkillsData , SkillsName} from './skillelements';

const Frontend = () => {
  return (
    <SkillsContent>
      <SKillsTitle>Tools and Extra Skills</SKillsTitle>
      <SkillsBox> 

        <SkillsGroup>
            <SkillsData>
           < FaCheck />
            <SkillsName>DSA</SkillsName>
            </SkillsData>

            <SkillsData>
           < FaCheck />
            <SkillsName>VS Code</SkillsName>
            </SkillsData>

            <SkillsData>
           < FaCheck />
            <SkillsName>Figma</SkillsName>
            </SkillsData>


            <SkillsData>
           < FaCheck />
            <SkillsName>GIt and Github</SkillsName>
            </SkillsData>

          

        </SkillsGroup>
      </SkillsBox>
    </SkillsContent>
  )
}

export default Frontend;