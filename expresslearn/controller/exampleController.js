module.exports = {
    example: (req, res) => {
        res.status(200).json({
            status: 200,
            message: "Sukses",
            data: "Arya"
        })
    }
}