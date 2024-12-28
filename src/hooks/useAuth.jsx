import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        await axios.get('http://localhost:5000/api/session', { withCredentials: true });
      } catch {
        navigate('/login');
      }
    };
    checkSession();
  }, [navigate]);
};

export default useAuth;
