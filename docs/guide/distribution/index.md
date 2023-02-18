# Дистрибутивы

установка mc
sudo apt-get install mc

добавление в запуск приложений
 sudo systemctl enable nginx

sudo apt-cache show __ - проверка н адоступность установки через apt
php -v - версия
php -m — список модулей

sudo apt-get update - обновить список пакетов
sudo apt-get upgrade - обновить пакеты

# Замена пустого пароля root звездочками
sudo visudo
Найти Defaults env_reset
Добавить через запятую env_reset,pwfeedback
Ctrl + X , а затем и клавиши Y, enter

Отключение требования пароля root
sudo visudo
ниже комментария «#includedlr /etc/sudoers.d» вставляем команду kompik ALL=(ALL) NOPASSWD:ALL