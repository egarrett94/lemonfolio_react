import React, { Component } from 'react'; 
import Nav from './Nav';
import DesignTeaser from './DesignTeaser';
import Arya from './arya.jpg';
import Alex from './alex.jpg';
import Ron from './ron.jpg';
import Garrosh from './garrosh.jpg';
import Han from './han.jpg';
import PineOne from './pinecone1.jpg';
import PineTwo from './pinecone2.jpg';
import Link from './link.jpg';

const graphiteMats = ['Staedtler Mars drafting mechanical pencils, 0.3mm, 0.5mm', 'White gel pens', 'Gold epoxy', 'Copic markers', 'Extra-smooth Bristol board', 'Blending stumps']
const gameMats = ['Koi watercolor field kit', 'Canister brush', 'Micron technical pens', 'White gel pens', 'Gouache', 'Strathmore watercolor paper', "Moleskine watercolor journal"]
const paintingMats = ['Winsor and Newton acrylic paint', 'Winsor and Newton brushes', 'White gel pens', 'Extra-smooth Bristol board']
const botanicalMats = ['Extra-smooth Bristol board', 'Strathmore mixed media paper', 'Micron technical pens']


class Design extends Component {
	render() {

		const graphiteList = graphiteMats.map((tool) =>
		  <li>{tool}</li>
		);

		const gameList = gameMats.map((tool) =>
		  <li>{tool}</li>
		);

		const paintingList = paintingMats.map((tool) =>
		  <li>{tool}</li>
		);

		const botanicalList = botanicalMats.map((tool) =>
		  <li>{tool}</li>
		);


		return(
			<div className='projects-page'>
				<Nav />
				<DesignTeaser 
					imgurl1={Alex} 
					imgurl2={Han} 
					name='Graphite Portraiture' 
					description="Generally taking about 10-20 hours and absolutely chock full of detail, my graphite portraits are my most often ordered works. I find that the most important part of these are the eyes, because eyes tend to be the way to determine the overall emotion of the piece. This is the type of work I've been producing since I was 14 years old."
					materials={graphiteList}
					/> 
				<DesignTeaser 
					imgurl1={Garrosh}
					imgurl2={Link} 
					name='Game Art'
					description="It's relatively rare that I get to work on work like this, but it's always enjoyable when I do. They're usually smaller projects for me, taking only 3-10 hours depending on the intricacy. Having grown up on video games, I get excited to embrace my roots a little bit with projects like this."
					materials={gameList}/> 
				<DesignTeaser 
					imgurl1={Arya} 
					imgurl2={Ron} 
					name='Acrylic Paintings' 
					description="I was always terrified of painting. I had a preconceived notion that it was too permanent, too complex--but then I painted. I fell in love with it. There are so many different techniques to try, and there's no right way to do it! It helped me become a bit more fearless with my art rather than remaining complacent within the rigidity and comfort of my monochromatic graphite portraits."
					materials={paintingList}/>
				<DesignTeaser 
					imgurl1={PineOne} 
					imgurl2={PineTwo} 
					name='Botanical Illustrations' 
					description="These are my favorite artworks to create. The intrinsic, effortless beauty of plants is incredibly forgiving to an artist, allowing for mistakes and imperfections that, if anything, augment the overall experience of the final product. I love the therapeutic, repetitive process of cross-hatching, too."
					materials={botanicalList}/>
			</div>
		)
	}
}


export default Design;