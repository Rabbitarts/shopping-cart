const inputFieldEl = document.getElementById('input-field')
const addButtonEl = document.getElementById('add-button')
const shoppingListEl = document.getElementById('shopping-list')

addButtonEl.addEventListener('click', function () {
	let inputValue = inputFieldEl.value

	console.log(inputValue)

	clearInputFieldEl()
	appendItemToShoppingListEl(inputValue)
})

function clearInputFieldEl() {
	inputFieldEl.value = ''
}

function appendItemToShoppingListEl(itemValue) {
	let newEl = document.createElement('li')

	newEl.textContent = itemValue

	newEl.addEventListener('click', function () {
		remove(newEl)
	})

	shoppingListEl.appendChild(newEl)
}

function remove(el) {
	el.parentNode.removeChild(el)
}