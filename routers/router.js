const {Router} = require("express");
const ProductController = require("../controllers/ProductController");
const router = Router()

router.get("/getAllProducts", ProductController.getAllProducts)

router.get("/getAllExrerts", ProductController.getAllExprerts)

router.get("/getImage/:imageName", ProductController.getImage)
router.get("/getImageExpert/:imageName", ProductController.getImageExpert)


router.post("/addProduct", ProductController.addProduct)

router.post("/addExpert", ProductController.addExrept)

router.post("/getOrderData", ProductController.getOrderData)

router.post("/findProducts", ProductController.findProducts)
 
module.exports = router;
