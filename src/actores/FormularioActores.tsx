import { Form, Formik, FormikHelpers, yupToFormErrors } from "formik";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { actorCreacionDTO } from "./actores.model";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import FormGroupFecha from "../utils/FormGroupFecha";

export default function FormularioActores(props: formularioACtoresProps){
    return(
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}>
                validationSchema={Yup.object({
                    nombre: Yup.string().required('este campo es requerido').primeraLetraMayuscula()
                })}
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre"/>
                    <FormGroupFecha label="Fecha Nacimiento" campo="fechaNacimiento" />

                    <Button disabled={formikProps.isSubmitting}
                        type="submit"
                    >Salvar</Button>
                    <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
                </Form>
            )}    
        </Formik>
    )
}

interface formularioACtoresProps{
    modelo: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>): void;
}