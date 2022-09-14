export const Modal = (body) =>
  Swal.mixin({
    target: body,
    backdrop: false,
    input: 'text',
    inputLabel: '下载地址',
    confirmButtonText: '确定',
    showCancelButton: true,
    cancelButtonText: '取消'
  })

export const Toast = (body) => Swal.mixin({
  target: body,
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
