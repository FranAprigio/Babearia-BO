const URL = "https://todo-uni.herokuapp.com"

//https://todo-uni.herokuapp.com/login

const loginService = async (login, senha) => {


    const u = {
        "login": login,
        "password": senha
    }

    console.log(u)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(u)
    };

    const resp = await fetch(`${URL}/login`, requestOptions )
    .catch(error => console.log('error', error))

    if (resp.ok) {
        const r = await resp.json()
        console.log(r)
        return r
    } else {
        return null;
    }

}



export {loginService}











{/*const URL = "https://todo-uni.herokuapp.com"

//Transformando em assíncrono
const loginService = async (login, senha) => {

    const u = {
        "login": login,
        "password": senha
    }

    console.log(u)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(u)
    };

    const resp = await fetch(`${URL}/login`, requestOptions )
    .catch(error => console.log('error', error))

    if (resp.ok) {
        const r = await resp.json()
        console.log(r)
        return r
    } else {
        return null;
    }
}

const getCliente = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`)

    var requestOptions = {
        method: "GET",
        headers: myHeaders
    };

    const resp = await fetch(`${URL}/api/agenda/cliente`, requestOptions )
    .catch(error => console.log('error', error))

    if (resp.ok) {
        const r = await resp.json()
        return r
    } else {
        return null;
    }
}


const getServico = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`)

    var requestOptions = {
        method: "GET",
        headers: myHeaders
    };

    const resp = await fetch(`${URL}/api/agenda/servico`, requestOptions )
    .catch(error => console.log('error', error))

    if (resp.ok) {
        const r = await resp.json()
        return r
    } else {
        return null;
    }
}

const salvarAgenda = async (listagem) => {

    console.log(listagem)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`)

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(listagem)
    };

    const resp = await fetch(`${URL}/api/agenda`, requestOptions )
    .catch(error => console.log('error', error))

    if (resp.ok) {
        const r = await resp.json()
        console.log(r)
        return r
    } else {
        return null;
    }
}

const getAgendas = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`)

    var requestOptions = {
        method: "GET",
        headers: myHeaders
    };

    const resp = await fetch(`${URL}/api/agenda/hoje`, requestOptions )
    .catch(error => console.log('error', error))

    if (resp.ok) {
        const r = await resp.json()
        return r
    } else {
        return null;
    }
}


export {loginService, getCliente, salvarAgenda, getAgendas, getServico}

*/}