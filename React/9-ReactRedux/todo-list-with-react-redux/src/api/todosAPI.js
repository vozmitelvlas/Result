import apiClient from "../utils/apiClient.js";

export const todosAPI = {
    read: async () => await apiClient(`/todos/`),
    create: async () => await apiClient(`/todos/`, 'POST', {title: "Текст задачи", completed: false}),
    deleteById: async (id) => await apiClient(`/todos/${id}`, 'DELETE'),
    update: async (payload) => await apiClient(`/todos/${payload.id}`, 'PUT', payload),
    complete: async (payload) => await apiClient(`/todos/${payload.id}`, 'PATCH', payload),
    getById: async (id) => await apiClient(`/todos/${id}`)
}