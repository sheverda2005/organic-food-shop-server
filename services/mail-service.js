const nodemailer = require('nodemailer')
class MailService {
    constructor() {
        this.trasporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            post: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }
    async sendActivationMail(to, user, products) {
        await this.trasporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Замовлення продуктів",
            text: "",
            html: `
               <div>
                 <h1>${user.name}</h1>
                 <h2>${user.phone}</h2>
                 <p>${user.country}</p>
                 <p>${user.city}</p>
                 <p>${user.address}</p>
                 <ul>
                   ${
                    products.map(item => {
                        return  `<li>
                            <h3>
                               Продукт: ${item[0].productName}
                              <h4>
                                Кількість: ${item[1].quantity}
                              </h4>
                            </h3>
                        </li>`
                    })
                   }
                 </ul>
               </div>
            
            `
        })
    }
}

module.exports = new MailService()