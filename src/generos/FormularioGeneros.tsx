import { Formik, Form, FormikHelpers} from "formik"
import rReact from "react"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import FormGroupText from "../utils/FormGroupText"
import Button from "../utils/Button"
import { generoCreacionDTO } from "./Generos.model"


export default function FormularioGeneros(props:formularioGeneroProps){
    return(
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}
        >
            
            {(formikProps) => (
                <Form> 
                <FormGroupText campo="nombre" label="Nombre" placeholder="nombre genero"/>
                <Button disabled={formikProps.isSubmitting} 
                        type="submit">Salvar</Button>
                <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
            </Form>
            )}
            
        </Formik> 
    )
}

interface formularioGeneroProps{
    modelo:generoCreacionDTO;
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>):void;
}