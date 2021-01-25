const env = {
    mongo: {
        url: process.env.NODE_ENV !== "production"? 'mongodb://localhost:27017/ebuy' : "mongodb+srv://manh123:manhuetvnuk63j@cluster0.ntafe.mongodb.net",
        dbname: "ebuy"
    }
}
module.exports = env