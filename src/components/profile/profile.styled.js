import styled from "styled-components";

export const ProfileContainer = styled.div`
width: 300px;
height: 400px;
border-radius: 15px;
box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);

`
export const ProfileDescription = styled.div`
background: #ca10c5fc;
border-radius: 15px;
width: 100%; 
padding-bottom: 10px;
padding-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
`
export const ProfileImg = styled.img`
width: 150px;
height: 150px;
background: linear-gradient(130deg,#74b9ff,#e66767);
border-radius: 50%;
box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
`
export const ProfileName = styled.p`
font-size: 28px;
font-weight: 600;
margin-top: 10px;
margin-bottom: 10px; 
`
export const ProfileTag = styled.p`
font-size: 16px;
font-weight: 400;
margin-top: 10px;
`
export const ProfileLocation = styled.p`
font-size: 16px;
font-weight: 400;
margin-top: 10px;
`
export const ProfileList = styled.ul`
align-items: center;
display: flex;
list-style-type: none;
justify-content: center;
margin: 0;
padding: 0;
`

export const ProfileItem = styled.li`
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
width: 100px;
padding: 20px;
color: #ca10c5fc;
`