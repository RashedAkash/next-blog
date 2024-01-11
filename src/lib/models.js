const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    
  },
  body: {
    type: String,
    required: true,    
  },
  id: {
    type: String,
    required: true, 
    unique:true
  }
}, { timestamps: true })

export const Post = mongoose.models.Post || mongoose.model("Post",postSchema)