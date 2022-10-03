import React from "react";
import styled from "styled-components";
import {color} from "../theme";

const Middle = (props) => {
    return (
        <MiddleStyle>
            <hr/>
            <p>Magic Library</p>
        </MiddleStyle>
    );
}

export default Middle;

const MiddleStyle = styled.div`
  height: 10%;
  //background-color: salmon;
  
  hr {
    width: 100%;
    color: ${color.FONT_WHITE};
  }
  
  p {
    text-align: center;
    color: ${color.FONT_WHITE}
  }
  
`;