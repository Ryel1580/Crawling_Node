import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: block;
    .itemContainer{
        position: fixed;
        display: flex;
        width: 100%;
        height: 60px;
        align-items: center;
        justify-content: space-between;
        top: 0;
        left: 0;
        background-color: white;
        border-bottom: 1px solid #F3F3F3;
        .logo{
            margin-left: 25px;
        }
        .userContainer{
            border-left: 1px solid #E0E0E0;
            font-size: 14px;
            color: #8F8F8F;
            align-items: center;
            padding: 0 20px;
            img{
                margin-right: 8px;
                vertical-align: bottom;
            }
        }
        a{
            text-decoration: none;
            color: unset;
        }
        span{
            margin: 8px;
        }
    }
`

const MainHedaer = () => {
    return(
        <Container>
                <div className="itemContainer">
                    <a className="logo" href="https://datalab.labangba.com/"><img src="https://datalab.labangba.com/_app/Nav/gnb_bi.png"/></a>
                
                    <div className="userContainer">
                        <img src="https://datalab.labangba.com/_app/Nav/gnb_user.svg"/>
                        <a href="https://datalab.labangba.com/user/sign_in?redirect=%2Frecruit">로그인</a>
                        <span>*</span>
                        <a href="https://datalab.labangba.com/user/sign_up?redirect=%2Frecruit">회원가입</a>
                    </div>
                </div>
        </Container>
    )
}

export default MainHedaer;