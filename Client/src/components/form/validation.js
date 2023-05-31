
export default function validation( inputs ) {
  const errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPass = new RegExp('[0-9]');

  if (!regexEmail.test(inputs.email)) {
    errors.email = "Tiene que ser un email.";
    }
    
    if (!inputs.email) {
    errors.email = "No puede estar vacío.";
    }
    
    if (inputs.email.length > 35) {
    errors.email = "Maximo 35 caracteres.";
    }
    
    if (!regexPass.test(inputs.password)) {
    errors.password = "Al menos un número.";
    }
    if ( inputs.password.length > 10 && inputs.password.length < 6 ) {
    errors.password = 'Debe tener entre 6 y 10 caracteres.'
    }


  return errors;
}