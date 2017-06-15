$(function(){
	// alert('ok');
	let images = ["http://www.buycostumes.com/ideas/wp-content/uploads/2015/12/star-wars-infogrpahic-timeline-header.jpg","http://sm.ign.com/t/ign_jp/screenshot/default/legostarwarsheaderjpg-485533-960w_4ezq.1280.jpg","http://www.mantality.co.za/blog/wp-content/uploads/2015/11/deathstar.jpg","http://users.skynet.be/fb455192/Pix/sw-intro.jpg","https://static.comicvine.com/uploads/scale_super/11/118136/3266512-star_wars_knights_of_the_old_republic_2_01x1200.jpg"];
	
	let index = 0;

	setInterval(function(){
		if(index == images.length) // vérification dernière image
			index = 0;

		$("#sliderImage").attr("src",images[index]); // modification source image via array

		index++; // incrémentation de la variable index

	},3000);
});