const si = require('systeminformation');

// Exportando funções
module.exports = { 
    getMem: function() {
        try {
            const data = si.mem();
            console.log(data);
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
    }
}