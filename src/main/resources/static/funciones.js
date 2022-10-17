//___________________________________CLIENTE__________________________________________________
function get_data(){
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        dataType: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            $("#get_resultados").empty();
            mostrarInformacion(respuesta);

        }
    });
}

function mostrarInformacion(items){
    let table = "<table>"
    table += "<thead>";
    table += "<tr>";
    table += "<td>"+"ID_CLIENT"+"</td>";
    table += "<td>"+"NAME_CLIENT"+"</td>";
    table += "<td>"+"AGE"+"</td>";
    table += "<td>"+"EMAIL"+"</td>";
    table += "<td>"+"PASSWORD"+"</td>";
    table += "<td>"+"BUTTON"+"</td>";
    table += "</tr>";
    table += "</thead>";
    for (i=0; i<items.length; i++){
        table += "<tr>";
        table += "<td>" + items[i].idClient+"</td>";
        table += "<td>" + items[i].name+"</td>";
        table += "<td>" + items[i].age+"</td>";
        table += "<td>" + items[i].email+"</td>";
        table += "<td>" + items[i].password+"</td>";
        table += "<td> <button onclick= 'borrarElemento("+items[i].idClient+")' class='btn btn-outline-danger'>Borrar</button>";
        table += "</tr>";
    }
    table += "</table>";
    $("#get_resultados").append(table);
}
function mostrarInformacion2(items){
    let table = "<table>"
    table += "<thead>";
    table += "<tr>";
    table += "<td>"+"ID_CLIENT"+"</td>";
    table += "<td>"+"NAME_CLIENT"+"</td>";
    table += "<td>"+"AGE"+"</td>";
    table += "<td>"+"EMAIL"+"</td>";
    table += "<td>"+"PASSWORD"+"</td>";
    table += "<td>"+"BUTTON"+"</td>";
    table += "</tr>";
    table += "</thead>";

    table += "<tr>";
    table += "<td>" + items.idClient+"</td>";
    table += "<td>" + items.name+"</td>";
    table += "<td>" + items.age+"</td>";
    table += "<td>" + items.email+"</td>";
    table += "<td>" + items.password+"</td>";
    table += "<td> <button onclick= 'borrarElemento("+items.idClient+")' class='btn btn-outline-danger'>Borrar</button>";
    table += "</tr>";

    table += "</table>";
    $("#get_resultados").append(table);
}

function post_data(){
    let mydata ={
        idClient: $("#idClient").val(),
        name: $("#name").val(),
        age: $("#age").val(),
        email: $("#email").val(),
        password: $("#password").val()
    };
    let dataToSend = JSON.stringify(mydata);
    $.ajax({
        url: "http://localhost:8080/api/Client/save",
        type: "POST",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function(respuesta){
            $("#get_resultados").empty();
            get_data();
        }
    });

}

function put_data(){
    let mydata ={
        idClient: $("#idClient").val(),
        name: $("#name").val(),
        age: $("#age").val(),
        email: $("#email").val(),
        password: $("#password").val()
    };

    let dataToSend = JSON.stringify(mydata);
    $.ajax({
        url: "http://localhost:8080/api/Client/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function(respuesta){
            console.log("Todo ok");
            get_data();
        },
    });
}

function borrarElemento(idElemento){
    let myData = {
        idClient: idElemento,
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Client/"+idElemento,
        type: "DELETE",
        contentType: "application/json",
        dataType: "JSON",
        success: function(respuesta){
            $("#get_resultados").empty();
            get_data();
        }
    });
}

function get_id_data(){
    let mydata = $("#id").val();
    console.log(mydata);
    $.ajax({
        url: "http://localhost:8080/api/Client/" + mydata,
        type: "GET",
        dataType: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            $("#get_resultados").empty();
            mostrarInformacion2(respuesta);
            console.log(respuesta)
        }
    });
}

//*_______________________________________________________BOTES_______________________________
function get_dato_bote(){
    $.ajax({
        url: "http://localhost:8080/api/Boat/all",
        type: "GET",
        dataType: "JSON",
        success: function(respuestas){
            console.log(respuestas);
            $("#get_resultado").empty();
            mostrarInfo(respuestas);
        }
    });
}

