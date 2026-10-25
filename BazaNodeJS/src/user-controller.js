const User = require('./user-model')

const getUsers = async (res,req) => {
   let users;
   if(req.params.id){
      users = await User.findById(req.params.id)
   } else {
      users = await User.find()
   } 
   res.send(users)
}

const createUser = async (res,req) => {
   const user = await User.create(req.body)
   res.send(user)
}

module.exports = {
   getUsers, 
   createUser
}
