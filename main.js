console.log('Run the main.js sucessfully');

const { app, BrowserWindow } = require( 'electron' );

// 1. create app window
function createWindow() {
    // 实例化应用窗口
    const window = new BrowserWindow();

    // 3. 加载一个网页
    window.loadFile('./index.html');
    // window.loadURL('http://localhost:8501')
};

// 2. 监听生命周期
app.on('ready', () => {
    createWindow();
});