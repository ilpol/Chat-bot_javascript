# Chat-bot on javascript
![](https://github.com/ilpol/Chat-bot_javascript/blob/master/chat-bot.gif)
Чтобы чат-бот мог показывать погоду необходимо зарегистрироваться на https://home.openweathermap.org/users/sign_up , найти в настройках ключ и вставить его в файл Chat-bot.js на 81 строке. <br/>

* Команды для чат-бота:<br/>
    * /start — начало общения с чат ботом. Ответ: «Привет, меня зовут Чат-бот, а как зовут тебя?». Если ввели другое значение, чат-бот должен отвечать: «Введите команду /start, для начала общения»<br/>
    * /name: Alex — ответ: «Привет Alex, приятно познакомится. Я умею считать, введи числа которые надо посчитать»<br/>
    * /number: 7, 9<br/>
    * После ввода чисел Чат-бот должен предложить ввести одно из действий: -, +, *, /<br/>
    * После ввода действия, Чат-бот возвращает результат<br/>
    * /stop — Ответ Чат-бота: «Всего доброго, если хочешь поговорить пиши /start»<br/>
* Если была введена команда не указанная в ТЗ, Чат-бот должен ответить: «Я не понимаю, введите другую команду!»
* При вводе команды /weather Чат-бот должен идти на любой сайт с погодой, брать погоду, и выводить ее в чат.
