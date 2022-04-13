import { useHistory } from "react-router-dom"
import Button from "../peliculas/utils/Button"

export default function CrearGenero() {

    const history = useHistory();

    return (
        <>Hola Mundo genero
            <Button onClick={() => history.push('/generos')}>Salvar</Button>
        </>

    )
}