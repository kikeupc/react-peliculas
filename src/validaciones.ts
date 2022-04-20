import * as Yup from 'yup'

export default function configurarValidaciones() {
    Yup.addMethod(Yup.string, 'primeraLetraMayuscula', function () {
        return this.test('primea-letra-mayuscula', 'la primera letra debe ser mayúscula',
            function (valor) {
                if (valor && Yup.ValidationError.length > 0) {
                    const primeraLetra = valor.substring(0, 1);
                    return primeraLetra === primeraLetra.toUpperCase();
                }

                return true;
            })
    })
}