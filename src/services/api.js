// Sweet alert
import Swal from 'sweetalert2'

// Requisição à API
export async function obterCotacao(moeda){
  try {
    const response = await fetch(`https://api.exchangerate.host/latest?base=${moeda}`);
    if (!response) {
        throw new Error('Error');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) { 
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
  }
}

export default obterCotacao