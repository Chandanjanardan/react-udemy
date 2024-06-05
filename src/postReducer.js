const INITIAL_STATE={
    loaidng:false,
    post:{},
    error:false
}


const postReducer =(state,action)=>{
    if(action.type ==="Fetch_Start"){
        return{
            loaidng:true,
            error:false,
            post:{}
        }
    }
        else if(action.type ==="Fetch_success"){

       return{
            loaidng:false,
            error:false,
            post:action.payload
       } }
}