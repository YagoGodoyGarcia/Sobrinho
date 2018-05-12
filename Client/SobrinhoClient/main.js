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

    // Getting CPU LOAD from System Collector
    var load = await sc.getLoad();
    var LoadPlotted = parseInt(load.currentload);

    // If these next lines of code are read by professor GERSAO, we are only sorry for the hoax function
    // Inicio do Chuncho - PERMANENTEMENTE TEMPORÁRIO
    let printCode = 'var memoryOn = document.getElementById("memory-total").innerHTML = "' + memoryPlotted +'"; \
                     var cpuOn = document.getElementById("cpu-model").innerHTML = "' + cpuPlotted +'";'; // This is a "Chuncho", in this case, we creates a string with js commands with values collected before
    mainWindow.webContents.executeJavaScript(printCode);
    // Fim do Chuncho

    
    var memoryUse = memory.total - memory.available;
    var memoryTotal = memory.total;
    mainWindow.webContents.executeJavaScript('var memoryUse = "'+ memoryUse +'"');
    mainWindow.webContents.executeJavaScript('var memoryTotal = "'+ memoryTotal +'"');

    var InfiniteLoop = require('infinite-loop');
    var il = new InfiniteLoop();
    il.add(getMemory).run();
    var il2 = new InfiniteLoop();
    il2.add(getCpuUse).run();

});

async function getMemory() {
    var memory = await sc.getMem();
    memoryUse = memory.total - memory.available;
    memoryTotal = memory.total;
    mainWindow.webContents.executeJavaScript('memoryUse = "'+ memoryUse +'"');
    mainWinntents.executeJavaScript('memoryTotal = "'+ memoryTotal +'"');
    setTimeout(getMemory, 1000);
}

async function getCpuUse() {
    var load = await sc.getLoad();
    var LoadPlotted = parseInt(load.currentload);
    console.log(LoadPlotted);
    mainWindow.webContents.executeJavaScript('cpuload = "'+ LoadPlotted +'"');
    setTimeout(getMemory, 1000);
}