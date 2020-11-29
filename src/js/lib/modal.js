import Swal from 'sweetalert2'

export const modal = Swal.mixin({
  position: 'center',
  showCancelButton: true,
  backdrop: false,
  target: document.querySelector('.animate-layer')
})
