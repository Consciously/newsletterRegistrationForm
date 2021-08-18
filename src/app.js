import './style.css';

window.addEventListener('DOMContentLoaded', () => {
	const init = () => {
		const { body } = document;
		const container = document.querySelector('.container');

		const initialContent = () => {
			const initText = `
				<h3>Nothing here yet!</h3>
			`;

			container.innerHTML = initText;
		};

		const deleteElemsInContainer = () => {
			while (container.firstChild) {
				container.removeChild(container.firstChild);
			}
		};

		const closeBtn = () => {
			if (!container.querySelector('.close')) {
				const close = document.createElement('DIV');
				close.classList.add('close');
				close.textContent = 'X';
				container.appendChild(close);
				close.addEventListener('mouseenter', e => {
					e.target.classList.add('close-hover');
				});
				close.addEventListener('mouseleave', e => {
					e.target.classList.remove('close-hover');
				});

				close.addEventListener('click', () => {
					deleteElemsInContainer();
					initialContent();
					body.classList.remove('overlay');
				});
			}
		};
		const createNewsletter = () => {
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
			closeBtn();
		};

		const createConfirmation = () => {
			const confirmation = `
				<div class="newsletter">
					<h3>Confirmation of your subscription</h3>
					<p>
						Hey and thank you for your subscription. We send a email to you. Plese check your inbox of your email provider and click the confirmation link to complete the subscription. We appreciate your choice and we promise not to spam you!
					</p>
				</div>
			`;

			container.innerHTML += confirmation;
			closeBtn();
		};

		const handleNewsletterSubmit = e => {
			e.preventDefault();
			deleteElemsInContainer();
			createConfirmation();
		};

		const showNewsletter = () => {
			deleteElemsInContainer();

			createNewsletter();
			body.removeEventListener('click', showNewsletter);

			body.classList.add('overlay');
			const subscribeForm = document.querySelector('#newsletterForm');

			subscribeForm.addEventListener('submit', handleNewsletterSubmit);
		};

		body.addEventListener('click', showNewsletter);

		initialContent();
	};

	init();
});
