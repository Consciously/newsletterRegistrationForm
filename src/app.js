import './style.css';

window.addEventListener('DOMContentLoaded', () => {
	const init = () => {
		const { body } = document;

		const createInitialContent = () => {
			const container = document.createElement('DIV');
			container.classList.add('container');

			const initText = `
				<h3>Nothing here yet!</h3>
			`;

			container.innerHTML = initText;

			body.appendChild(container);
		};

		const createNewsletter = () => {
			const container = document.createElement('DIV');
			container.classList.add('container');

			const close = document.createElement('DIV');
			close.classList.add('close');
			close.textContent = 'X';

			container.appendChild(close);

			const newsletter = `
				<div class="newsletter">
					<h3>To stay up-to-date, please subscribe our newsletter!</h3>
					<form id="newsletterForm">
						<input type="email" id="email" />
						<input type="submit" class="subscribe" value="Subscribe" />
					</form>
				</div>
			`;

			container.innerHTML += newsletter;

			body.appendChild(container);
			return container;
		};

		const createConfirmation = () => {
			const container = document.createElement('DIV');
			container.classList.add('container');

			const close = document.createElement('DIV');
			close.classList.add('close');
			close.textContent = 'X';

			container.appendChild(close);

			const confirmation = `
				<div class="newsletter">
					<h3>Confirmation of your subscription</h3>
					<p>
						Hey and thank you for your subscription. We send a email to you. Plese check your inbox of your email provider and click the confirmation link to complete the subscription. We appreciate your choice and we promise not to spam you!
					</p>
				</div>
			`;

			container.innerHTML += confirmation;

			body.appendChild(container);
			return container;
		};

		const deleteContainer = () => {
			const container = document.querySelector('.container');
			body.removeChild(container);
		};

		const deleteNewsletter = () => {
			const close = document
				.querySelector('.container')
				.querySelector('.close');

			close.addEventListener('mouseenter', e => {
				e.target.classList.add('close-hover');
			});

			close.addEventListener('mouseleave', e => {
				e.target.classList.remove('close-hover');
			});

			close.addEventListener('click', () => {
				deleteContainer();

				setTimeout(() => {
					// eslint-disable-next-line no-restricted-globals
					location.reload();
				}, 200);
			});
		};

		const handleNewsletterSubmit = e => {
			e.preventDefault();
			deleteContainer();
			createConfirmation();
		};

		const showNewsletter = () => {
			const newsletter = createNewsletter();
			deleteContainer();
			deleteNewsletter();
			body.classList.add('overlay');
			const subscribeForm = newsletter.querySelector('#newsletterForm');

			subscribeForm.addEventListener('submit', handleNewsletterSubmit);
		};

		createInitialContent();

		body.addEventListener('click', showNewsletter);
	};

	init();
});
