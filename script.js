// Инициализируем состояние приложения
const state = {
	notes: [],
}

// Получаем элементы из DOM
const noteForm = document.querySelector('form')
const noteTitle = document.querySelector('#note-title')
const noteText = document.querySelector('#note-text')
const notesList = document.querySelector('#notes-list')
const getNote = document.querySelector('#add-note')
getNote.style.background = "darkblue"
document.body.style.background = "#23293C"
const title = document.getElementById('title');
title.style.color = "red"
text.style.color = "purple"
mainTitle.style.color = "pink"
getNote.style.width = "180px"
getNote.style.height = "50px"
getNote.style.border = "none"
getNote.style.color = "white"
noteTitle.style.color = 'gold'
noteText.style.color = 'gold'


// Функция для добавления новой заметки
function addNote() {
	// Получаем заголовок и текст заметки из формы
	const title = noteTitle.value
	const text = noteText.value

	// Создаем новую заметку
	const note = { title, text }

	// Добавляем заметку в состояние приложения
	state.notes.push(note)

	// Обновляем список заметок на странице
	renderNotes()

	// Очищаем форму для добавления новой заметки
	noteTitle.value = ''
	noteText.value = ''
}

// Функция для удаления заметки
function deleteNote(index) {
	// Удаляем заметку из состояния приложения
	state.notes.splice(index, 1)

	// Обновляем список заметок на странице
	renderNotes()
}

// Функция для отображения списка заметок на странице
function renderNotes() {
	// Очищаем список заметок на странице
	notesList.innerHTML = ''

	// Добавляем каждую заметку в список
	state.notes.forEach((note, index) => {
		const li = document.createElement('li')
		const h2 = document.createElement('h2')
		const p = document.createElement('p')
		const button = document.createElement('button')


li.style.listStyle = "none"
h2.style.color = "blue"
p.style.color = "red"
button.style.width = "180px"
button.style.height = "50px"
getNote.style.color = "white"
button.style.background = "Green"
button.style.border = "none"




		h2.textContent = note.title
		p.textContent = note.text
		button.textContent = 'Delete'

		// Обработчик события для кнопки удаления
		button.addEventListener('click', () => {
			deleteNote(index)
		})

		li.appendChild(h2)
		li.appendChild(p)
		li.appendChild(button)
		notesList.appendChild(li)
	})
}

// Обработчик события для формы добавления заметки
noteForm.addEventListener('submit', event => {
	event.preventDefault()
	addNote()
})

// Инициализация приложения
renderNotes()
