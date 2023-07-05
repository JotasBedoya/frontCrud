// Recuperamos los datos URL y los mostramos en los input
// console.log(location.search);

let argsUrl = location.search.substring(1).split('&');
console.log(argsUrl);

let data = [];
for (var i = 0; i < argsUrl.length; i++){ // Hacer un recorrido desde 0 por todo el url
    data[i] = argsUrl[i].split('=');
} 

console.log(data);

document.getElementById('id').value = decodeURIComponent(data[0][1])
document.getElementById('nombre').value = decodeURIComponent(data[1][1])
document.getElementById('precio').value = decodeURIComponent(data[2][1])
document.getElementById('stock').value = decodeURIComponent(data[3][1])
document.getElementById('codigo').value = decodeURIComponent(data[4][1])
document.getElementById('imagen').value = decodeURIComponent(data[5][1])

// Y luego, actualizar los datos

function modificar(){
    let id = document.getElementById('id').value;
    let n = document.getElementById('nombre').value;
    let p = document.getElementById('precio').value;
    let s = document.getElementById('stock').value;
    let c = document.getElementById('codigo').value;
    let i = document.getElementById('imagen').value;

    let producto ={
        nombre:n,
        precio:p,
        stock:s,
        codigo:c,
        imagen:i
    }
    
    let url = 'https://jonathanbedoya.pythonanywhere.com/productos'+id
    let options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers:{'Content-Type': 'application/json'},
        redirect: 'follow'
    }

    fetch(url, options)
    .then(function(){
        alert('El producto ha sido editado satisfactoriamente');
        window.location.href = './productos.html'
    })
    .catch(err =>{
        alert('No pudo modificarse el producto');
        console.log(err)
    })
}