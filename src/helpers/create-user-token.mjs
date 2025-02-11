import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const createUserToken = async (user, req, res) => {
  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
    },
    process.env.JWT_SECRET
  );
  res
    .status(200)
    .json({ message: "Você foi autenticado", token: token, userId: user.id });
};
export default createUserToken;
