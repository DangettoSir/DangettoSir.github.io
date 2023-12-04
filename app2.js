window.onload = chechAccessMiddleware

function checkAccessMiddleware() {
  const access_token = localStorage.getItem('access_token');

  if (!access_token) {
    // Перенаправляем на страницу логина на первом сайте
    window.location.href = 'https://dangettosir.github.io/idex1.html';
    return;
  }

  // Проверка валидности токена доступа на Java-сервере
  fetch('http://your-java-server.com/validate', {
    method: 'POST',
    body: JSON.stringify({ access_token }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      // Токен доступа валиден, продолжаем обработку запроса
      return response.json();
    } else {
      throw new Error('Access token validation failed');
    }
  })
  .then(data => {
    // Токен доступа валиден, продолжаем обработку запроса
    someHandler();
  })
  .catch(error => {
    // Токен доступа недействителен, перенаправляем на страницу логина на первом сайте
    console.error(error);
    window.location.href = 'http://your-first-site.com/login';
  });
}
