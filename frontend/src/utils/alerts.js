const Swal = require('sweetalert2')

export const showSuccess = (message) => {
  Swal.fire({
    icon: 'success',
    title: 'Éxito',
    text: message,
    timer: 2000,
    showConfirmButton: false,
  });
};

export const showError = (message) => {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: message,
  });
};

export const showConfirm = async (message) => {
  const result = await Swal.fire({
    title: '¿Estás seguro?',
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, confirmar',
    cancelButtonText: 'Cancelar',
  });
  return result.isConfirmed;
};
