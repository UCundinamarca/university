// Accedo al servicio de la base de datos

var database = firebase.database();

//Accedo a un documento
var articles = database.ref('articles');

//Accder a los datos internos de a uno con value
articles.on('value', function(ss){
    //Codigo  devuelve el valor de lo que busca
    var article = ss.val();
    getId("autor").innerHTML = article.id.autor;
    getId("titulo").innerHTML = article.id.titulo;
    getId("link").innerHTML = article.id.link;
    getId("fecha").innerHTML = article.id.fechaLanzado;
});

var refRespuestas = database.ref('ask');
refRespuestas.on('child_added', function(ss) {
   var respuesta = ss.val();
   var item = document.createElement('li');
   item.innerHTML = '<input name="respuesta" type="radio" value="' + respuesta.valor + '"> ' + respuesta.respuesta;
   getId('lista').appendChild(item);
});

var ref = database.ref('juegos');
ref.on("child_added", function(snapshot){
	console.log("El juego actual es ", snapshot.val());
	console.log("El id actual es ", snapshot.key());
});