

const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: '1027393479@qq.com', // generated ethereal user
        pass:  'udfyjrndexkmbcji'// generated ethereal password
    }
});
module.exports={
    send(mail,code){
        let info={
            from: '"Fred Foo 👻" <1027393479@qq.com>', // sender address
            to: mail, // list of receivers
            subject: '强哥快跑.警察来了', // Subject line
            // text: 'Hello world?', // plain text body
            html: `<h3>您的验证码是:${code}</h3>` // html body
        } 
        return  new Promise((resolve,reject)=>{
        transporter.sendMail(info,(err,result)=>{
        if(err){
            reject()
            }else{
            resolve()
            }
        });
    })
}
}
