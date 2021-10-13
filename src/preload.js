const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electron', {
    getCabins: async (data) => {
        console.log('getCabbies preload.js')

        return await ipcRenderer.invoke('get-btn-handler', data)
    }
})