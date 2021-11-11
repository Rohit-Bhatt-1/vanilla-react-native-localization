let mockhero = new Map()
let obj = {
    "description":"aeyyo kozou"
}
export default  {        
            setItem: (key, value) => {
                return new Promise((resolve, reject) => {
                  return (typeof key !== 'string')
                    ? reject(new Error('key and value must be string'))
                    : resolve(mockhero.set(key,value));
                });
              },
              getItem: (key) => {
                return new Promise((resolve,reject) => {
                  return mockhero.get(key)==='en'
                    ? resolve(mockhero.get(key))
                    : reject(new Error("aargghh"));
                });
              },
          }