//JavaScript
	
$(document).ready(function(e){	
$('#page').height($('#page').height()); //calcular el alto de la pantalla del dispositivo
    document.addEventListener("deviceready",function(){
	//precarga el sonido
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('caballo','audio/caballo.mp3',function(){},function(e){alert('Error'+e);});
	audio.preloadFX('cerdo','audio/cerdo.mp3',function(){},function(e){alert('Error'+e);});
	audio.preloadFX('conejo','audio/Conejo.mp3',function(){},function(e){alert('Error' +e);});
	audio.preloadFX('gallina','audio/Gallina.mp3',function(){},function(e){alert('Error' +e);});
	audio.preloadFX('oveja','audio/Oveja.mp3',function(){},function(e){alert('Error' +e);});
	audio.preloadFX('vaca','audio/Vaca.mp3',function(){},function(e){alert('Error' +e);});
	audio.preoladFX('elefante','audio/Elefante.mp3',function(){},function(e){alert('Error' +e);});
	audio.preoladFX('gorila','audio/Gorila.mp3',function(){},function(e){alert('Error' +e);});
	audio.preoladFX('leon','audio/Leon.mp3',function(){},function(e){alert('Error' +e);});
	audio.preoladFX('mono_araña','audio/MonoAraña.mp3',function(){},function(e){alert('Error' +e);});
	audio.preoladFX('panda','audio/Panda.mp3',function(){},function(e){alert('Error' +e);});
	audio.preoladFX('tucan','audio/Tucan.mp3',function(){},function(e){alert('Error' +e);});
	
	
	//Reproducir las notas
	
	$('.animal').bind('touchstart',function(){$(this).audio.play($(this).attr('id'));});
	$('.animal').bind('touchend',function(){$(this);});	

	
	},false); //deviceready
});//ready