function startSession() {
  const sound = document.getElementById('bgSound');
  sound.play();
  alert("Ты перезагружаешься... 60 секунд тишины.");
  setTimeout(() => {
    sound.pause();
    alert("Готово. Иди дальше.");
  }, 60000);
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
