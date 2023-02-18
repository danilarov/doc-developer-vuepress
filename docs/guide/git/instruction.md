# Инструкции

ssh-agent — это менеджер ключей для SSH. Он хранит ваши ключи и сертификаты в памяти, незашифрованные и готовые к использованию ssh. Это избавляет вас от необходимости вводить пароль каждый раз, когда вы подключаетесь к серверу. Он работает в фоновом режиме в вашей системе, отдельно от ssh, и обычно запускается при первом запуске ssh.

## Инструкция по созданию ssh ключей для github
[GitHub руководство](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)

##### 1) Cоздание
`ls -al ~/.ssh` — проверка на сущестование ключей

`ssh-keygen -t ed25519 -C "your_email@example.com"` — создание ключа SHA-2
- создаем в директорию по умолчанию /.ssh
- passphrase добавляем пароль

`eval "$(ssh-agent -s)"` — запускаем ssh-agent
> Agent pid 59566

`ssh-add ~/.ssh/id_ed25519` — добавляем ключ в ssh-agent

##### 2) Связывание с GitHub
Переходим в GitHub — Настройки - SSH and GPG keys
Добавляем SSH keys
- называем для обозначения
- выбираем Authentication Keys
- вставляем текст из файла публичного ключа __.pub
`cat ~/.ssh/id_ed25519.pub` — для выведения на экран

##### 3) Проверка SSH-соединения
`ssh -T git@github.com`
> The authenticity of host 'github.com (IP ADDRESS)' can't be established.

> RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.

> Are you sure you want to continue connecting (yes/no)?

SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU (Ed25519) — если совпадает печатаем yes

> Hi USERNAME! You've successfully authenticated, but GitHub does not

> provide shell access.


## Добавить несколько аккаунтов

[первый источник](https://gist.github.com/xneek/d2605a5a9bde4164ddcd2dfc975ef9c8)

[второй источник с ssh-агентом](https://techrocks.ru/2020/12/24/how-to-manage-several-github-accounts/)

##### 1) переходим в папку .ssh
`cd ~/.ssh/`

##### 2) создаем ключ, опция -f позволяет сразу прописать имя ключа
`ssh-keygen -t ed25519 -C "your_email@example.com" -f “id_mykey“`

##### 3) нажимаеи 2 раза enter, чтобы создать ключ без пароля

##### 4) переходим в github аккаунт в настройки ssh ключей
https://github.com/settings/keys

##### 5) нажимаем добавить, название любое, type Authentication Keys, в поле Key вставляем публичный ключ
`cat ~/.ssh/id_mykey.pub`

##### 6) в папку ssh создаем файл config и переходим в него
`touch ~/.ssh/config && code ~/.ssh/config`

##### 7) вставляем следующее:

```
# personal account
Host github.com
   HostName github.com
   User email@ya.ru
   IdentityFile ~/.ssh/id_personal
   
# work account
Host work.com
   HostName github.com
   User email@gmail.com
   IdentityFile ~/.ssh/id_work
```

##### 8) проверяем
`ssh -T git@github.com`
`ssh -T git@work.com`

##### 9) дальнейшее следование инструкции по желанию!
делаем чтобы с папкой связывался именно тот пользователь, которого мы привязали в конфиге
создаем 2 файла .gitconfig-work и .gitconfig-personal в ~ корневой каталог
для этого копируем .gitconfig
`cp .gitconfig .gitconfig-work`

##### 10) внутрь .gitconfig-work вставляем
`[user]
    name = worknameacc WORK GITHUB Profile
    email = work@gmail.org`

##### 11) переходим в .gitconfig и добавляем

`[includeIf "gitdir:~/Projects/work/"]
path = .gitconfig-work`

##### 12) Теперь если перейти в соответсвующий каталог и выполнить в терминале команды git config --get user.name или git config --get user.email вы увидите что с папкой связан именно тот пользователь, которого мы привязали в конфиге. Для пустых папок не работает, должно быть наличие папки .git