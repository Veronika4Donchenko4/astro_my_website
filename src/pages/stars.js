document.addEventListener('DOMContentLoaded', () => {
    const starfield = document.querySelector('.starfield');
    const numStars = 100; // Количество звезд
  
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Задаем случайное положение и размер для каждой звезды
      const size = Math.random() * 3 + 1; // Размер звезды от 1px до 4px
      const leftPosition = Math.random() * 100; // Положение по горизонтали в процентах
  
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${leftPosition}vw`;
      
      // Анимация для каждой звезды
      const animationDuration = Math.random() * 5 + 5; // Продолжительность анимации от 5 до 10 секунд
      star.style.animationDuration = `${animationDuration}s`;
      
      // Добавляем звезду на страницу
      starfield.appendChild(star);
    }
  });
  