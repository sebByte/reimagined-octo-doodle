const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electron', {
    btnClicked: async (data) => {
        console.log('Click received preload.js')

        return await ipcRenderer.invoke('btn-handler', data)
    },

    getCabins: async (data) => {
        console.log('getCabbies preload.js')

        return await ipcRenderer.invoke('get-btn-handler', data)
    }
})