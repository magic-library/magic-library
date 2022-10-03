import styled from "styled-components";
import Begin from "./Begin";
import Middle from "./Middle";
import End from "./End";
import { color } from "../theme";

const Layout = () => {
    return (
        <>
            <Container>
                <Begin/>
                <Middle/>
                <End/>
            </Container>
        </>
    )
}

export default Layout;

const Container = styled.div`
  background: ${color.BACKGROUND_BLACK};
  width: 100%;
  height: 100%;
`;