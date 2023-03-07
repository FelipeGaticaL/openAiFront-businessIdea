import apiClient from '../services/api.services';

export const postPrompt = async (values) => {

  try {
    const { data } = await apiClient.post('/user/', values);
    return data;
  } catch ({ error }) {
    return error.message;
  }
};


