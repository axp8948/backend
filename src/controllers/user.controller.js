import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    console.log("register hit") // debug
    res.status(200).json({
        message: "ok"
    })
})

export {registerUser}