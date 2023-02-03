import axios from "axios"
const HEADER = 'application/json';
const Sever_DOMAIN= "http://localhost:5000/";

const BoardApi = {
    board : async function(){
        return await axios.get(Sever_DOMAIN + "board", HEADER);
    }
}

export default BoardApi;