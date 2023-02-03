import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    border-top: 1px solid #e0e0e0;
    .itemBox{
        margin: 48px auto 60px;
        width: 960px;
        .linkItem{
            a{
                font-size: 13px;
                font-weight: bold;
                color: #333;
                text-decoration: none;
                margin-right: 30px;
            }
        }
        .textItem{
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                font-size: 12px;
                color: #a8a8a8;
                margin-top: 14px;
            }
        }
    }
`

const Footer = () =>{
    return(
        <Container>
            <div className="itemBox">
                <div className="linkItem">
                    <a href="https://goofy-swoop-805.notion.site/839611e1fdeb448e82a68b7673a3bdc7">라방바 데이터랩 소개</a>
                    <a href="https://datalab.labangba.com/terms/privacy">개인정보처리방침</a>
                    <a href="https://datalab.labangba.com/terms/service">이용약관</a>
                    <a href="mailto:contact@cv-3.com">문의하기/제휴하기</a>
                </div>
                <div className="textItem">
                    <div>
                        <p>씨브이쓰리 주식회사
                            <br/>
                            사업자등록번호 891-81-02188 · 통신판매업 신고 2021-서울성동-01100
                            <br/>
                            주소 대전광역시 유성구 대덕대로512번길 20 · 대표번호 070-4466-6599
                            <br/>
                            개인정보관리 책임자 이기백 · 대표자 양진호
                        </p>
                    </div>
                    <div>
                        <p>평일 09:00 - 18:00
                        <br/>
                        점심시간 12:00 - 13:00
                        </p>
                        
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default Footer;