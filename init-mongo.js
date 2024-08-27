db = db.getSiblingDB('store')
db.createUser({
    user: 'appUser', // Замените на желаемое имя пользователя
    pwd: 'root34', // Замените на желаемый пароль
    roles: [
      { role: 'readWrite', db: 'store' }
    ]
})