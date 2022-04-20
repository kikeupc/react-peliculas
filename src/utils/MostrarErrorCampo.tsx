export default function mostrarErrorCampo(props: mostrarErrorCampoProps){
    return(
        <div className="text-danger">{props.mensaje}</div>
    )
}

interface mostrarErrorCampoProps{
    mensaje: string;
}