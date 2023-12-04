function checkLoginStatus() {
  // Отправляем запрос на первый сайт для проверки статуса пользователя
  fetch('http://website1.com/checkLoginStatus', {
    method: 'GET',
    credentials: 'include'  // Включение передачи куки для авторизации
  })
  .then(response => {
    if (response.ok) {
      // Пользователь залогинен на первом сайте, разрешаем доступ
      // Ваш код для разрешения доступа здесь
      allowAccess();
    } else {
      // Пользователь не залогинен на первом сайте, блокируем доступ
      // Ваш код для блокировки доступа здесь
      blockAccess();
    }
  })
  .catch(error => {
    // Обработка ошибок при запросе
    console.log('Ошибка проверки статуса входа:', error);
  });
}

function allowAccess() {
  // Ваш код для разрешения доступа здесь
  console.log('Доступ разрешен');
  // Например, показать контент для залогиненных пользователей
}

function blockAccess() {
  // Ваш код для блокировки доступа здесь
  console.log('Доступ заблокирован');
  // Например, перенаправить на страницу входа
}
