/*  import { useEffect,useState } from "react";
const Reloj = ({hora})=>{
    return <><h3>{hora}</h3></>
}
export function RelojConHook(){

const [hora,setHora]= useState(new Date().toLocaleTimeString());
const [visible,setVisible] = useState(false);
 
useEffect(()=>{
    let temporizador;

    if(visible){
        temporizador = setInterval(()=>{
            setHora(new Date().toLocaleTimeString())
        },1000);
    }
        else{
            clearInterval(temporizador);
        }
},[visible])


    return (<><h1>RelojConHook</h1>
    {visible && <Reloj hora={hora}/>}
    <button onClick={()=>setVisible(true)}>iniciar</button>
    <button onClick={()=>setVisible(false)}>detener</button>
    </>)
} 
 */























