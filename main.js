var firstName;
var birthDayObj;
var age;
var outputArea = document.getElementById('displayMsg');
var astroSign;

function calZodiac() {

	firstName = document.getElementById('fname').value;


	birthDayObj = new Date(document.getElementById('bday').value);

 	var bdayTime = birthDayObj.getTime();

 	var today = Date.now();

 	yourAge = (today - bdayTime) / 31556926000;

	var whichDayNdx = birthDayObj.getDay();

	

	//
	// this is what calculates the sign

	var monthNum = birthDayObj.getMonth();
	var dayNum = birthDayObj.getDate();

	monthNum ++;
	dayNum ++;



function getAge() {
	age= document.getElementById('birthDayObj').value - getTime();

}
	

	if ((monthNum == 12  && dayNum >= 22) || (monthNum == 1 && dayNum <= 19)) {
		astroSign = '<br><br><h2>December 22- January 20 </h2>Burj Khalifa, UAE</p><p>You are travelling to UAE. It houses state-of-the-art hotels and resorts and majestic skyscrapers, including the tallest building in the world today, the Burj Khalifa located in downtown Dubai.</p>';
		displayZodSign('click', 'burj');
	} 
	//
	// Capricorn

	else if ((monthNum == 11 && dayNum >= 22) || (monthNum ==12 && dayNum <= 21 )) {
		astroSign = '<br><br><h2>November 22 - December 21</h2> <h3>Itza, Mexico</h3> <p>You are travelling to Mexico! Mexico is best known for its kind people, folkloric traditions, spicy food and glorious beaches.</p>';
		displayZodSign('click', 'itza');
	}
	//
	// Sagittarius

	else if ((monthNum == 10 && dayNum >= 23) || (monthNum == 11 && dayNum <= 21 )){
		astroSign = '<br><br><h2>October 23 - November 21</h2> <h3>Pyramids, Egypt</h3><p>You are going to Egypt! The iconic Pyramids of Cairo, the Karnak Temple, the Montazah Palace Gardens of Alexandria, or the Red Sea Coast are some of the famed sites that have attracted tourists from all over the world.</p>';
		displayZodSign('click', 'pyramids');
	}
	//
	//Scorpio 

	else if ((monthNum == 9 && dayNum >= 23) || (monthNum == 10 && dayNum <= 23 )){
		astroSign = '<br><br><h2>September 23 - October 22</h2> <h3>Leaning tower of Pisa, Italy</h3><p>You are travelling to Italy! It is one of the cradles of Western civilization, the home of the Renaissance, design and opera capital of Europe and one of the great vacation locations on earth with cities like Florence, Venice, Rome.</p>';
		displayZodSign('click', 'leaning');
	}
	//
	//Libra

	else if ((monthNum == 8 && dayNum >= 23) || (monthNum == 9 && dayNum <= 22 )){
		astroSign = '<br><br><h2>August 23 - Stepember 22</h2> <h3>Twin Towers, Malaysia</h3><p>You are going to Malaysia! It is popular for longstanding famous features, including diverse wildlife, endless beaches and growing cities, as well as its newest claim to fame, one  the few outposts for Formula One racing fans in Asia.</p>';
		displayZodSign('click', 'twin');
	}
	//
	//Virgo
	
	else if ((monthNum == 7 && dayNum >= 23) || (monthNum == 8 && dayNum <= 22 )){
		astroSign = '<br><br><h2>July 23 - August 22</h2> <h3>London, United Kingdom</h3> <p>You are travelling to the UK! British literature, music, cinema, art, theatre, comedy, media, television, philosophy, architecture and education are important aspects of British culture. It is known to be the cultural superpower of the world</p>';
		displayZodSign('click', 'london');
	}
	//
	//Leo

	else if ((monthNum == 6 && dayNum >= 21) || (monthNum == 7 && dayNum <= 22 )){
		astroSign = '<br><br><h2>June 21 - July 22</h2> <h3>The great wall of China, China</h3><p>You are going to China! China is one of the largest nations in the world and has a deep, rich history. Some of the things that make China so popular are its ancient traditions, culture and medicinal practices.</p>';
		displayZodSign('click', 'wall');
	}
	//
	// Cancer
	else if ((monthNum == 5 && dayNum >= 21) || (monthNum == 6 && dayNum <= 21 )){
		astroSign = '<br><br><h2>May 21 - June 20</h2> <h3>Opera house, Australia</h3><p>You are travelling to Australia. The nation of Australia features unique natural wonders ranging from coral reefs to waterfalls, and it is also home to a host of unique plant and animal species. More than 80 percent of plants, mammals and reptile species in Australia are not found anywhere else in the world. </p>';
		displayZodSign('click', 'opera');
	}
	//
	//Gemini
	//Caused by unstable air 

	else if ((monthNum == 4 && dayNum >= 20) || (monthNum == 5 && dayNum <= 20 )){
		astroSign = '<br><br><h2>April 20 - May 20</h2> <h3>Mosque, Turkey</h3><p>You are going to Turkey! Many people who have not visited Turkey before assume it to be a third world country however there are major cities such as Istanbul, Izmir and Ankara that are a thriving hub for local and international businesses as well as tourism.</p>';
		displayZodSign('click', 'mosque');
	}
	//
	//Taurus
	//reliable

	else if ((monthNum == 3 && dayNum >= 21) || (monthNum == 4 && dayNum <= 19 )){
		astroSign = '<br><br><h2>March 21 - April 19</h2> <h3>Taj Mahal, India</h3> <p>You are travelling to India! India is probably the most culturally diverse country in the world. There are thousands of different cultures followed in the country. Indian languages, religions, dance, music, architecture differ from place to place in the country.</p>';
		displayZodSign('click', 'taj');
	}
	//
	//Aries
	//play dat funky music

	else if ((monthNum == 2 && dayNum >= 19) || (monthNum == 3 && dayNum <= 20 )){
		astroSign = '<br><br><h2>February 19 - March 20</h2> <h3>Eiffel Tower, France</h3><p>You are going to France. It is well-known for its wine and vineyards across the country. The Eiffel Tower is probably the most popular landmark situated in the city of Paris, France. France has amazing food, fashion, art and history</p>';
		displayZodSign('click', 'eiffel');
	}
	//
	//Pisces

	else {
			astroSign = '<br><br><h2>January 20 - February 18</h2> <h3>Christ the redeemer, Brazil</h3><p>You are going to Brazil! Some of the things Brazil is known for most are coffee and festivals. Brazilian coffee is exported all around the globe, and Brazilian festivals are attended by tourists from many countries.</p>';	
					displayZodSign('click', 'christ');
			}
	//
	//Aquarius 

	outputArea.innerHTML = astroSign;
	return false;

}

