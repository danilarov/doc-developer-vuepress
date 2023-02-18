# Процесс настройки по bluetooth

sudo dmesg | grep -i blue — показать usb подключения

sudo lsusb — показывает подключение blutooth по usb

sudo make install INTERFACE=all

uname -a — показывает текущую сборку linux

$ lsmod | grep blue
$ lsmod | grep wl
показывает модуль ядра

wl - ? приложение

rfkill list — проверка на блокирование blutooth

hciconfig (1) - configure Bluetooth devices

blueman-manager

sudo /etc/init.d/bluetooth start
sudo service bluetooth start