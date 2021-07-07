const express = require('express');
const request = require('request');

const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const googleKey = process.env.GOOGLE_APIKEY;


router.get('/current', async (req, res, next) => {
    try {
      console.log("12344556");
      request.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${googleKey}`,function(error, response, body){
        if(!error&&response.statusCode==200){
          console.log(body);
          res.status(201).json(body);
        } else {
          res.status(403).send('통신 잘 안됨');
        }
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
  
  module.exports = router;