const verifyAccess = (requiredRole) => {

    return async (req,res,next) => {

        try{
            const {role}= req.user;
            if (requiredRole!= role) {
                return res.status(401).json({ error: "Unathorised! You don't have access to this API"})
            }
            return next();
        }
        catch (err) {
            console.log(err);
        }
    };
};

export default verifyAccess;