if (typeof window !== 'undefined') {
	document.addEventListener('DOMContentLoaded', () => {
		const starfield = document.querySelector('.starfield');
		const numStars = 100;

		for (let i = 0; i < numStars; i++) {
			const star = document.createElement('div');
			star.className = 'star';

			const size = Math.random() * 3 + 1;
			const leftPosition = Math.random() * 100;

			star.style.width = `${size}px`;
			star.style.height = `${size}px`;
			star.style.left = `${leftPosition}vw`;

			const animationDuration = Math.random() * 5 + 5;
			star.style.animationDuration = `${animationDuration}s`;

			starfield.appendChild(star);
		}
	});
}
