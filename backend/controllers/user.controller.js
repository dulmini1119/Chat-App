

export const getUserForSideBar = async (req,res) => {
    try {
        const loggedInUserId = req.user._id;
    } catch (error) {
        console.error("Error in getUserForSideBar", error.message);
        res.status(500).json("Internal Server Error");
    }
}