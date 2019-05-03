window.onload = function()
{
		document.onkeydown = fecha;
}
var futuro=0;

function fecha(event) {
	var nuevaNoticia = document.getElementById("nuevaNoticia");
	var fecha = document.getElementById("fecha");
	var codigo = event.keyCode;
	var año=parseInt(fecha.innerHTML.split(' ')[4]);
	var nuevoAño;
	var nuevaFecha;
	if(codigo==38 && futuro==0)
	{
		console.log("nuevo : "+futuro);
		fecha.style.left = "40px";
		nuevoAño=año+1;
		if(nuevoAño >= 2019)
		{
			futuro=1;
			console.log(futuro);
			nuevaNoticia.innerHTML="Esta noticia es del futuro";
		}
		nuevaFecha = fecha.innerHTML.replace(año,nuevoAño);
		fecha.innerHTML=nuevaFecha;
	}
}