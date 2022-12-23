
const userApi = (req, res) => {
    const data = require('.././database/data.json');
    res.json( {users : data.users});
};


module.exports = {
    userApi
}