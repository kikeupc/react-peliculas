import * as yup from 'yup';

declare module 'yup'{
    class StringSchema{
        primeraLetraMayuscula(): this;
    }
}