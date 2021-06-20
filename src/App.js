import Header from "./Header/Header";
import FotoAlboom from "./FotoAlboom/FotoAlboom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DeleteFotos, LoadAlboom, LoadFotos} from "./Actions/actions";


function App() {

    const fotos=useSelector((state)=>state.fotos)
    const load_foto=useSelector((state)=>state.foto_loaded);
    const load_alb=useSelector((state)=>state.alb_loaded);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(LoadFotos());
        dispatch(LoadAlboom());
        dispatch(DeleteFotos())
    },[])

  return (
    <div className="app">
        <Header/>
        {load_foto||load_alb?"идет загрузка":fotos.map(foto=>{
            return (<FotoAlboom key={foto.id} foto={foto}/>)
        })}

    </div>
  );
}

export default App;
