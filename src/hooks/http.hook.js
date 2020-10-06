import { useState, useCallback } from 'react';
import axios from 'axios';
import { apiUrl } from '../constants';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method = 'get', data = null, headers = {}) => {
    setLoading(true)
    try {
      console.log('url:', `${apiUrl}/${url}`);
      const response = await axios({ url: `${apiUrl}/${url}`, method, data, headers })
        .then(response => response)
        .catch(error => error.response);

      if (response.status >= 400){
        setError(response.data.detail || "Something went wrong");
        throw new Error(response.data.detail || "Something went wrong");
      }

      setLoading(false);

      return response.data;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  }, []);

  const clearError = () => useCallback(() => setError(null), []);

  return { loading, error, request, clearError };
}