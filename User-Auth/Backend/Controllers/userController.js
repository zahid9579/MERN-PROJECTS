import User from "../Models/UserModel.js";

// To Register a new user
const RegisterUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).send("Please fill all the fields");
    }

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).send("User already exist with this email");
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json("User registration done");
  } catch (err) {
    console.log(err);
    res.status(500).json("Something went wrong");
  }
};




//  To login the user 
const LoginUser = async(req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json("Fill all the fields")
        }

        const user = await User.findOne({email, password})
        
        if(!user){
            return res.status(400).json("email or passsword is not correct")

        }

        res.status(200).json({'msg': "User Logged In"}, user)


    }catch(err){
        console.log(err)
        res.status(500).json("Something went wrong")

    }
}


export {
    RegisterUser, 
    LoginUser,
};
