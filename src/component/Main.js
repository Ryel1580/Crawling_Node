import styled from "styled-components";
import Board from "./board/board";
import Footer from "./footer/footer";

import MainHedaer from "./header/header";

const MainContainer = styled.div`
    
    /* border: 1px solid black; */
`
const Main = () =>{
    return(
        <MainContainer>
                <MainHedaer/>
                <Board/>
                <Footer/>
        </MainContainer>
    )
}

export default Main;