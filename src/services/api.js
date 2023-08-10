// Sweet alert
import Swal from 'sweetalert2'

// Requisição à API
export async function obterCotacao(moeda){
  try {
    const response = await fetch(`https://api.exchangerate.host/latest?base=${moeda}`);
    const data = await response.json();
    if (data.base !== moeda) {
      throw new Error('Moeda não existe');
    }
    console.log(data);
    return data;
  } catch (error) { 
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
    return;
  }
}

export default obterCotacao