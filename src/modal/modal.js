import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    border: 1px solid #333;
    border-radius: 4px;
    background: #fff;
    width: 280px;
    padding: 14px 20px;
    z-index: 99999;
    .modalHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    i{
        background: url(https://datalab.labangba.com/_app/tooltip_close.svg) no-repeat 50%;
        width: 18px;
        height: 18px;
        cursor: pointer;
    }
    h5{
        font-size: 14px;
        color: #333;
        font-weight: 700;
    }
    p{
        white-space: pre-line;
        font-size: 14px;
        color: #8f8f8f;
        margin-top: 10px;
    }
`

// const modalList = [
//     {
//         id : 1 ,
//         title : "라방 랭킹",
//         text : "상단에서 선택한 카테고리의 추정 매출액이 높은 방송 표기"
//     },
//     {
//         id : 2 ,
//         title : "판매량",
//         text : "자체 알고리즘으로 추정한 판매량"
//     },
//     {
//         id : 3 ,
//         title : "매출액",
//         text : "자체 알고리즘으로 추정한 매출액"
//     }
// ]

const Modal = (props) => {
    const { open, close , id} = props;
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open && 
                <section>

                    {/* {modalList.map((item , id) =>{
                        {modalList.id === id ? 
                            <>
                            <header key={id}>
                                <div className="modalHeader">
                                    <h5>{item.title}</h5>
                                    <button className='close' onClick={close}><img src="https://datalab.labangba.com/_app/tooltip_close.svg"/></button>
                                </div>
                            </header>
                            <body>
                                <p>{item.text}</p>
                            </body>
                        </>
                        :
                    <div>실패</div>
                    }
                    })} */}


                    {id === 1 &&
                        <Container>
                            <header >
                                <div className="modalHeader">
                                    <h5>라방 랭킹</h5>
                                    <i onClick={close}></i>
                                </div>
                            </header>
                            <body>
                                <p>상단에서 선택한 카테고리의 추정 매출액이 높은 방송 표기</p>
                            </body>
                        </Container>
                    }
                    
                    {id === 2 &&
                        <Container>
                            <header>
                                <div className="modalHeader">
                                    <h5>판매량</h5>
                                    <button className='close' onClick={close}><img src="https://datalab.labangba.com/_app/tooltip_close.svg"/></button>
                                </div>
                            </header>
                            <body>
                                <p>자체 알고리즘으로 추정한 판매량</p>
                            </body>
                        </Container>
                    }

                    {id === 3 &&
                        <Container>
                            <header >
                                <div className="modalHeader">
                                    <h5>매출액</h5>
                                    <button className='close' onClick={close}><img src="https://datalab.labangba.com/_app/tooltip_close.svg"/></button>
                                </div>
                            </header>
                            <body>
                                <p>자체 알고리즘으로 추정한 매출액</p>
                            </body>
                        </Container>
                    }

                </section>
            }
        </div>
    );
};
export default Modal;