const fs = require("fs");
const path = require('path').resolve('./')

const removeDir = function (path){
    if(fs.existsSync(path)){
        const files = fs.readdirSync(path)
        if(files.length > 0){
            files.forEach(function (filename){
                if(fs.statSync(path+ "/" + filename).isDirectory()){
                    removeDir(path+ "/"+ filename)
                }else{
                    fs.unlinkSync(path+ "/" + filename)
                }
            })
        }
    }else{
        console.log("Ruta del reporte no encontrado")
    }
}

const removeDirTxt = function (path){
    if(fs.existsSync(path)){
        const files = fs.readdirSync(path)
        if(files.length > 0){
            files.forEach(function (filename){
                if(filename.includes(".txt")){
                    if(fs.statSync(path+ "/"+ filename).isDirectory()){
                        removeDir(path+ "/"+ filename)
                    }else{
                        fs.unlinkSync(path+ "/"+ filename)
                    }
                }
            })
        }
    }else{
        console.log("Ruta del reporte no encontrado")
    }
}

const removeSpecificFile = function (path){
    if(fs.existsSync (path)){
        if(fs.statSync(path).isDirectory()){
            removeDir(path)
        }else{
            fs.unlinkSync(path)
        }
    }
}

removeDir(path + "/allure-results")
removeDir(path + "/allure-report")
removeDir(path + "/reports")


