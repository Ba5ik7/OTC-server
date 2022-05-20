/**
 * HelloWorldController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  hello(res, req) {
    // const data = res.body.payload;
    // console.log('Just got this in Sails', data);

    // let iGotIt = `didn't`;
    // if (data !== undefined) {
    //   iGotIt = 'did';
    // }

    // const didIGetIt = `I ${iGotIt} get it!!!!`;
    // return req.send({ status: 200, results: { didIGetIt } });
    return req.send({ status: 200, results: { data: 'Hello' } });

  }

};

