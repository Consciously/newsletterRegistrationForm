export default class Content {
	static createContent = (childElem, parentElem, classAttr, template) => {
		let cElem;

		if (childElem !== '') {
			cElem = document.createElement(childElem);
			if (classAttr) {
				cElem.classList.add(classAttr);
			}
		}

		if (template !== '') {
			if (childElem) {
				cElem.insertAdjacentHTML('afterbegin', template);
			} else {
				parentElem.insertAdjacentHTML('afterbegin', template);
			}
		}
		if (childElem) {
			parentElem.appendChild(cElem);
		}
	};
}
