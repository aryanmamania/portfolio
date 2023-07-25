import styled from 'styled-components'
import {Link} from  'react-router-dom'


export const Nav= styled.nav`
background: #0000;
height: 100%;

background-color: black;
display: flex;
justify-content: center;
align-items: center;
font-size:1 rem;
position: sticky;
top:0;
z-index:80;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavLogo = styled(Link)`
color: #01bf71;
justify-self: flex-start;
cursor: pointer;
font-size: 80px;
display: flex;
align-items: center;
margin-left: -180px;
text-decoration:none;
font-family: 'Parisienne';
`
export const MobileIcon= styled.div`
display: none;

@media screen and (max-width : 786px){
    display: block;
    position: absolute;
    top:0;
    right: 0;
    transform: translate(-100%, 60%)
    font-size: 1.8rem;
    cursor: pointer;   
    color: white;
}
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right:-170px;


@media screen and (max-width : 786px){
    display: none;
}
`
export const NavItem = styled.li`
height: 100px;

`
export const Links = styled(Link)`
            
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding-left:30px;
height: 100%;
cursor: pointer;
font-size:30px;
&:hover{
    color: #01bf71;
    z-index: 5;
}

`;





