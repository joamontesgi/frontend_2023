function eliminarJuego(id) {
    id=parseInt(id);
    let endPoint = 'http://127.0.0.1:8000/api/videogames/' + id;
    fetch(endPoint, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
    alert("Juego eliminado");
    location.reload();
}



function mostrarJuegos(){
    let videojuegos = document.getElementById("videojuegos");
    let endPoint = 'http://127.0.0.1:8000/api/videogames';
    videojuegos.innerHTML = '';
    fetch(endPoint)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            videojuegos.innerHTML += `
                    <tr>
                        <br>
                        <td><b>Identificador: </b> ${element.id}</td>
                        <br>
                        <td><b>Nombre: </b> ${element.name}</td>
                        <br>
                        <td><b>Descripción: </b> ${element.category}</td>
                        <br>
                        <td><b>Fecha de lanzamiento: </b> ${element.price}</td>
                        <br>
                        <br>
                        <td><button class="btn deep-orange darken-2" type="submit"  onclick="eliminarJuego(${element.id})">Eliminar
                        </button></td>
                        <br>
                    </tr>
            `;
        });
    });
}