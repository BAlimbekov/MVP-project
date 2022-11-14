module.exports = {
    dev: {
        apiUrl: "http://localhost:",
        port: 3040
    },
    production: {
        apiUrl: process.env.API_URL,
        port: process.env.port
    }
}