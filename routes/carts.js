const express = require("express");
const router = express.Router();

const Cart = require("../schemas/cart.js");
const Goods = require("../schemas/goods.js");



// localhost:3000/api/carts Get Method
router.get("/carts", async (req, res) => {
    const carts = await Cart.find({});
    // [
    //  {goodId, quantity}
    //  {goodId, quantity}
    // ];
    const goodsIds = carts.map((cart) => {
        return cart.goodsIds;
    })
    // 결괏갑 -> [2, 3, 44]  카트 안에있는 goods아이디만 가져옴

    const goods = await Goods.find({ goodsId: goodsIds });
    // Goods에 해당하는 모든정보를 가지고 올건데,
    // 만약 goodIds 변수 안에 존재하는 값일 때에만 조회하라.

    const results = carts.map((cart) => {
        return {
            "quantity": cart.quantity,
            "goods": goods.find((item) => item.goodsId === cart.goodsId)
        }
    })

    res.json({
        "carts":results,
    })

});




module.exports = router;