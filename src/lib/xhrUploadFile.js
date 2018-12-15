let EDITOR_RES_PATH = '/ih5/resource/'
const workApi = {
  upload: EDITOR_RES_PATH + 'uploadFile',
  MultiUpload: EDITOR_RES_PATH + 'uploadFiles'
}

const fileErrorType = {
  wrongType: 'wrongType', // 错误类型
  wrongFileType: 'wrongFileType', // 错误文件类型
  noDot: 'noDot', // 无后缀名
  notSupport: 'notSupport' // 不支持
}

// 不同类型对应的扩展名
var getAllowExt = type => {
  var allowExt = null
  if (type == 'font') {
    allowExt = ['ttf', 'otf']
  } else if (
    [
      'image',
      'mapmarker',
      'threesphere',
      'threecylinder',
      'threegeo',
      'css3dimg',
      'particle'
    ].indexOf(type) >= 0
  ) {
    allowExt = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'ico']
  } else if (type === 'imagelist') {
    allowExt = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'ico']
  } else if (type === 'zip') {
    allowExt = ['zip']
  } else if (type === 'video' || type === 'videolist') {
    allowExt = ['mp4']
    // allowExt = ['mov', 'mp4', 'avi'];
  } else if (type === 'audio' || type === 'audiolist') {
    allowExt = ['mp3']
    // allowExt = ['mp3', 'wma', 'wav', 'aac', 'mid'];
  } else if (type === 'psd') {
    allowExt = ['psd']
  } else if (type === 'svg') {
    allowExt = ['svg']
  } else if (type === 'icon') {
    allowExt = ['ico', 'jpg', 'jpeg']
  } else if (type === 'excel') {
    allowExt = ['xlsx', 'xls']
  } else if (type === 'object' || type === 'json') {
    allowExt = ['json']
  } else if (type === 'obj') {
    allowExt = ['obj']
  } else if (type === 'stl') {
    allowExt = ['stl']
  } else if (type === 'three') {
    allowExt = ['stl', 'obj', 'zip']
  } else if (type === 'file' || type === 'filelist') {
    allowExt = [
      'doc',
      'docx',
      'txt',
      'xls',
      'xlsx',
      'ppt',
      'pptx',
      'pdf',
      'png',
      'jpg',
      'jpeg',
      'gif',
      'svg',
      'mp3',
      'mp4',
      'ico',
      'rar',
      'psd',
      'exe',
      'zip'
    ]
  }
  return allowExt
}

let chooseFileCallback = w => {
  if (w && w.files && w.files.length > 0) {
    let allowExt = getAllowExt(w.fileType)
    let fileLen = w.files.length
    for (let i = 0; i < fileLen; i++) {
      let name = w.files[i]['name']
      let dot = name.lastIndexOf('.')
      if (!allowExt || dot <= 0) {
        if (w.onError) {
          w.onError({
            type: w.fileType,
            reason: !allowExt ? fileErrorType.wrongType : fileErrorType.noDot
          })
        }
        return
      }
      let ext = name.substr(dot + 1).toLowerCase()
      if (allowExt.indexOf(ext) < 0) {
        if (w.onError) {
          w.onError({
            type: w.fileType,
            reason: fileErrorType.wrongFileType,
            ext: allowExt
          })
        }
        return
      }
    }
    let files = w.files
    if (w.onChoseFile) {
      w.onChoseFile()
    }
    if (w.toServer) {
      let fileArr = Array.from(w.files),
        nameArr = [],
        typeArr = [],
        sizeArr = [],
        urlArr = []
      let fileLen = w.files.length
      let isList = w.fileType.includes('list')
      let url = fileLen > 1 ? workApi.MultiUpload : workApi.upload
      let form = new FormData()
      if (fileLen <= 20) {
        if (fileLen > 1) {
          fileArr.forEach(item => {
            form.append('file[]', item)
            nameArr.push(item.name)
            sizeArr.push(item.size)
            if(!item.type){ // 处理文件类型为空的文件
              typeArr.push(getTypeFromName(item.name))
            }else{
              typeArr.push(item.type)
            }
          })
        } else {
          fileArr = fileArr[0]
          form.append('file', fileArr)
          if(isList){
            nameArr.push(fileArr.name)
            sizeArr.push(fileArr.size)
            if(!fileArr.type){
              typeArr.push(getTypeFromName(fileArr.name))
            }else{
              typeArr.push(fileArr.type)
            }
          }else{
            nameArr = fileArr.name
            sizeArr = fileArr.size
            if(!fileArr.type){
              typeArr = getTypeFromName(fileArr.name)
            }else{
              typeArr = fileArr.type
            }
          }
        }
        let xhr = new XMLHttpRequest()
        xhr.open('POST', url)
        xhr.upload.onprogress = w.onProgress
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            let response = JSON.parse(xhr.responseText)
            if (fileLen > 1) {
              for (let i = 0; i < response.length; i++) {
                urlArr.push(response[i].name)
              }
            } else if(isList){
              urlArr.push(response.name)
            }else{
              urlArr = response.name
            }
            w.callback(urlArr, nameArr, typeArr, sizeArr)
          }
        }
        xhr.send(form)
      }
    } else {
      if (w.callback) {
        w.callback(files)
      }
    }
  }
}

