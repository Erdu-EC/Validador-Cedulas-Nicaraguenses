export default (function () {
    //Private properties.
    const letters = "ABCDEFGHJKLMNPQRSTUVWXY";

    const validate = (cedula) => {
        //Quitando guiones.
        cedula = cedula.replaceAll('-', '').trim();

        //Validando longitud.
        if (cedula.length !== 14) {
            return false;
        }

        //Obteniendo la ultima letra.
        const providedLetter = cedula.substring(13).toUpperCase();

        //Obteniendo solo la parte numérica
        const number = parseInt(cedula.substring(0, 13));

        //Calculando la letra correcta.
        const letter = letters[number % letters.length];

        //Devolviendo resultado de comparar la letra provista y la calculada.
        return letter === providedLetter;
    }

    //Public methods
    return {
        validate
    };
})();
