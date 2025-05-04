document.addEventListener('DOMContentLoaded', () => {
  const cookieOptions = document.querySelectorAll('.cookie-option');
  const resultImg = document.getElementById('result-img');
  const blessingText = document.getElementById('blessing-text');

  if (cookieOptions.length > 0) {
    cookieOptions.forEach(option => {
      option.addEventListener('click', () => {
        localStorage.setItem('selectedCookie', option.dataset.id);
        window.location.href = 'result.html';
      });
    });
  }

  if (resultImg && blessingText) {
    const selected = localStorage.getItem('selectedCookie');
    if (selected) {
      resultImg.src = `assets/${selected}.png`;
      // Placeholder blessings
      const blessings = {
        cookie1: '願你在星海中永遠找到彼此。',
        cookie2: '宇宙的每一次閃耀，都為你們祝福。',
        cookie3: '兩心如星，恆久閃耀於銀河彼端。'
      };
      blessingText.textContent = blessings[selected] || '謝謝你的選擇。';
    }
  }
});
