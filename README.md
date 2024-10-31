# Deploying metropolia server
## 01. SSH
Follow instructions at [Generate ssh ](https://wiki.metropolia.fi/pages/viewpage.action?pageId=307791540)

## 02. Copying folder over from mac
1. Go to folder you have your SSH key in
2. Run
```console
scp -r -i key.pem [local path] username@shell.metropolia.fi:/home1-2/l/username/public_html 
```
