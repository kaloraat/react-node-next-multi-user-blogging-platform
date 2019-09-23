exports.signup = (req, res) => {
    const { name, email, password } = req.body;
    res.json({
        user: { name, email, password }
    });
};
