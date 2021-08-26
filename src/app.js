import './styles/style.css';
import showLoader from './loader';
import Content from './createContent';

class Newsletter {
	constructor() {
		this.document = document;
		this.body = document.body;
		this.container = document.querySelector('.container');
		this.newsletter = this.container.querySelector('.newsletter');
		// Content.createContent(childElem, parentElem, classAttr, template);
	}

	initialContent = () => {
		Content.createContent(
			'',
			this.container,
			'',
			'<h3>Subscribe our newsletter!</h3>'
		);

		this.bodyEvent();
	};

	deleteElemsInContainer = () => {
		while (this.container.firstChild) {
			this.container.removeChild(this.container.firstChild);
		}
	};

	closeBtn = () => {
		if (!this.container.querySelector('.close')) {
			const close = document.createElement('DIV');
			close.classList.add('close');
			close.textContent = 'X';
			this.container.appendChild(close);
			close.addEventListener('mouseenter', e => {
				e.target.classList.add('close-hover');
			});
			close.addEventListener('mouseleave', e => {
				e.target.classList.remove('close-hover');
			});

			close.addEventListener('click', () => {
				this.body.classList.remove('overlay');
				this.deleteElemsInContainer();
				this.initialContent();
			});
		}
	};

	showLoader = () => {
		this.deleteElemsInContainer();
		showLoader();
	};

	createNewsletter = () => {
		Content.createContent(
			'div',
			this.container,
			'newsletter',
			`
			<h3>To stay up-to-date, please subscribe our newsletter!</h3>
				<form id="newsletterForm"">
				<input type="email" id="email" />
				<input type="submit" class="subscribe" value="Subscribe" />
			</form>
			`
		);

		this.closeBtn();
	};

	createConfirmation = () => {
		Content.createContent(
			'div',
			this.container,
			'newsletter',
			`
				<h3>Confirmation of your subscription</h3>
				<p>
					Hey and thank you for your subscription. We send a email to you. Plese check your inbox of your email provider and click the confirmation link to complete the subscription. We appreciate your choice and we promise not to spam you!
				</p>
		`
		);

		this.closeBtn();
	};

	createMessage = msgType => {
		const showMessageDiv = this.document.createElement('DIV');
		showMessageDiv.classList.add('showMessage');
		this.body.appendChild(showMessageDiv);

		switch (msgType) {
			case 'success':
				showMessageDiv.classList.add('show', 'success');
				showMessageDiv.innerHTML =
					'<h4>Sending you email address was successful!</h4>';
				break;
			case 'error':
				showMessageDiv.classList.add('show', 'error');
				showMessageDiv.innerHTML = '<h4>You missing your email address!</h4>';
				break;
			default:
				break;
		}

		if (showMessageDiv.classList.contains('show')) {
			setTimeout(() => {
				showMessageDiv.classList.remove('show');
			}, 4000);
		}
	};

	handleNewsletterSubmit = e => {
		e.preventDefault();
		const emailValue = e.target.email.value;
		if (emailValue.length === 0) {
			this.createMessage('error');
		} else {
			this.container.classList.add('small');
			this.showLoader();
			setTimeout(() => {
				this.container.classList.remove('small');
				this.deleteElemsInContainer();
				this.createMessage('success');
				this.createConfirmation();
			}, 1500);
		}
	};

	showNewsletter = () => {
		this.deleteElemsInContainer();

		this.createNewsletter();
		this.body.removeEventListener('click', this.showNewsletter);

		this.body.classList.add('overlay');

		const subscribeForm = this.container.querySelector('#newsletterForm');

		subscribeForm.addEventListener('submit', this.handleNewsletterSubmit);
	};

	bodyEvent = () => {
		this.body.addEventListener('click', e => {
			if (e.target.classList.contains('container')) this.showNewsletter();
		});
	};
}

const newsletter = new Newsletter();
newsletter.initialContent();
