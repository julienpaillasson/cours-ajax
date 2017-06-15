$(function(){
	// alert('ok');
	let images = ["http://www.buycostumes.com/ideas/wp-content/uploads/2015/12/star-wars-infogrpahic-timeline-header.jpg","http://sm.ign.com/t/ign_jp/screenshot/default/legostarwarsheaderjpg-485533-960w_4ezq.1280.jpg","http://www.mantality.co.za/blog/wp-content/uploads/2015/11/deathstar.jpg"];
	
	let index = 0;

	setInterval(function(){
		if(index == images.length) // vérification dernière image
			index = 0;

		$("#sliderImage").attr("src",images[index]); // modification source image via array

		index++; // incrémentation de la variable index

	},3000);
});