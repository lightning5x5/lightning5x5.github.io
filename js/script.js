function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
}

// Easter egg
var clickCount = 0;
var lastClickTime = 0;
var svgImage = document.getElementById('clickable-svg');
var clickTimeout = 3000;

svgImage.addEventListener('click', function() {
  var currentTime = new Date().getTime();

  // 前回のクリックから3秒以上経過していたらカウンターをリセット
  if (currentTime - lastClickTime > clickTimeout) {
    clickCount = 0;
  }

  lastClickTime = currentTime;
  clickCount++;

  if (clickCount === 5) {
    alert('Super Tofu Mode!');
    document.body.style.fontFamily = 'Tofu';
    var elements = document.querySelectorAll('.font-terminal');
      elements.forEach(function(element) {
        element.style.fontFamily = 'Tofu';
      });
    clickCount = 0;
  }
});
