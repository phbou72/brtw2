import React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";

const StyledApp = styled.div`
    background-color: red;
`;

const App = () => {
    return <StyledApp>App</StyledApp>;
};

export default hot(App);
