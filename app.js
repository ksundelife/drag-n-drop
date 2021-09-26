const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

for (const placeholder of placeholders) {
	placeholder.addEventListener('dragover', dragOver); // елемент находится над плейсхолдером
	placeholder.addEventListener('dragenter', dragEnter); // заходим на территорию плейсхолдера
	placeholder.addEventListener('dragleave', dragLeave); // перетащили но вышли с территории плейсхолдера
	placeholder.addEventListener('drop', dragDrop); // отпустили карточку

}
function dragStart(event) {
	event.target.classList.add('hold');
	setTimeout(() => {
		event.target.classList.add('hide');
	}, 0)
}

function dragEnd(event) {
	event.target.classList.remove('hold', 'hide');
	// или перетереть все классы у элемента и добавить только нужный
	// event.target.className = 'item';
}

function dragOver(event) {
	event.preventDefault();
}

function dragEnter(event) {
	event.target.classList.add('hovered');
}

function dragLeave(event) {
	event.target.classList.remove('hovered');
}

function dragDrop(event) {
	event.target.classList.remove('hovered');
	event.target.append(item);
}