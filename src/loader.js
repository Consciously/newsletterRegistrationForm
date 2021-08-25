import './styles/loader.css';

const showLoader = () => {
	const container = document.querySelector('.container');
	const loaderDiv = document.createElement('DIV');
	loaderDiv.classList.add('lds-facebook');

	loaderDiv.innerHTML = `
    <div></div><div></div><div></div></div>
  `;

	container.appendChild(loaderDiv);
};

export default showLoader;
