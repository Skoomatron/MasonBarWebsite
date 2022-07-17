const db = require('../../DB/index.js');
const {Information} = require('../../DB/schema.js');

const postWelcome = async (params) => {
  console.log('made it to models with data: ', params)
  // try {
  //   await db.collection('masonData').insertOne({
  //     test: params.test,
  //   })
  // } catch (error) {
  //   return error;
  // }
}

module.exports = {
  postWelcome,
}