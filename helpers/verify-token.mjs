import jwt from 'jsonwebtoken'
import getToken from './get-token.mjs'
const verifyToken = (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).json({message: 'Acesso negado!'})
    }
    
    const token = getToken(req)

    if(!token){
        return res.status(401).json({message: 'Acesso negado!'})
    }

    try{
        const verified = jwt.verify(token, "nossosecret")
        req.user = verified
        next()
    } catch(error){
        res.status(400).json({message: 'Token invalido!'})
    }
}


export default verifyToken