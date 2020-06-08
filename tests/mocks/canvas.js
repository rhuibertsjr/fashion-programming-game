import { JSDOM } from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const exposedProperties = ['window', 'navigator', 'document'];
const { document } = (new JSDOM('', { url: 'https://your-website-mock.com/' })).window;
global.document = document;
global.window = document.defaultView;
global.requestAnimationFrame = (callback) => {
	setTimeout(callback, 0);
};

Object.keys(document.defaultView).forEach((property) => {
	if (typeof global[property] === 'undefined') {
		exposedProperties.push(property);
		global[property] = document.defaultView[property];
	}
});

global.window.HTMLCanvasElement.prototype.getContext = () => {
	return {
		fillRect: () => {},
		clearRect: () => {},
		getImageData: (x, y, w, h) => {
			return {
				data: new Array(w * h * 4),
			};
		},
		putImageData: () => {},
		createImageData: () => {
			return [];
		},
		setTransform: () => {},
		drawImage: () => {},
		save: () => {},
		fillText: () => {},
		restore: () => {},
		beginPath: () => {},
		moveTo: () => {},
		lineTo: () => {},
		closePath: () => {},
		stroke: () => {},
		translate: () => {},
		scale: () => {},
		rotate: () => {},
		arc: () => {},
		fill: () => {},
		measureText: () => {
			return {
				width: 0,
			};
		},
		transform: () => {},
		rect: () => {},
		clip: () => {},
	};
};

global.window.HTMLCanvasElement.prototype.toDataURL = () => {
	return '';
};


global.navigator = {
	userAgent: 'node.js',
};