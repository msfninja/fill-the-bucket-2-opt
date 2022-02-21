/*
 * Created by SwapniL.
 * Script for Fill The Bucket 2 (Optimised).
 *
 * Revised by msfninja.
*/

const
	// querySelector
	q = selector => { return document.querySelector(selector); },

	// querySelectorAll
	qa = selector => { return document.querySelectorAll(selector); };

// Conditions for winning the game are below, but minified and
// obfuscated. Otherwise anyone can cheat by looking at the source
// code for answers.
const condition = _0x155eb4 => {
	return !(0xb4!==_0x155eb4[0x2]||0xb4!==_0x155eb4[0x3]||0x0!==_0x155eb4[0x6]&&0xb4!==_0x155eb4[0x6]||0x5a!==_0x155eb4[0x7]||0x0!==_0x155eb4[0x8]&&0xb4!==_0x155eb4[0x8]||0x5a!==_0x155eb4[0x9]||0xb4!==_0x155eb4[0xa]||0xb4!==_0x155eb4[0xb]);
};

// Define an array that holds the pipe's rotation.
const rotation = [];

// Add 13 elements to the array.
for (var i = 12; i >= 0; i--) rotation.push(0);

const p = qa('svg');

let filled = false;

const fillTheBucket = () => {

	if (!filled) {
		filled = true;

		// Define some elements.
		const
			pipe = qa('.filled'),
			revpipe = qa('.revfilled'),
			water = q('#water');

		// Validate the pipe configuration.
		if (condition(rotation)) {
			window.alert('Game over.\nYou won!');

			// Fill the bucket after 25 seconds...
			setTimeout(() => {
				q('#bucket').style.backgroundColor = '#87ceebff';
			}, 25000);

			const pipes = qa('path');

			// Pipes...
			[
				pipes[0], pipes[2], pipes[4], pipes[6], pipes[8], pipes[10], pipes[13], pipes[15], pipes[18], pipes[20], pipes[22], pipes[24]
			].forEach(pipe => {
				pipe.classList.remove('pipe');
				pipe.classList.add('path');
			});

			pipe[0].classList.add('fill-animation-1');
			pipe[1].classList.add('fill-animation-2');
			pipe[3].classList.add('fill-animation-6');
			pipe[5].classList.add('fill-animation-4');
			pipe[6].classList.add('fill-animation-7');
			pipe[7].classList.add('fill-animation-8');

			if (rotation[6] === 0) pipe[2].classList.add('fill-animation-3');
			else revpipe[0].classList.add('fill-animation-3');

			if (rotation[8] === 0) pipe[4].classList.add('fill-animation-5');
			else revpipe[1].classList.add('fill-animation-5');

			qa('svg').forEach(element => { element.removeAttribute('onclick'); });

			water.classList.add('animateWater');
		}
		else { window.alert('Game over.\nYou lost...'); }
	}
}

const rotate = index => {
	let deg = rotation[index];

	// Define a factor by which to rotate.
	let factor = deg > 180 ? 0 : deg + 90;

	// Add an appropriate class and reassign the rotation array item
	// with the factor.
	let element = qa('svg')[index - 1];
	element.classList.remove(...element.classList);
	element.classList.add(`r${factor}`);
	rotation[index] = factor;
}
