import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

const storage = new Storage({
  // 最大容量，默认值1000条数据循环存储
  size: 1000,

  // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
  // 如果不指定则数据只会保存在内存中，重启后即丢失
  storageBackend: AsyncStorage,

  // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
  defaultExpires: 1000 * 3600 * 24,

  // 读写时在内存中缓存数据。默认启用。
  enableCache: true, // 你可以在构造函数这里就写好sync的方法 // 或是在任何时候，直接对storage.sync进行赋值修改 // 或是写到另一个文件里，这里require引入

  // 如果storage中没有相应数据，或数据已过期，
  // 则会调用相应的sync方法，无缝返回最新数据。
  // sync方法的具体说明会在后文提到
//   sync: require('你可以另外写一个文件专门处理sync'),
});

// 最好在全局范围内创建一个（且只有一个）storage实例，方便直接调用

// 对于web
// window.storage = storage;

// 对于react native
function getStorage(key,id){
  return new Promise((resolve,reject)=>{
    let loadObj = id?{
      key:key,
      id:id,
      autoSync:true,
      syncInBackground: true}:
      {
        key:key,
        autoSync:true,
        syncInBackground: true
      }
    storage.load(loadObj).then(ret=>{
        resolve(ret)
        
    }).catch(err => {
      reject(err)
    })
  })
}

function setStorage(key,data,id){
  return new Promise((resolve,reject)=>{
    try{
      let saveObj = id?{
        key:key,data:data,id:id
      }:
      {
        key:key,data:data
      }
      storage.save(saveObj)
      resolve(true)
    }
    catch(e){
      reject(e)
    }
  })

}

function removeStorage(key,id){
  return new Promise((resolve,reject)=>{
    try{
      let removeObj = id?{
        key:key,id:id
      }:
      {
        key:key
      }
      storage.remove(removeObj)
      resolve(true)
    }
    catch(e){
      reject(e)
    }
  })

}
global.setStorage = setStorage
global.getStorage = getStorage
global.removeStorage = removeStorage
global.Storage = storage;