function mostrarInfo(items){
    let tabl = "<table>"
    tabl += "<thead>";
    tabl += "<tr>";
    tabl += "<td>"+"ID_BOAT"+"</td>";
    tabl += "<td>"+"NAME_BOAT"+"</td>";
    tabl += "<td>"+"BRAND"+"</td>";
    tabl += "<td>"+"YEAR"+"</td>";
    tabl += "<td>"+"DESCRIPTION"+"</td>";
    tabl += "<td>"+"BUTTON"+"</td>";
    tabl += "</tr>";
    tabl += "</thead>";
    for (i=0; i<items.length; i++){
        tabl += "<tr>";
        tabl += "<td>" + items[i].id+"</td>";
        tabl += "<td>" + items[i].name+"</td>";
        tabl += "<td>" + items[i].brand+"</td>";
        tabl += "<td>" + items[i].year+"</td>";
        tabl += "<td>" + items[i].description+"</td>";
        tabl += "<td> <button onclick= 'borrar_elemento("+items[i].id+")' class='btn btn-outline-danger'>Borrar</button>";
        tabl += "</tr>";
    }
    tabl += "</table>";
    $("#get_resultado").append(tabl);
}
function mostrarInfo2(items){
    let tabl = "<table>"
    tabl += "<thead>";
    tabl += "<tr>";
    tabl += "<td>"+"ID_BOAT"+"</td>";
    tabl += "<td>"+"NAME_BOAT"+"</td>";
    tabl += "<td>"+"BRAND"+"</td>";
    tabl += "<td>"+"YEAR"+"</td>";
    tabl += "<td>"+"DESCRIPTION"+"</td>";
    tabl += "<td>"+"BUTTON"+"</td>";
    tabl += "</tr>";
    tabl += "</thead>";

    tabl += "<tr>";
    tabl += "<td>" + items.id+"</td>";
    tabl += "<td>" + items.name+"</td>";
    tabl += "<td>" + items.brand+"</td>";
    tabl += "<td>" + items.year+"</td>";
    tabl += "<td>" + items.description+"</td>";
    tabl += "<td> <button onclick= 'borrar_elemento("+items.id+")' class='btn btn-outline-danger'>Borrar</button>";
    tabl += "</tr>";

    tabl += "</table>";
    $("#get_resultado").append(tabl);
}

// funciona hasta alli
function post_dato_bote(){
    let mydatabote ={
        id: $("#idbarcos").val(),
        name: $("#namebarcos").val(),
        brand: $("#brand").val(),
        year: $("#year").val(),
        description: $("#description").val(),

    };
    let dataToSend = JSON.stringify(mydatabote);
    $.ajax({
        url: "http://localhost:8080/api/Boat/save",
        type: "POST",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function(respuestas){
            $("#get_resultado").empty();
            get_dato_bote();
        }
    });

}

function put_dato_bote(){
    let mydatabote ={
        id: $("#idbarcos").val(),
        name: $("#namebarcos").val(),
        brand: $("#brand").val(),
        year: $("#year").val(),
        description: $("#description").val(),
    };

    let dataToSend = JSON.stringify(mydatabote);
    $.ajax({
        url: "http://localhost:8080/api/Boat/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function(respuestas){
            console.log("Todo ok");
            get_dato_bote();
        },

    });
}

function borrar_elemento(idElementos){
    let myDatabote = {
        id: idElementos,
    };

    let dataToSend = JSON.stringify(myDatabote);
    $.ajax({
        url: "http://localhost:8080/api/Boat/"+idElementos,
        type: "DELETE",
        contentType: "application/json",
        dataType: "JSON",
        success: function(respuestas){
            $("#get_resultado").empty();
            get_dato_bote();
        }
    });
}

