import React from "react";
import styled from "styled-components";
import {color} from "../theme";

const Begin = (props) => {
    return (
        <BeginStyle>
            <h1>Begin</h1>
        </BeginStyle>
    );
}

export default Begin;

const BeginStyle = styled.div`
  height: 45%;
  //background-color: cornflowerblue;
`;