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
        cookie1: '願你的思緒如星辰般閃爍，在宇宙的漩渦中發現獨特的美。',
        cookie2: '願你的情感如彗星般璀璨奔放，在宇宙中留下溫暖的軌跡，照亮每個與你相遇的靈魂。',
        cookie3: '願你的創造力如星環般環繞周身，光芒四射，連接無限可能。',
        cookie4: '願你如蓮花綻放的星球，在宇宙的漣漪中保持內在的平靜與外在的和諧。'
};
      blessingText.textContent = blessings[selected] || '謝謝你的選擇。';
    }
  }
});
