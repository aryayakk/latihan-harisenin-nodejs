// import model
const { Article } = require('./models')

Article.create({
    title: "Artikel Satu Baru", 
    body: "Body artikel satu baru", 
    approved: true
}).then(result => {
    console.log('result', result);
})
