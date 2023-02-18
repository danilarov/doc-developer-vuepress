# Инструкция по Git
ssh-agent — это менеджер ключей для SSH. Он хранит ваши ключи и сертификаты в памяти, незашифрованные и готовые к использованию ssh. Это избавляет вас от необходимости вводить пароль каждый раз, когда вы подключаетесь к серверу. Он работает в фоновом режиме в вашей системе, отдельно от ssh, и обычно запускается при первом запуске ssh.

## Инструкция по созданию ssh ключей для github
GitHub руководство: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys

### 1) Cоздание
`ls -al ~/.ssh` — проверка на сущестование ключей

`ssh-keygen -t ed25519 -C "your_email@example.com"` — создание ключа SHA-2
- создаем в директорию по умолчанию /.ssh
- passphrase добавляем пароль

`eval "$(ssh-agent -s)"` — запускаем ssh-agent
> Agent pid 59566

`ssh-add ~/.ssh/id_ed25519` — добавляем ключ в ssh-agent

### 2) Связывание с GitHub
Переходим в GitHub — Настройки - SSH and GPG keys
Добавляем SSH keys
- называем для обозначения
- выбираем Authentication Keys
- вставляем текст из файла публичного ключа __.pub
`cat ~/.ssh/id_ed25519.pub` — для выведения на экран

### 3) Проверка SSH-соединения
`ssh -T git@github.com`
> The authenticity of host 'github.com (IP ADDRESS)' can't be established.

> RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.

> Are you sure you want to continue connecting (yes/no)?

SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU (Ed25519) — если совпадает печатаем yes

> Hi USERNAME! You've successfully authenticated, but GitHub does not

> provide shell access.