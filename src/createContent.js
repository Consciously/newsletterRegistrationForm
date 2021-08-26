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
				cElem.insertAdjacentHTML('beforeend', template);
			} else {
				parentElem.insertAdjacentHTML('beforeend', template);
			}
		}
		if (childElem) {
			parentElem.appendChild(cElem);
		}
	};
}
