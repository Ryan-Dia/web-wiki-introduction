document.addEventListener('DOMContentLoaded', function () {
  const card = document.getElementById('card');

  card.addEventListener('click', function () {
    card.classList.toggle('flipped'); // 클래스 추가/제거로 뒤집기
  });
});
