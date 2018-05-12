const si = require('systeminformation');

// Exportando funções
module.exports = { 
    getMem: function() {
        try {
            const data = si.mem();
            return data
        } catch (e) {
            console.log(e)
        }
    },
    getCpu: function() {
        try {
            const data = si.cpu();
            return data
        } catch (e) {
            console.log(e)
        }
    },
    getMemJson: async function() {
        try {
            const data = await si.mem();
            return  data.total;
        } catch(e) {
            console.log(e)
        }
    },
    getLoad: async function() {
        try {
            var load = await si.currentLoad();
            return load;
        } catch(e) {
            console.log(e)
        }
    }
}

