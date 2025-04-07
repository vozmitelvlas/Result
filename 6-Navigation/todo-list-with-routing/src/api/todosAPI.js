import apiClient from "../utils/apiClient.js";

export const todosAPI = {
    read: () => apiClient(`/todos/`),
    create: () => apiClient(`/todos/`, 'POST', {title: "Текст задачи", completed: false}),
    deleteById: (id) => apiClient(`/todos/${id}`, 'DELETE'),
    update: (payload) => apiClient(`/todos/${payload.id}`, 'PUT', payload),
    complete: (payload) => apiClient(`/todos/${payload.id}`, 'PATCH', payload),
    getById: (id) => apiClient(`/todos/${id}`)
}