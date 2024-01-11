const mongoose = require('mongoose')

const connection = {};
export const connectToDb = async()=>{
  try {
    if(connection.isConnected){
      console.log('connect');
      return
     }
    const db = await mongoose.connect(process.env.Mongo);
    connection.isConnected = db.connections[0].readyState;
} catch (error) {
    handleError(error);
    console.log(error);
}
}