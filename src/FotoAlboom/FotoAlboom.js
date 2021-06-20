import {DeleteFotos} from "../Actions/actions";

import {useDispatch, useSelector} from "react-redux";


function FotoAlboom(props){
    const albooms=useSelector(state=>state.albooms);
    const alboom=albooms.find(item=>{
        if(item.id===props.foto.albumId){
            return true
        }
        return false
    })
    const dispatch=useDispatch();
    const handleDeleteFoto=(id)=>{
        dispatch(DeleteFotos(id))
    }
    return <div className="item_name">
                <div className="foto_id">{props.foto.id}</div>
                <div className="foto_title">{props.foto.title}</div>
                <img src={props.foto.url}/>
                <div className="alb_title">{alboom.title}</div>
                <button className="but_delete" onClick={()=>{handleDeleteFoto(props.foto.id)}}>delete</button>
            </div>

}
export default FotoAlboom;