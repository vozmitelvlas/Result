document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id

        remove(id).then(() => {
            event.target.closest('li').remove()
        })
    }
    if (event.target.dataset.type === 'edit') {
        const id = event.target.dataset.id
        const newTitle = prompt('Введите новый заголовок').trim()

        if (newTitle) {
            edit({id, newTitle}).then(() => {
                const li = event.target.closest('li')
                const firstSpan = li.querySelector('span:first-of-type')
                firstSpan.textContent = newTitle
            })
        }
    }
})

async function remove(id) {
    await fetch(`/${id}`, {method: 'DELETE'})
}

async function edit(newNote) {
    await fetch(`/${newNote.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newNote)
    })
}