function highlight() {
	console.log('fade2Content called');
	document.body.classList.remove('blackScreen');
}  

var twinObj = document.getElementById('twin');
var mosqueObj = document.getElementById('mosque');
var londonObj = document.getElementById('london');
var eiffelObj = document.getElementById('eiffel');
var tajObj = document.getElementById('taj');
var wallObj = document.getElementById('wall');

var itzaObj = document.getElementById('itza');
var operaObj = document.getElementById('opera');
var leaningObj = document.getElementById('leaning');
var burjObj = document.getElementById('burj');
var pyramidsObj = document.getElementById('pyramids');
var christObj = document.getElementById('christ');



twinObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'twin');
}, false)

mosqueObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'mosque');
}, false)

londonObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'london');
}, false)


eiffelObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'eiffel');
}, false)

tajObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'taj');
}, false)

wallObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'wall');
}, false)

itzaObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'itza');
}, false)

operaObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'opera');
}, false)

leaningObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'leaning');
}, false)

burjObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'burj');
}, false)

pyramidsObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'pyramids');

}, false)

christObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'christ');
}, false)


function displayZodSign(evt, whichOne) {
	console.log('displayZodSign called ' + whichOne);




var row1 = document.getElementById('row1');
var imgArray = row1.children;
var row2 = document.getElementById('row2');
var imgArray2 = row2.children;

	console.log('imgArray is ' + imgArray)
	console.log('imgArray is ' + imgArray.length)
	console.log('imgArray 2 is ' + imgArray[2].tagName)

	//imgArray[0].classList.remove('display');
	//imgArray[3].classList.add('display');

	//Loop through array and remove display class from everything
	for (lp = 0; lp < imgArray.length; lp++) {
		imgArray[lp].classList.remove('active');
	}
	for (lp = 0; lp < imgArray2.length; lp++) {
		imgArray2[lp].classList.remove('active');
	}

	switch (whichOne){
		case 'christ':
			imgArray[0].classList.add('active');
			outputArea.innerHTML = '<br><br><h2>January 20 - February 18</h2> <h3>Christ the redeemer, Brazil</h3><p>You are going to Brazil! Some of the things Brazil is known for most are coffee and festivals. Brazilian coffee is exported all around the globe, and Brazilian festivals are attended by tourists from many countries.</p>';
			playAudio('christs');
			break;
		case 'eiffel':
			imgArray[1].classList.add('active');
			outputArea.innerHTML = '<br><br><h2>February 19 - March 20</h2> <h3>Eiffel Tower, France</h3> <p>You are going to France. It is well-known for its wine and vineyards across the country. The Eiffel Tower is probably the most popular landmark situated in the city of Paris, France. France has amazing food, fashion, art and history</p>';
			playAudio('eiffels');
			break;
		case 'taj':
			imgArray[2].classList.add('active');
			outputArea.innerHTML = '<br><br><h2>March 21 - April 19</h2> <h3>Taj Mahal, India</h3> <p>You are travelling to India! India is probably the most culturally diverse country in the world. There are thousands of different cultures followed in the country. Indian languages, religions, dance, music, architecture differ from place to place in the country.</p>';
			playAudio('tajs');
			break;
		case 'mosque':
			imgArray[3].classList.add('active');
			outputArea.innerHTML = '<br><br><h2>April 20 - May 20</h2> <h3>Mosque, Turkey</h3> <p>You are going to Turkey! Many people who have not visited Turkey before assume it to be a third world country however there are major cities such as Istanbul, Izmir and Ankara that are a thriving hub for local and international businesses as well as tourism.</p>';
			playAudio('mosques');
			break;
		case 'opera':
			imgArray[4].classList.add('active');
			outputArea.innerHTML = '<br><br><h2>May 21 - June 20</h2> <h3>Opera House, Australia</h3><p>You are travelling to Australia. The nation of Australia features unique natural wonders ranging from coral reefs to waterfalls, and it is also home to a host of unique plant and animal species. More than 80 percent of plants, mammals and reptile species in Australia are not found anywhere else in the world.</p>';
			playAudio('operas');
			break;
		case 'wall':
			imgArray[5].classList.add('active');
			outputArea.innerHTML = '<br><br><h2>June 21 - July22</h2> <h3>The great wall of China, China</h3><p>You are going to China! China is one of the largest nations in the world and has a deep, rich history. Some of the things that make China so popular are its ancient traditions, culture and medicinal practices.</p>';
			playAudio('walls');
			break;

		case 'london':
			imgArray2[0].classList.add('active');
			outputArea.innerHTML = '<br><br><h2>July 23 - August 22</h2> <h3>London, United Kingdom</h3><p>You are travelling to the UK! British literature, music, cinema, art, theatre, comedy, media, television, philosophy, architecture and education are important aspects of British culture. It is known to be the cultural superpower of the world</p>';
			playAudio('londons');
			break;
		case 'twin':
			imgArray2[1].classList.add('active');
			outputArea.innerHTML = '<br><br><h2>August 23 - Stepember 22</h2> <h3>Twin Towers, Malaysia</h3> <p>You are going to Malaysia! It is popular for longstanding famous features, including diverse wildlife, endless beaches and growing cities, as well as its newest claim to fame, one  the few outposts for Formula One racing fans in Asia.</p>';
			playAudio('twins');
			break;
		case 'leaning':
			imgArray2[2].classList.add('active');
			outputArea.innerHTML = '<br><br><h2>September 23 - October 22</h2> <h3>Leaning tower of Pisa, Italy</h3> <p>You are travelling to Italy! It is one of the cradles of Western civilization, the home of the Renaissance, design and opera capital of Europe and one of the great vacation locations on earth with cities like Florence, Venice, Rome.</p>';
			playAudio('leanings');
			break;
		case 'pyramids':
			imgArray2[3].classList.add('active');
			outputArea.innerHTML = '<br><br><h2>October 23 - November 21</h2> <h3>Pyramids, Egypt</h3> <p>You are going to Egypt! The iconic Pyramids of Cairo, the Karnak Temple, the Montazah Palace Gardens of Alexandria, or the Red Sea Coast are some of the famed sites that have attracted tourists from all over the world.</p>';
			playAudio('pyramidss');
			break;
		case 'itza':
			imgArray2[4].classList.add('active');
			outputArea.innerHTML = '<br><br><h2>November 22 - December 21</h2> <h3>Itza, Mexico</h3> <p><p>You are travelling to Mexico! Mexico is best known for its kind people, folkloric traditions, spicy food and glorious beaches.</p></p>';
			playAudio('itzas');
			break;
		case 'burj':
			imgArray2[5].classList.add('active');
			outputArea.innerHTML = '<br><br><h2>December 22 - January 20 </h2> <h3>Burj Khalifa, UAE</h3> <p><p>You are travelling to UAE. It houses state-of-the-art hotels and resorts and majestic skyscrapers, including the tallest building in the world today, the Burj Khalifa located in downtown Dubai.</p></p>';
			playAudio('burjs');
			break;
	
	}
}

function playAudio(whichSound) {
  //play sound based on whichSound parameter 
  document.getElementById(whichSound).play();
}












