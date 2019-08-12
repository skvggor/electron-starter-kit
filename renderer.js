'use strict'

const { ipcRenderer } = require('electron')

function renderFileContent(ipcRenderer) {
  const preTag = document.querySelector('#file-content')

  ipcRenderer.on('sending', (event, envContent) => {
    preTag.innerHTML = envContent
  })
}

renderFileContent(ipcRenderer)
