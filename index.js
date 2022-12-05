function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log( string.toUpperCase());
}
function logWhisper(string){
    console.log( string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
    const lowerCheck = string;
    const upperCheck = string;
    const dinnerCheck = string;
    const dinnerAsk = "Let's have dinner together!"
    if (lowerCheck == string.toLowerCase())
    return "I can't hear you!"
    if (upperCheck == string.toUpperCase())
    return "YES INDEED!"
    if (dinnerCheck == dinnerAsk)
    return "I would love to!"
}