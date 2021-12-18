import vanillaRestart from "./vanillaRestart";
import expoRestart from "./expoRestart";

export const myRestart = async () => {
    let p = require("./constants/AllPath").default().Paths.expo;
    if (p) {
        expoRestart();
    } else {
        vanillaRestart();
    }
}