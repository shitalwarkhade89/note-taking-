const getApiHealth =
async (req, res) => {
    return res.json({
        success:true,
        message :" Status Ok"
    })
}
export {getApiHealth};