import { useEffect, useState } from "react";
import styled from "styled-components";
import BoardApi from "../../api/BoardApi";
import Modal from "../../modal/modal";

const Container = styled.div`
    width: 1000px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 40px 20px 100px 20px;
    margin-top: 60px;

    .content{
        .titleName{
            font-weight: bold;
            margin-bottom: 6px;
        }
        img{
            align-items: center;
            vertical-align: bottom
        }
        .subName{
            color: #7e7d77;
            font-size: 13px;
            margin-bottom: 16px;
        }
        table{
            width: 100%;
            border-collapse:collapse;
            font-size: 15px;           
            .barWrapper{
                z-index: -1;
                position: absolute;
                right: 8px;
                height: 24px;
                width: 100%;
            }
            .progress{
                position: absolute;
                background-color: #ffcd3e;
                height: 100%;
                border-radius: 4px;
            } 
            .infoText{
                text-align: left;
            }
            .index{
                text-align: center;
                font-weight: 700;
                color: #fca600;
                align-items: center;
            }
            td{
                text-align: center;
            }
            p{
                margin: 0;
            }
            .count{
                padding-right: 16px;
                text-align: right;
            }
            .hour{
                color: #7e7d77;
            }
            th{
                font-size: 13px;
                height: 45px;
                color: #7e7d77;
                text-align: center;
                border-bottom: 1px solid #8f8f8f;
                border-top: 1px solid #f3f3f3;
                img{
                    width: 15px;
                    height: 15px;
                    cursor: pointer;
                    text-align: center;
                    vertical-align: bottom
                }
            }
            tr{
                border-bottom: 1px solid #eaeaea;
            }
            a{
                text-decoration: none;
                color: unset;
                display: flex;
                flex-direction: column;
                height: 54px;
                width: 100%;
                padding: 0 8px;
                line-height: 20px;
                p:first-child{
                    font-weight: bold;
                    
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                p:nth-child(2){
                color: #7e7d77;
                }
            
            }
        }
    }
`


const Board = () =>{
    const [itemData , setItemData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectModal , setSelectModal] = useState(0);
    
    // 서버에서 정보 받아오기
    useEffect(() =>{
        const apiRead = async() => {
            try{
                const res = await BoardApi.board();
                if(res.status === 200){
                    setItemData(res.data)
                }
            }catch(e){
                console.log(e)
            }
        }
        apiRead();
    },[])

    
    const openModal = (e) =>{
        setModalOpen(true)
        setSelectModal(e)
    }
    const closeModal = () =>{
        setModalOpen(false)
    }
    console.log("test", itemData)

    return( 
        <Container>
            <div className="content">
                <div className="title">
                    <p className="titleName">라방 랭킹<img src="https://datalab.labangba.com/__modules/Title/tooltip_icon.svg" onClick={()=>{openModal(1)}}/></p>
                    <p className="subName">72시간 동안 가장 매출액 높은 라이브방송</p>
                    
                </div>
                    <table>
                        <thead>
                            <tr>
                                    <th style={{width:"4%"}}><div/></th>
                                    <th style={{width:"31%"}}>방송정보</th>
                                    <th style={{width:"12%"}}>분류</th>
                                    <th style={{width:"12.5%"}}>방송시간</th>
                                    <th style={{width:"10%"}}>조회수</th>
                                    <th style={{width:"10%"}}>판매량<img src="https://datalab.labangba.com/__modules/Table/tooltip.svg" onClick={()=>{openModal(2)}}/></th>
                                    <th style={{width:"12.5%"}}>매출액<img src="https://datalab.labangba.com/__modules/Table/tooltip.svg" onClick={()=>{openModal(3)}}/></th>
                                    <th style={{width:"8%"}}>상품수</th>
                            </tr>
                        </thead>

                        <tbody>                     
                            {itemData && itemData.map((item) => (
                            <tr key={item.rank}>
                                <td className="index">{item.rank}</td>
                                <td>
                                    <a className="infoText" href={item.url}>
                                        <p>{item.title}</p>
                                        <p>{item.subtitle}</p>
                                    </a>
                                </td>
                                <td>{item.category}</td>
                                <td>
                                    <p>{item.day}</p>
                                    <p className="hour">{item.hour}</p>
                                </td>
                                <td><span>{item.visit}</span></td>
                                <td>{item.salesCnt}</td>
                                <td>{item.salesAmt}</td>
                                <td className="count">{item.count}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <Modal open={modalOpen} close={closeModal} id={selectModal}></Modal>
        </Container>
    )
}

export default Board;