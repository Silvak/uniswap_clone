import axios from "axios";
import { useEffect, useState } from "react"
// Este es un hook personalizado de React llamado useAxios que utiliza la biblioteca Axios para hacer solicitudes HTTP a una API. Toma un parámetro que representa la URL de la API y devuelve un objeto que contiene la respuesta, el estado de carga y un posible error.
// El hook establece los valores predeterminados de Axios, establece los estados de respuesta, carga y error con useState, y define una función fetchData que utiliza Axios para hacer una solicitud HTTP y establecer el estado de respuesta.
// El hook también utiliza useEffect para llamar a fetchData cuando se monta el componente. En resumen, el hook useAxios permite a los desarrolladores hacer solicitudes HTTP a una API de forma fácil y sencilla en un componente React.


const useAxios = (param) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

  const fetchData = async (param) => {
    try {
        setLoading(true);
      const result = await axios(param);
      setResponse(result.data);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(param);
  }, []);

  return {
    response, loading, error
  }
}

export default useAxios

