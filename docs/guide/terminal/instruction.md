# Инструкции

## Поменять директорию по умолчанию в терминале

Необходимо в конец файла .bashrc добавить следующее:

if [ "$PWD" == "/home/xlite" ]; then cd /home/xlite/Projects/personal; fi

## Добавление многострочного текста в файл

```
cat >> README.md << EOF
text
text23
EOF
```

## Изменение ввода приглавшения в терминале

изменить приглашение ввода новых команд можно здесь:
1) https://ru.hexlet.io/blog/posts/kak-prisoedinitsya-k-rabote-nad-opensorsom-chto-takoe-ps1-i-drugie-voprosy-otvechaet-razrabotchik-heksleta-andrey-moshkov#chto-takoe-ps1-i-dlya-chego-ispolzuetsya
2) https://pingvinus.ru/note/bash-promt

## Добавить директорию в переменную PATH

в одном из файлов<br>
.bashrc .bash_profile .profile<br>
нужно ввести<br>
`export PATH=$PATH:/path/to/directory`