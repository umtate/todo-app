import sequelize from "../../config/db.js";
import User from "./model.js";

export const getUser = async (userId) => {
  sequelize
    .sync()
    .then(() => {
      User.findOne({
        where: {
          userId: userId,
        },
      })
        .then((res) => {
          return res
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to get user : ", error);
    });
};


export const createUser = async (userReq) => {
  try{
    const user = await User.create(userReq);
    return user
  }catch(err) {
    console.log(err)
  }  

};