let createInputBtn = () => {
  let oldDom = document.getElementById('ih5_upload_com')
  if (oldDom) {
    destroyInputBtn(oldDom)
  }
  let inputFile = document.createElement('input')
  inputFile.setAttribute('type', 'file')
  inputFile.style['position'] = 'absolute'
  inputFile.style['height'] = '1px'
  inputFile.style['zIndex'] = '-1000'
  inputFile.style['width'] = '1px'
  inputFile.style['display'] = 'none'
  inputFile.setAttribute('id', 'ih5_upload_com')
  inputFile.onchange = s => {
    s.target.sysCallback(s.target)
  }
  document.body.appendChild(inputFile)
  return inputFile
}

let destroyInputBtn = dom => {
  if (dom.parentNode) {
    dom.parentNode.removeChild(dom)
  }
}

// 选择文件上传
var chooseFile = (type, info) => {
  const {
    toServer,
    progress,
    selected,
    callback,
    specialInfo,
    nid,
    accept,
    error
  } = info
  let dom = createInputBtn()
  dom.value = ''
  dom.fileType = type
  dom.toServer = toServer
  dom.callback = callback
  dom.specialInfo = specialInfo // 是否生成全景图片等（默认不生成的）
  dom.nid = nid
  let typeList = ['imagelist', 'videolist', 'audiolist', 'filelist']
  if (typeList.includes(type)) {
    dom.multiple = true
  } else {
    dom.multiple = false
  }
  if (accept) {
    dom.accept = accept
  } else {
    if (dom.accept) {
      dom.accept = undefined
    }
  }
  dom.onProgress = progress || null
  dom.onChoseFile = selected || null
  dom.onError = error || null
  dom.sysCallback = chooseFileCallback
  dom.click()
}

// 上传文件到服务器
var uploadFileToServer = (file, info) => {
  const { callback, progress } = info
  let xhr = new XMLHttpRequest()
  xhr.open('POST', workApi.upload)
  let form = new FormData()
  form.append('type', file.type)
  form.append('file', file)

  xhr.upload.onprogress = progress

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      let response = JSON.parse(xhr.responseText)
      if (callback) {
        callback(response.name)
      }
    }
  }

  xhr.send(form)
}

var getFileType = file => {
  let type = ''
  if (file.type.match(/video.*/)) {
    type = 'video'
  } else if (file.type.match(/audio.*/)) {
    type = 'audio'
  } else if (file.type.match(/image.*/)) {
    if (file.type === 'image/svg+xml') {
      type = 'svg'
    } else {
      let ext = file.name.split('.').pop()
      if (ext) {
        ext = ext.toLowerCase()
      }
      let allowExt = getAllowExt('image')
      if (allowExt.indexOf(ext) >= 0) {
        type = 'image'
      }
    }
  } else if (
    file.type.match(/.*zip.*/) ||
    file.name.split('.').pop() == 'zip'
  ) {
    type = 'zip'
  } else if (
    file.name.split('.').pop() == 'obj' ||
    file.name.split('.').pop() == 'OBJ'
  ) {
    type = 'obj'
  } else if (
    file.name.split('.').pop() == 'stl' ||
    file.name.split('.').pop() == 'STL'
  ) {
    type = 'stl'
  }
  if (file.name.match(/\.psd$/i)) {
    type = 'psd'
  }
  if (file.name.match(/\.fla$/i)) {
    type = 'fla'
  }
  return type
}


function getTypeFromName(str){
  return str.match(/\.[^\.]+$/i)[0].slice(1)
}
export { chooseFile, uploadFileToServer, getAllowExt, getFileType }
