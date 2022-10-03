import React from "react";
import styled from "styled-components";
import {color} from "../theme";

const End = (props) => {
    return (
        <EndStyle>
            <h1>End</h1>
        </EndStyle>
    );
}

export default End;

const EndStyle = styled.div`
  height: 45%;
  //background-color: lightblue;
`;