import { deleteItem, getData, saveData } from "./context.service";

let projectUrl = 'http://localhost:8000/project/'

export function savetheData(data){
   return saveData(projectUrl,data)
}
export function gettheData(){
  return getData(projectUrl)
}
export function deletetheData(data){
  return deleteItem(projectUrl,data)
}




let prodectUrl = 'http://localhost:8000/prodect/'

export function saveprodectData(data){
  return saveData(prodectUrl,data)
}
export function getprodectData(){
  return getData(prodectUrl)
}
export function deleteprodectData(data){
  return deleteItem(prodectUrl,data)
}

let loginUrl = 'http://localhost:8000/login/'
export function getloginData(){
  return getData(loginUrl)
}
