import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

class HttpService {
	private apiURL: string;

	constructor(apiURL: string) {
		this.apiURL = apiURL;
	}

	private async request<T>(
		method: string,
		url: string,
		data?: any,
		config?: AxiosRequestConfig
	): Promise<T> {
		try {
			const response: AxiosResponse<T> = await axios.request<T>({
				method,
				url: `${this.apiURL}${url}`,
				data,
				...config
			});

			return response.data;
		} catch (error) {
			throw this.handleRequestError(error as any);
		}
	}

	private handleRequestError(error: AxiosError) {
		if (error.response) {
			// The request was made, and the server responded with a status code outside the range of 2xx
			console.error('Request failed with response:', error.response.data);
		} else if (error.request) {
			// The request was made, but no response was received
			console.error(
				'Request was made, but no response was received:',
				error.request
			);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.error('Error setting up the request:', error.message);
		}

		throw error;
	}

	public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
		return this.request<T>('GET', url, undefined, config);
	}

	public async post<T>(
		endpoint: string,
		data?: any,
		config?: AxiosRequestConfig
	): Promise<T> {
		return this.request<T>('POST', endpoint, data, config);
	}

	public async put<T>(
		endpoint: string,
		data?: any,
		config?: AxiosRequestConfig
	): Promise<T> {
		return this.request<T>('PUT', endpoint, data, config);
	}

	public async delete<T>(
		endpoint: string,
		config?: AxiosRequestConfig
	): Promise<T> {
		return this.request<T>('DELETE', endpoint, undefined, config);
	}
}

export default HttpService;
