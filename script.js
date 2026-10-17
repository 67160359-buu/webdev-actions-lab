const status = document.querySelector('#status');
const helloBtn = document.querySelector('#helloBtn');
const themeBtn = document.querySelector('#themeBtn');

// ปุ่ม Say Hello
helloBtn.addEventListener('click', () => {
  status.textContent = document.body.classList.contains('light')
    ? 'Hello from GitHub Pages! ✨'
    : 'Boo! 👻 Happy Halloween from GitHub Pages!';
});

// ปุ่ม Toggle Theme (จำค่าไว้ในเบราว์เซอร์)
function applyTheme(isLight) {
  document.body.classList.toggle('light', isLight);
  themeBtn.textContent = isLight ? '🎃 Halloween Theme' : '🌸 Light Theme';
  try { localStorage.setItem('theme', isLight ? 'light' : 'halloween'); } catch (e) {}
}

themeBtn.addEventListener('click', () => {
  applyTheme(!document.body.classList.contains('light'));
});

let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
applyTheme(saved === 'light');