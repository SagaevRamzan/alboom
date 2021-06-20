export const LoadFotos=()=>{
    return function (dispatch){
        dispatch({
            type:'FOTOS_LOAD_START',
        })
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response=>response.json())
            .then(json=>{dispatch({
                type:'FOTOS_LOAD_SUCCESS',
                payload:json
            })
            })
    }
}
export const LoadAlboom=()=>{
    return function (dispatch){
        dispatch({
            type:'ALBOOM_LOAD_START',
        })
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(response=>response.json())
            .then(json=>{
                dispatch({
                    type:"ALBOOM_LOAD_SUCCESS",
                    payload:json
                })
            })
    }
}
export const DeleteFotos=(id)=>{
    return function (dispatch){
        dispatch({
            type:"FOTOS_DELETE",
            payload:id
        })
    }
}