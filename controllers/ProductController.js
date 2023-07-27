const Product = require("../models/PorductModel")
const path = require('path')
const fs = require("fs")
const Expert = require("../models/ExpertsModel")
const mailService = require("../services/mail-service")

class ProductController {
    async getAllProducts (req, res, next) {
        try {
            const products = await Product.find()
            res.json(products)
        } catch (e) {
            next(e)
        }
    }
    getImageExpert (req, res) {
      const imageName = req.params.imageName
      fs.readFile(path.join(__dirname, "..", '/images', "experts", `/${imageName}`), (err, data) => {
        if (err) {
          res.status(500).send('Помилка сервера');
        } else {
          res.set('Content-Type', 'image/jpeg');
          res.send(data);
        }
      });
    }
    getImage (req, res) {
        const imageName = req.params.imageName
        fs.readFile(path.join(__dirname, "..", '/images', "products", `/${imageName}`), (err, data) => {
          if (err) {
            res.status(500).send('Помилка сервера');
          } else {
            res.set('Content-Type', 'image/jpeg');
            res.send(data);
          }
        });
    }
  async getAllExprerts (req, res, next) {
    try {
      const experts = await Expert.find()
      res.json(experts)

    } catch (e) {
      next(e)
    }
  }

  async addProduct(req, res, next) {
    const {productClass, img, productName, price, rating, detailInfo, productDescription, additionalInfo} = req.body
    const product = new Product({productClass, img, productName, price, rating, detailInfo, productDescription, additionalInfo})
    await product.save()
    
    res.json({work: "done"})
  }
  async addExrept (req, res, next) {
    const {img, name, last_name, work, facebook, twitter, instagram} = req.body
    const expert = new Expert({img, name, last_name, work, facebook, twitter, instagram})
    await expert.save()
    
    res.json({work: "done"})
  }

  async getOrderData (req, res, next) {
      await mailService.sendActivationMail("adrefsewer@gmail.com", req.body.user,  req.body.basketItems)
    
      res.json({work: "done"})
  }
    
   async findProducts (req, res, next) {
        if (req.body.name.length > 1) {
            const regex = new RegExp(req.body.name, 'i');
            const products =  await Product.find({ productName: regex })
            res.json(products)
        } else {
            res.json([])
        }
    }

}

module.exports = new ProductController()
