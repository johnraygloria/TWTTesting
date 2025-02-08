function LoginValidation(values) {
    let error = {}
    const id_patter = /^[0-9]{4}$/;
    const password_patter = /^[a-zA-Z0-9]{8,}$/;

    if(values.id === ""){
      error.id = "ID should not be empty"
    }
    else if(!id_patter.test(values.id)){
      error.id = "ID should be 4 digits"
    }
    else{
      error.id = ""
    }
    if(values.password === ""){
      error.password = "Password should not be empty"
    }
    else if(!password_patter.test(values.password)){
      error.password = "Password should be 8 characters"
    }
    else{
      error.password = ""
    }
    return error;
    }
export default LoginValidation;