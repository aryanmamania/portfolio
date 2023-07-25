import styled , { keyframes } from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const HeroContainer = styled.div`
background: #0c0c0c;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 700px;
position: relative;
width:100%;
background:black;
`;
export const  ImageContainer= styled.div`
width:300px;
`
export const HeroBg = styled.div`
position : absolute;
top: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
export const VideoBg= styled.video`
height: 120%;
width: 120%
margin: 0;
z-index:-1;
`
export const HeroContent= styled.div`

margin-right: 20px;
z-index:10;
display:flex;

position : absolute;

`
export const HeroRizz = styled.div`
display:flex;
`
export const HeroPara = styled.div`
display: coloumn;
max-width: 900px;
positon:absolute;
display:coloumn;
`





export const Image = styled.img`
height:500px;
width:500px;
padding-left:800px;
z-index:2;
position:absolute;
`

export const HeroH1 = styled.h1`
color : #17B169;
font-size: 48px;
margin-top: 150px;
margin-bottom: 0px
`

export const HeroH2 = styled.h2`
color : white;
font-size: 48px;
margin-top: 1px;
margin-bottom: 0px
`
export const HeroP = styled.p`
color : white;
font-size: 35px;
display:flex;

`
export const Typewrter = styled.div`
display:flex;
color:white;
display:flex;

`
export const Typing = styled.div`

font-size:35px;


`
export const NavBtn = styled.nav`
display: flex;
align-items: center;
z-index: 10;
position: absolute;
margin: 550px;
margin-left: 700px;

@media screen and (max-width: 786px){
   display: none
}
`
export const NavBtn1 = styled.nav`
display: flex;
align-items: center;
z-index: 10;
position: absolute;
margin: 550px;
margin-left: 500px;
`

export const NavBtnLink = styled(LinkR)`
width: 220px;
border-radius:50px;
background: white;
padding: 10px 22px;
color: black;
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
export const NavBtnLink2 = styled(LinkR)`
width: 160px;
border-radius:50px;
background: black;
padding: 10px 22px;
color: #01bf71;
font-size: 35px;
outline: none;
cursor : pointer;
border: 2px solid #01bf71;
transition: all 0.2s ease-in-out;
text-decoration: none;
 &:hover{
  
  width: 160px;
   transition: all 0.2s ease-in-out;
   background: #01bf71 ;
   color: white;
   border: 2px solid #010606;
   z-index: 1;
 }

position: absolute;
padding: 10px;
margin-left:10px;
`

