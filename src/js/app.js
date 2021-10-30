import { Scene, WebGLRenderer } from 'three';
import Camera from './camera'
import Cone from './cone';

const scene = new Scene();
const camera = new Camera();
const renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.add( Cone(0xff00ff) );



const animate= () => {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();