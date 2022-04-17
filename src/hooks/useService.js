import { useEffect, useState } from 'react';

const useService = () => {
  const [services, setServices] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    fetch(
      'https://raw.githubusercontent.com/SyedMonir/FakeData/main/services.json'
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setSpinner(false);
      });
  }, []);
  return [services, spinner];
};

export default useService;
