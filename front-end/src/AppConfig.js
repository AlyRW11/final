let ConfigOverride
try {
    ConfigOverride = require("./config.json")
} catch (e) {
    // console.log(e)
}

const runConfig = () => {
    this.config = {
        graphcoolConnString: ConfigOverride
            ? ConfigOverride.graphcoolConnString
            : process.env.REACT_APP_GRAPHCOOL_CONN_STRING,
        adminSiteRoot: ConfigOverride
            ? ConfigOverride.adminSiteRoot
            : process.env.REACT_APP_ADMIN_SITE_ROOT,
    }
}
runConfig()
module.exports = this.config