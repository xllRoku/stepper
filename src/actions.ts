import axios from 'axios';

interface HTTPResponse {
	data: any;
}

export const post = (url: string, data: Object): Promise<HTTPResponse> => {
	return axios.post(url, data);
};
