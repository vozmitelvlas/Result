const API_BASE_URL = 'http://localhost:3000'

const apiClient = async (endpoint, method = 'GET', body = null, customHeaders = {}) => {
    const defaultOptions = {
        method: method.toUpperCase(),
        credentials: 'include',
        headers: {},
    }
    if (body !== null) {
        defaultOptions.headers['Content-Type'] = 'application/json'
        defaultOptions.body = JSON.stringify(body)
    }

    defaultOptions.headers = {...defaultOptions.headers, ...customHeaders}

    try {
        const response =  await fetch(`${API_BASE_URL}${endpoint}`, defaultOptions)
        return await response.json()
    } catch (error) {
        console.log(error)
        throw error
    }
}
export default apiClient
