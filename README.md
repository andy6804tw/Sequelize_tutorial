# Express + Sequelize 
## Step1
建置express環境，並使用hbs板模
```
$ express --hbs -y
```

## Step2
安裝套件
```
$ npm install sequelize sequelize-cli mysql2 -save
```

## Step3
建置Sequelize環境
```
$ sequelize init
```
在這邊會產出migrations、models、config、seeders
在餓編只會使用到model，它的功用是匯入mysql中的db並轉成sequelize欄位語法

[可以使用圖像化軟體將sql db匯入models資料夾](https://github.com/andyforever/sequelizer)


<img src="https://raw.githubusercontent.com/andy6804tw/Sequelize_tutorial/master/%08Screenshoot/img1.png">

## Step4
在config設定mysql名稱與密碼，並在後加入
```js
 "define":{
      "timestamps":false
    }
```

## How to use
install modules include (mysql2、sequelize、sequelize-cli)
```
$ npm install
```

run script
```
$ npm run start
```

* Note : You should create schema for MySQL database and connected it.

## MIT License
```
Copyright (c) 2017 Yi Lin Tsai 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
