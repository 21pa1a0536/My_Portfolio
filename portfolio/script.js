// Dark mode toggle
const toggle = document.getElementById('toggleTheme');
const icon = document.getElementById('themeIcon');

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
  icon.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  if (document.documentElement.classList.contains('dark')) {
    icon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// Contact form
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  try {
    const res = await fetch('https://formspree.io/f/meozobkg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      status.textContent = 'Message sent successfully!';
      status.classList.remove('hidden'); status.classList.add('text-green-500'); form.reset();
    } else {
      status.textContent = 'Error sending message.'; status.classList.remove('hidden'); status.classList.add('text-red-500');
    }
  } catch {
    status.textContent = 'Error sending message.'; status.classList.remove('hidden'); status.classList.add('text-red-500');
  }
});

// Floating bubbles
const colors = ['#60a5fa','#3b82f6','#9333ea','#fb923c','#34d399','#f472b6','#facc15'];
const bubbles = document.getElementById('bubbles');
for (let i = 0; i < 20; i++) {
  const b = document.createElement('div');
  const size = Math.random()*40+10;
  b.className='bubble';
  b.style.width=size+'px'; b.style.height=size+'px';
  b.style.left=Math.random()*100+'%';
  b.style.background=colors[Math.floor(Math.random()*colors.length)];
  b.style.animationDuration=10+Math.random()*20+'s';
  b.style.animationDelay=Math.random()*10+'s';
  bubbles.appendChild(b);
}

// Water ripple effect on cursor move
document.addEventListener('mousemove', e => {
  const ripple = document.createElement('div');
  ripple.className = 'cursor-wave';
  ripple.style.top = `${e.clientY}px`;
  ripple.style.left = `${e.clientX}px`;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});