function get_id_dato_bote(){
    let mydatabote = $("#idbarcos").val();
    console.log(mydatabote);
    $.ajax({
        url: "http://localhost:8080/api/Boat/" + mydatabote,
        type: "GET",
        dataType: "JSON",
        success: function(respuestas){
            console.log(respuestas);
            $("#get_resultado").empty();
            mostrarInfo2(respuestas);
            console.log(respuestas)
        }
    });
}


//_______________________________________________________MENSAJES_________________________________________
function get_data_mens(){
    $.ajax({
        url: "http://localhost:8080/api/Message/all/",
        type: "GET",
        dataType: "JSON",
        success: function(answer){
            console.log(answer);
            $("#get_results").empty();
            mostrar(answer);
        }
    });
}

function mostrar(items){
    let tab = "<table>"
    tab += "<thead>";
    tab += "<tr>";
    tab += "<td>"+"ID"+"</td>";
    tab += "<td>"+"MENSSAGE"+"</td>";
    tab += "<td>"+"BUTTON"+"</td>";
    tab += "</tr>";
    tab += "</thead>";
    for (i=0; i<items.length; i++){
        tab += "<tr>";
        tab += "<td>" + items[i].idMessage+"</td>";
        tab += "<td>" + items[i].messageText+"</td>";
        tab += "<td> <button onclick= 'borrar("+items[i].idMessage+")' class='btn btn-outline-danger'>Borrar</button>";
        tab += "</tr>";
    }
    tab += "</table>";
    $("#get_results").append(tab);
}

function mostrar2(items){
    let tab = "<table>"
    tab += "<thead>";
    tab += "<tr>";
    tab += "<td>"+"ID"+"</td>";
    tab += "<td>"+"MENSSAGE"+"</td>";
    tab += "<td>"+"BUTTON"+"</td>";
    tab += "</tr>";
    tab += "</thead>";

    tab += "<tr>";
    tab += "<td>" + items.idMessage+"</td>";
    tab += "<td>" + items.messageText+"</td>";
    tab += "<td> <button onclick= 'borrar("+items.idMessage+")' class='btn btn-outline-danger'>Borrar</button>";
    tab += "</tr>";

    tab += "</table>";
    $("#get_results").append(tab);
}
// funciona hasta alli

function post_data_men(){
    let mydatamen = {
        idMessage: $("#id").val(),
        messageText: $("#messageText").val()
    };
    let dataToSend = JSON.stringify(mydatamen);
    $.ajax({
        url: "http://localhost:8080/api/Message/save",
        type: "POST",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function(answer){
            $("#get_results").empty();
            get_data_mens();
        }
    });
}

function put_data_men(){
    let mydatamen ={
        idMessage: $("#idMessage").val(),
        messageText: $("#messageText").val(),
    };
    let dataToSend = JSON.stringify(mydatamen);
    $.ajax({
        url: "http://localhost:8080/api/Message/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function(answer){
            $("#get_results").empty();
            get_data_mens();
        }
    });
}

function borrar(idElement){
    let myDatamen = {
        idMessage: idElement,
    };

    let dataToSend = JSON.stringify(myDatamen);
    $.ajax({
        url: "http://localhost:8080/api/Message/"+idElement,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/json",
        dataType: "JSON",
        success: function(answer){
            $("#get_results").empty();
            get_data_mens();
        }
    });
}

function get_id_data_men(){
    let mydatamen = $("#idMessage").val();
    $.ajax({
        url: "http://localhost:8080/api/Message/" + mydatamen,
        type: "GET",
        dataType: "JSON",
        success: function(answer){
            console.log(answer);
            $("#get_results").empty();
            mostrar2(answer);
            console.log(answer)
        }
    });
}

//__________________________________________________Categoria___________________________________________________
function get_data_ca(){
    $.ajax({
        url: "http://localhost:8080/api/Category/all",
        type: "GET",
        dataType: "JSON",
        success: function(answers){
            console.log(answers);
            $("#get_resul").empty();
            showInformacion(answers);
        }
    });
}

