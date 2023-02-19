import UserModel from "../../model/user.model";

export const getByMail = async (email: string) => {
    return await UserModel.findOne({ email: email })

} 
