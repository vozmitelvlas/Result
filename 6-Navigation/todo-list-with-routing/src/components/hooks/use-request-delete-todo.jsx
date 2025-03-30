export const useRequestDeleteTodo = (setTodos, idForDelete, closeModal) => {
    const onConfirmDeleting = () => {
        fetch(`http://localhost:3000/todos/${idForDelete}`, {
            method: 'DELETE'
        })
            .then(() => {
                setTodos((prevState) =>
                    prevState.filter((todo) => todo.id !== idForDelete)
                )
            })
            .catch(error => console.log(error))
            .finally(closeModal)
    }

    return {
        onConfirmDeleting
    }
}