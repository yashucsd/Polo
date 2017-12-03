var mLabUser = process.env.mLabUser;
var mLabPass = process.env.mLabPass;

module.exports = {
    uri: `mongodb://${mLabUser}:${mLabPass}@ds115446.mlab.com:15446/polo`
}
