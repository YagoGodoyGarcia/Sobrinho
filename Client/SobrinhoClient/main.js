const electron = require('electron');
const url = require('url');
const path = require('path');
const sc = require('./js/systemcolector');


const {app, BrowserWindow} = electron;

let mainWindow;

// Listen for app do be Ready
app.on('ready', async function(){
    // Create new window
    mainWindow = new BrowserWindow({width: 1024, height: 800});
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'colector.html'),
        protocol:'file:',
        slashes: true
    }));

    // Getting Memory info from System Colector
    var memory = await sc.getMem();
    var memoryPlotted = Math.round((((memory.total)/1024)/1024)/1024) + ' GB'; // Creating a var with result of memory total (recepted in bytes), and converting to GB

    // Getting CPU info from System Collector
    var cpu = await sc.getCpu();
    var cpuPlotted = cpu.manufacturer+ ' ' + cpu.brand; // Creating a var with manufacturer and brand concatenated

    // If these next lines of code are read by professor GERSAO, we are only sorry for the hoax function
    // Inicio do Chuncho - PERMANENTEMENTE TEMPORÁRIO
    let printCode = 'var memoryOn = document.getElementById("memory-total").innerHTML = "' + memoryPlotted +'"; \
                     var cpuOn = document.getElementById("cpu-model").innerHTML = "' + cpuPlotted +'";'; // This is a "Chuncho", in this case, we creates a string with js commands with values collected before
    mainWindow.webContents.executeJavaScript(printCode);
    // Fim do Chuncho
    
});

