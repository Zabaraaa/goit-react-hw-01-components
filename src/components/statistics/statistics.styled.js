import styled from "styled-components";

export const StatisticsContainer = styled.section`
align-items: center;
    background: rgb(53 184 194 / 23%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
    padding-left: 10px;
    padding-right: 10px;
    width: 400px;
    height: 150px;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
`

export const StatisticsList = styled.ul`
align-items: center;
    background: #eeedf0;
    color: #cb69c1;
    display: flex;
    flex: 1 1;
    font-size: 13px;
    font-weight: 500;
    justify-content: space-around;
    list-style-type: none;
    padding: 10px;
    text-transform: uppercase;
    width: 100%;
    border-radius: 5px;
`

export const StatisticsItem = styled.li`
display: flex;
flex-direction: column;

`
export const Percentage = styled.span`
font-weight: 800;
font-size: 16px;
color: #212121;
`