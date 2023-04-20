import styled from "styled-components";

export const FriendsList = styled.ul`
margin-top: 40px; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 350px;
gap: 20px;
`

export const FriendsItem = styled.li`
display:flex;
align-items: center;
justify-content: center;
gap: 20px;
width: 300px;
height: 100px;
background: rgb(53 184 194 / 23%);
border-radius: 80px;
box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
`

export const Status = styled.span`
width 25px;
height: 25px;
border-radius: 50%;
background-color: ${p => {
    return p.isOnline ? p.theme.colors.green : p.theme.colors.red
}} 


`
export const Name = styled.p`
font-size: 16px;
font-weight: 600;
`