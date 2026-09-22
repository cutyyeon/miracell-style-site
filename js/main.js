// 헤더 스크롤 상태 토글 (실제 사이트의 #header.top-fixed 동작 재현)
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 10) {
    header.classList.add('top-fixed');
  } else {
    header.classList.remove('top-fixed');
  }
});
