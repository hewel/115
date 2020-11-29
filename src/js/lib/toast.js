import Swal from 'sweetalert2'

export const toast = Swal.mixin({
  toast: true,
  position: 'top',
  showCancelButton: true,
  showConfirmButton: false,
  backdrop: false,
  target: document.querySelector('.animate-layer')
})
