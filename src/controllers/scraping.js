require('dotenv/config');
const Instagram = require('instagram-web-api');

module.exports = class Measure {

    static async get(req, res){
        try {      

            //Call of instagram API
            
            const { insta_username, insta_password } = process.env;
            
            const client = new Instagram({ username: insta_username, password: insta_password });
  
           await client.login();

           const profile = await client.getUserByUsername({ username: req.params.username })
          
            res.status(200).send(profile);
        } catch (error) {
            if (error !== undefined) {
                res.status(400).send(error)
            } else {
                res.status(500).send({erro:"internal server error"})
            }
            console.log(error);
            
        }
    }
}