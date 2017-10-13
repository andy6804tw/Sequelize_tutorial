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
