let express = require("express");
let router = express();
let models = require("../../../models");

/**
 * Category  GET 
 * 取得類別列表的欄位
 * sequelize 使用原生SQL語法
 */

router.get("/category", function (req, res, next) {
  models.sequelize
    .query(
    `SELECT 
        category_id,
        category_name
        FROM 
          Category`,
    { type: models.sequelize.QueryTypes.SELECT }
    )
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      console.log(error);
    });
});

/*
* Product  POST
* 以類別的id取得商品列表的欄位
*/
router.post("/category", function (req, res, next) {
  // validator
    category_name = req.body.category_name

  models.Category
    .create({
      category_name: category_name
    })
    .then(result => {
      res.send(result);
      console.log(result);
    })
    .catch(error => {
      res.send("Something Warming:" + error);
    });
});

/*
* Product  PUT 
* 以商品id修改欄位
*/
router.put("/category/:category_id", function (req, res, next) {

  // 取得修改id
  const category_id = req.params.category_id;
  // validator
  category_name = req.body.category_name

  models.Category
    .update(
    {
      category_name: category_name
    },
    { where: { category_id: category_id } }
    )
    .then(result => {
      res.send(result);
      console.log(result);
    })
    .catch(error => {
      res.send(error);
    });
});

/*
* Product  DELETE 
* 以商品id刪除欄位
* http://docs.sequelizejs.com/manual/tutorial/raw-queries.html
*/
router.delete("/category/:category_id", function (req, res, next) {

  // 取得修改id
  const category_id = req.params.category_id;
  models.Category
    .destroy({ where: { category_id: category_id } })
    .then(() => {
      res.send("刪掉囉");
    })
    .catch(error => {
      res.send(error);
    });
});

module.exports = router;
