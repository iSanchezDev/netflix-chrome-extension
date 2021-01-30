import "../../assets/img/icon-34.png";
import "../../assets/img/icon-128.png";

console.log("This is the background page.");
console.log("Put the background scripts here.");

const getSubtitleElement = () => {
    return document.getElementsByClassName('player-timedtext-text-container');
}

const increaseFontSize = () => console.log(getSubtitleElement());

const decreaseFontSize = () => console.log(getSubtitleElement());

export { increaseFontSize, decreaseFontSize };
