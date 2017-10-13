let express = require("express");
let router = express();
let models = require("../../../models");

/*
 * Product List GET 
 * 取得商品列表的欄位
 * sequelize 使用原生SQL語法
 * http://docs.sequelizejs.com/manual/tutorial/raw-queries.html
 */
router.get("/product/list", function (req, res, next) {
    models.sequelize
        .query(
        `SELECT 
            product_id,
            product_name,
            product_price,
            product_desc,
            category_name
        FROM 
          Product,Category
        WHERE 
          Product.category_id = Category.category_id`,
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
* Product List category_name GET 
* 以類別的name取得商品列表的欄位
* sequelize 使用原生SQL語法
*/
router.get("/product/list/:category_name", function (req, res, next) {

    const category_name = req.params.category_name;
    models.sequelize
        .query(
        `SELECT 
        product_id,
        product_name,
        product_price,
        product_desc,
        category_name
    FROM 
      Product,Category
    WHERE 
      Product.category_id = Category.category_id
      AND
      Category.category_name = '`+ category_name + "'",
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
router.post("/product", function (req, res, next) {
    // validator
    const product_name = req.body.product_name,
        product_price = req.body.product_price,
        product_desc = req.body.product_desc,
        category_id = req.body.category_id

    models.Product
        .create({
            product_name: product_name,
            product_price: product_price,
            product_desc: product_desc,
            category_id: category_id
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
router.put("/product/:product_id", function (req, res, next) {

    // 取得修改id
    const product_id = req.params.product_id;
    // validator
    const product_name = req.body.product_name,
        product_price = req.body.product_price,
        product_desc = req.body.product_desc,
        category_id = req.body.category_id
    models.Product
        .update(
        {
            product_name: product_name,
            product_price: product_price,
            product_desc: product_desc,
            category_id: category_id
        },
        { where: { product_id: product_id } }
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
router.delete("/product/:product_id", function (req, res, next) {

    // 取得修改id
    const product_id = req.params.product_id;
    models.Product
        .destroy({ where: { product_id: product_id } })
        .then(() => {
            res.send("刪掉囉");
        })
        .catch(error => {
            res.send(error);
        });
});

module.exports = router;
