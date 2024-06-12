export async function getHibernadero(): Promise<void> {
  const url = 'http://179.1.133.13/apiOrion/api/v1/hibernadero/buscarTodos'; // URL del endpoint
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJST09UIiwiaWF0IjoxNzE4MjA4NDcxLCJleHAiOjE3MTgyMTAyNzF9.4lj0URQGk2tcmTIkPAyxPlinSdO9uI74K5G98DeSybHb0Bt2MMPb5RxghH4e6Z4Z2X3imlrDDw5zPc8lwS4vgQ'; // Tu token de autorización

  try {
    const response = await fetch(url, {
      method: 'GET', // O 'POST', 'PUT', 'DELETE', dependiendo de la acción requerida
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' // Agrega otros headers según sea necesario
      }
    });

    if (!response.ok) {
      throw new Error('Error en la red: ' + response.statusText);
    }

    const data = await response.json();
    console.log(data); // Procesa la respuesta
  } catch (error) {
    console.error('Hubo un problema con la solicitud fetch:', error);
  }
}
