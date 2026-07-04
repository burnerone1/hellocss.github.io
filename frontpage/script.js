const themeButton = document.getElementsByClassName('theme-toggle-btn')[0];

// 2. Add an event listener to run code whenever a user clicks it
themeButton.addEventListener('click', () => {
  
  // 3. Toggle the 'dark-theme' class on the body tag.
  // If the class exists, it rips it out (Light mode returns).
  // If the class is missing, it shoves it in (Dark mode activates).
  document.body.classList.toggle('dark-theme');
  
});