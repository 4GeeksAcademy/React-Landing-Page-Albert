import React from "react";

//include images into your bundle
import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import Card from './Card'
import Footer from './footer'

//create your first component
const Home = () => {
	return (
		<div>
          <Navbar />
		  <div className="cnt1 container-fluid p-5 mt-5 d-flex rounded-2" id="Jumbo">
		  <Jumbotron />
		  </div>
		  <h1 className="gods d-flex justify-content-center text-light pt-5 mt-2 mb-5">GODS</h1>
		  <div className="godClass container d-flex flex-row ps-5 pt-3 align-items-center">
			<img className="imgGod" src="https://webcdn.hirezstudios.com/smite2-cdn/t_Egyptian_Pantheon_white_c5cd87a8be.png" alt="egypt" />
			<h2 className="text-light ps-3 mt-2">EGYPT</h2>
			</div>
		  	<div className="cnt2 container d-flex flex-row justify-content-between gap-4 p-5">
		  		<Card img="https://static.wikia.nocookie.net/smite6648/images/4/44/Anhur.png/revision/latest?cb=20141107125522&path-prefix=es" h5="ANHUR"/>
		  		<Card img="https://static.wikia.nocookie.net/smite6648/images/7/7d/Anubis_Cl%C3%A1sico.png/revision/latest?cb=20150520164559&path-prefix=es" h5="ANUBIS"/>
		  		<Card img="https://static.wikia.nocookie.net/smite6648/images/4/41/Geb.png/revision/latest?cb=20141115012106&path-prefix=es" h5="GEB"/>
		  		<Card img="https://static.wikia.nocookie.net/smite_gamepedia/images/6/62/SkinArt_NeithS2_Default.jpg/revision/latest/scale-to-width-down/340?cb=20250123215807" h5="NEITH"/>
		  </div>
		  <div className="godClass container d-flex flex-row ps-5 align-items-center">
			<img className="imgGod" src="https://static.wikia.nocookie.net/metamorphoses/images/d/d3/PlaceholderImage.png/revision/latest?cb=20210705182718" alt="greek" />
			<h2 className="mt-2 ps-3 text-light">GREEK</h2>
			</div>
		  <div className="cnt2 container d-flex flex-row justify-content-between gap-4 p-5">
		  	<Card img="https://static.wikia.nocookie.net/smite_gamepedia/images/3/31/SkinArt_AresS2_Default.jpg/revision/latest?cb=20250122200013" h5="ARES"/>
		  	<Card img="https://static.wikia.nocookie.net/smite_gamepedia/images/2/2a/SkinArt_AthenaS2_Default.jpg/revision/latest?cb=20250123214826" h5="ATHENA"/>
		  	<Card img="https://static.wikia.nocookie.net/smite_gamepedia/images/f/fb/SkinArt_HadesS2_Default.jpg/revision/latest?cb=20250123215629" h5="HADES"/>
		  	<Card img="https://www.tacter.com/_next/image?url=https%3A%2F%2Fassets.tacter.com%2Fimages%2Fsmite-2%2Fgods%2Fsplashes%2Fmedusa.webp&w=3840&q=75" h5="MEDUSA"/>
		  </div>
		  <div className="godClass container d-flex flex-row ps-5 align-items-center">
			<img className="imgGod" src="https://static.wikia.nocookie.net/cookie-pantheon/images/1/18/NewUI_Pantheon_Roman.png/revision/latest?cb=20190519195317" alt="ROMAN" />
			<h2 className="text-light ps-3 mt-2">ROMAN</h2>
			</div>
		  <div className="cnt2 container d-flex flex-row justify-content-between gap-4 p-5">
		  	<Card img="https://static.wikia.nocookie.net/smite_gamepedia/images/5/53/SkinArt_BacchusS2_Default.jpg/revision/latest?cb=20250123214948" h5="BACCHUS"/>
		  	<Card img="https://static.wikia.nocookie.net/smite_gamepedia/images/5/53/SkinArt_BellonaS2_Default.jpg/revision/latest?cb=20250123215345" h5="BELLONA"/>
		  	<Card img="https://www.tacter.com/_next/image?url=http%3A%2F%2Fcontent.tacter.com%2Fpublic%2Fguides%2F94174eb8-77a0-4084-bb8c-2f5f1d87941c%2F85b86eda-2346-4252-926f-0d1ad97eed84.png&w=3840&q=75" h5="CUPID"/>
		  	<Card img="https://www.tacter.com/_next/image?url=http%3A%2F%2Fcontent.tacter.com%2Fpublic%2Fguides%2Ffc4e9260-26fb-4d07-bc19-5fd068f91edb%2Fed74694d-9a1a-42ed-930d-9ab4f0713028.png&w=3840&q=75" h5="HERCULES"/>
		  </div>
		  <div className="footer container-fluid d-flex align-items-end">
			<Footer />
		  </div>
		</div>
	);
};

export default Home;