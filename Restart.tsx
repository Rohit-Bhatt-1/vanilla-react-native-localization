// import RNRestart from 'react-native-restart';

// export const myRestart = () => {
//      if(RNRestart)
//     RNRestart.Restart();
// }

export const myRestart = async () => {
    let p = true;
    try{
        if(p){
        // const updates = await import('expo-updates');
        // console.log("go:",go)
        // updates.reloadAsync()
        const updates = await import('react-native-restart')
        updates.RNRestart();
    }else{
        const updates = await import('expo-updates');
        updates.reloadAsync()
    }
    }catch(err){
        console.log("error : ",err)
    }
}