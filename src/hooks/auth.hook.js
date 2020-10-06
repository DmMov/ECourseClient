import { useState, useCallback, useEffect } from 'react';
import { set, getJSON, remove } from 'js-cookie';

const storageName = 'userData';

export const useAuth = () => {
  const [userData, setUserData] = useState(null);
  const [ready, setReady] = useState(null);

  const login = useCallback((data) => {
    setUserData(data);

    set(storageName, data);
  }, []);

  const logout = useCallback(() => {
    setUserData(null);

    remove(storageName);
  }, []);

  useEffect(() => {
    const data = getJSON(storageName);

    if (data && data.jwtToken) {
      login(data)
    }

    setReady(true);
  }, [login]);

  return { login, logout, userData, ready };
}