function showInformacion(items){
    let ta = "<table>"
    ta += "<thead>";
    ta += "<tr>";
    ta += "<td>"+"ID"+"</td>";
    ta += "<td>"+"NAME"+"</td>";
    ta += "<td>"+"DESCRIPTION"+"</td>";
    ta += "<td>"+"BUTTON"+"</td>";
    ta += "</tr>";
    ta += "</thead>";
    for (i=0; i<items.length; i++){
        ta += "<tr>";
        ta += "<td>" + items[i].id+"</td>";
        ta += "<td>" + items[i].name+"</td>";
        ta += "<td>" + items[i].description+"</td>";
        ta += "<td> <button onclick= 'deleteElemento("+items[i].id+")' class='btn btn-outline-danger'>Borrar</button>";
        ta += "</tr>";
    }
    ta += "</table>";
    $("#get_resul").append(ta);
}

function showInformacion2(items){
    let ta = "<table>"
    ta += "<thead>";
    ta += "<tr>";
    ta += "<td>"+"ID"+"</td>";
    ta += "<td>"+"NAME"+"</td>";
    ta += "<td>"+"DESCRIPTION"+"</td>";
    ta += "<td>"+"BUTTON"+"</td>";
    ta += "</tr>";
    ta += "</thead>";

    ta += "<tr>";
    ta += "<td>" + items.id+"</td>";
    ta += "<td>" + items.name+"</td>";
    ta += "<td>" + items.description+"</td>";
    ta += "<td> <button onclick= 'deleteElemento("+items.id+")' class='btn btn-outline-danger'>Borrar</button>";
    ta += "</tr>";

    ta += "</table>";
    $("#get_resul").append(ta);
}

function post_data_ca(){
    let mydatacat ={
        //id: $("#idcategory").val(),
        name: $("#namecategory").val(),
        description: $("#descriptioncategory").val()

    };
    let dataToSend = JSON.stringify(mydatacat);
    $.ajax({
        url: "http://localhost:8080/api/Category/save",
        type: "POST",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function(answers){
            $("#get_resul").empty();
            get_data_ca();
        }
    });

}

function put_data_ca(){
    let mydatacat ={
        id: $("#idcategory").val(),
        name: $("#namecategory").val(),
        description: $("#descriptioncategory").val()
    };

    let dataToSend = JSON.stringify(mydatacat);
    $.ajax({
        url: "http://localhost:8080/api/Category/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function(answers){
            console.log("Todo ok");
            get_data_ca();
        },
    });
}

function deleteElemento(idElemen){
    let mydatacat = {
        idCategory: idElemen,
    };

    let dataToSend = JSON.stringify(mydatacat);
    $.ajax({
        url: "http://localhost:8080/api/Category/"+idElemen,
        type: "DELETE",
        contentType: "application/json",
        dataType: "JSON",
        success: function(answers){
            $("#get_resul").empty();
            get_data_ca();
        }
    });
}

function get_id_data_ca(){
    let mydatacat = $("#idcategory").val();
    $.ajax({
        url: "http://localhost:8080/api/Category/" +mydatacat,
        type: "GET",
        dataType: "JSON",
        success: function(answers){
            console.log(answers);
            $("#get_resul").empty();
            showInformacion2(answers);
            console.log(answers)
        }
    });
}

//______________________________________RESERVACION_________________________________________________________________
function get_data_reser() {
    $.ajax({
        url: "http://localhost:8080/api/Reservation/all",
        type: "GET",
        dataType: "JSON",
        success: function (answ) {
            $("#get_res").empty();
            showinformation(answ)
        }
    });
}

