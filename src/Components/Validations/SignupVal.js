function EmployeeSignup(values) {
    let error = {}
    const id_patter = /^[0-9]{4}$/;
    const password_patter = /^[a-zA-Z0-9]{8,}$/;

    if(values.id === ""){
      error.id = "id should not be empty"
    }
    else if(!id_patter.test(values.id)){
      error.id = "id should be 4 digits"
    }
    else{
      error.id = ""
    }
    
    if(values.name === ""){
      error.name = "name should not be empty"
    }
    else{
      error.name = ""
    }


    if(values.email === ""){
      error.email = "email should not be empty"
    }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)){
      error.email = "email should be valid"
    }
    else{
      error.email = ""
    }


    if(values.phone === ""){
      error.phone = "phone should not be empty"
    }
    else if(!/^[0-9]{10}$/.test(values.phone)){
      error.phone = "phone should be 10 digits"
    }
    else{
      error.phone = ""
    }


    if(values.password === ""){
      error.password = "password should not be empty"
    }
    else if(!password_patter.test(values.password)){
      error.password = "password should be 8 characters"
    }
    else{
      error.password = ""
    }

    
    if(values.cpassword === ""){
      error.cpassword = "password should not be empty"
    }
    else if(values.password !== "" && values.cpassword !== values.password){
      error.cpassword = " should be same"
    }
    else{
      error.cpassword = ""
    }

    if(values.date === ""){
      error.date = "date should not be empty"
    }
    else{
      error.date = ""
    }
    return error;

    }
    
export default EmployeeSignup;