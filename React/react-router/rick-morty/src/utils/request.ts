import {API_BASE_URL} from "../config";

const BASE_URL = `${API_BASE_URL}/api`;

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface RequestOptions {
    method?: HttpMethod;
    body?: unknown;
    headers?: Record<string, string>;
}

export const request = async <T>(
    endpoint: string,
    {
        method = 'GET',
        body = null,
        headers = {}
    }: RequestOptions = {}
): Promise<T> => {
    const requestHeaders: Record<string, string> = {...headers};
    let requestBody: BodyInit | null = null;

    if (body instanceof FormData) {
        requestBody = body;
    } else if (body !== null) {
        requestHeaders['Content-Type'] = 'application/json';
        requestBody = JSON.stringify(body);
    }

    let response: Response;

    try {
        response = await fetch(`${BASE_URL}${endpoint}`, {
            method,
            headers: requestHeaders,
            body: requestBody,
        });
    } catch {
        throw new Response(
            JSON.stringify({message: 'Network error'}),
            {
                status: 503,
                statusText: 'Service Unavailable',
                headers: {'Content-Type': 'application/json'},
            }
        );
    }

    if (response.status === 204) {
        return null as T;
    }

    if (!response.ok) {
        let errorData: unknown;

        try {
            errorData = await response.json();
        } catch {
            errorData = {
                message: response.statusText
            };
        }

        throw new Response(
            JSON.stringify(errorData),
            {
                status: response.status,
                statusText: response.statusText,
                headers: {'Content-Type': 'application/json'},
            }
        );
    }

    return await response.json();
};