function showinformation(items){
    let tabla = "<table>"
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<td>"+"ID_RESERVATION"+"</td>";
    tabla += "<td>"+"START_DATE"+"</td>";
    tabla += "<td>"+"DEVOLUTION_DATE"+"</td>";
    tabla += "<td>"+"STATUS"+"</td>";
    tabla += "<td>"+"ID_CLIENT"+"</td>";
    tabla += "<td>"+"NAME_CLIENT"+"</td>";
    tabla += "<td>"+"ID_BOAT"+"</td>";
    tabla += "<td>"+"NAME_BOAT"+"</td>";
    tabla += "<td>"+"BUTTON"+"</td>";
    tabla += "</tr>";
    tabla += "</thead>";
    for (i=0; i<items.length; i++){
        tabla += "<tr>";
        tabla += "<td>" + items[i].idReservation+"</td>";
        tabla += "<td>" + items[i].startDate+"</td>";
        tabla += "<td>" + items[i].devolutionDate+"</td>";
        tabla += "<td>" + items[i].status+"</td>";
        tabla += "<td>" + items[i].client.idClient+"</td>";
        tabla += "<td>" + items[i].client.name+"</td>";
        tabla += "<td>" + items[i].boat.id+"</td>";
        tabla += "<td>" + items[i].boat.name+"</td>";
        tabla += "<td> <button onclick= 'deleteElement("+items[i].idReservation+")' class='btn btn-outline-danger'>Borrar</button>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    $("#get_res").append(tabla);
}

function showinformation2(items){
    let tabla = "<table>"
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<td>"+"ID_RESERVATION"+"</td>";
    tabla += "<td>"+"START_DATE"+"</td>";
    tabla += "<td>"+"DEVOLUTION_DATE"+"</td>";
    tabla += "<td>"+"STATUS"+"</td>";
    tabla += "<td>"+"ID_CLIENT"+"</td>";
    tabla += "<td>"+"NAME_CLIENT"+"</td>";
    tabla += "<td>"+"ID_BOAT"+"</td>";
    tabla += "<td>"+"NAME_BOAT"+"</td>";
    tabla += "<td>"+"BUTTON"+"</td>";
    tabla += "</tr>";
    tabla += "</thead>";

    tabla += "<tr>";
    tabla += "<td>" + items.idReservation+"</td>";
    tabla += "<td>" + items.startDate+"</td>";
    tabla += "<td>" + items.devolutionDate+"</td>";
    tabla += "<td>" + items.status+"</td>";
    tabla += "<td>" + items.client.idClient+"</td>";
    tabla += "<td>" + items.client.name+"</td>";
    tabla += "<td>" + items.boat.id+"</td>";
    tabla += "<td>" + items.boat.name+"</td>";
    tabla += "<td> <button onclick= 'deleteElement("+items.idReservation+")' class='btn btn-outline-danger'>Borrar</button>";
    tabla += "</tr>";

    tabla += "</table>";
    $("#get_res").append(tabla);
}

function post_data_re(){
    let mydatares ={
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        status: $("#status").val(),
        client:{idClient:$("#idClient").val()},
        boat:{id:$("#idbarcos").val()}
    };
    let dataToSend = JSON.stringify(mydatares);
    $.ajax({
        url: "http://localhost:8080/api/Reservation/save",
        type: "POST",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function(answ){
            $("#get_res").empty();
            get_data_reser();
        }
    });
}
function put_data_re(){
    let mydatares ={
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        status: $("#status").val(),
        client:{idClient:$("#idClient").val()},
        boat:{id:$("#idbarcos").val()}

    };
    let dataToSend = JSON.stringify(mydatares);
    $.ajax({
        url: "http://localhost:8080/api/Reservation/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function(answ){
            get_data_reser();
        }
    });
}

function deleteElement(idEl){
    let mydatares = {
        idReservation: idEl,
    };

    let dataToSend = JSON.stringify(mydatares);
    $.ajax({
        url: "http://localhost:8080/api/Reservation/"+idEl,
        type: "DELETE",
        contentType: "application/json",
        dataType: "JSON",
        success: function(answ){
            $("#get_res").empty();
            get_data_reser();
        }
    });
}

function get_id_data_re(){
    let mydatares = $("#idReservation").val();
    $.ajax({
        url: "http://localhost:8080/api/Reservation/" +mydatares,
        type: "GET",
        dataType: "JSON",
        success: function(answ){
            console.log(answ);
            $("#get_res").empty();
            showinformation2(answ);
            console.log(answ)
        }
    });
}
