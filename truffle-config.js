module.exports = {
  networks: {
    local: {
      host: "localhost",
      port: 7545,
      network_id: "*"
    },
    loc_development_development: {
      network_id: "*",
      port: 7545,
      host: "127.0.0.1"
    }
  },
  compilers: {
    solc: {
      version: "^0.8"
    }
  }
};
