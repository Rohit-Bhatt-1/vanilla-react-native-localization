import React from 'react';


const expoRestart = async () => {
    try {
        const Updates = require("expo-updates");
        Updates.reloadAsync();
    } catch (error) {
        console.log("Error while restarting expo app!", error);
    }
}

export default expoRestart
