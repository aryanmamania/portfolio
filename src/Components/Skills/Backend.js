import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { SkillsContent, SKillsTitle , SkillsBox , SkillsGroup , SkillsData , SkillsName} from './skillelements';

const Backend = () => {
  return (
    <SkillsContent>
      <SKillsTitle>BackendEnd</SKillsTitle>
      <SkillsBox> 

        <SkillsGroup>
            <SkillsData>
           < FaCheck />
            <SkillsName>Node Js</SkillsName>
            </SkillsData>

            <SkillsData>
           < FaCheck />
            <SkillsName>Express Js</SkillsName>
            </SkillsData>

            <SkillsData>
           < FaCheck />
            <SkillsName>Mongo DB (for database)</SkillsName>
            </SkillsData>


            <SkillsData>
           < FaCheck />
            <SkillsName>Java</SkillsName>
            </SkillsData>


        </SkillsGroup>
      </SkillsBox>
    </SkillsContent>
  )
}

export default Backend;