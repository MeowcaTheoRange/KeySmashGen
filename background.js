function copyTextToClipboard(text) {
    //Create a textbox field where we can insert text to. 
    var copyFrom = document.createElement("textarea");
  
    //Set the text content to be the text you wished to copy.
    copyFrom.textContent = text;
    //Append the textbox field into the body as a child. 
    //"execCommand()" only works when there exists selected text, and the text is inside 
    //document.body (meaning the text is part of a valid rendered HTML element).
    document.body.appendChild(copyFrom);
  
    //Select all the text!
    copyFrom.select();
  
    //Execute command
    document.execCommand('copy');
  
    //(Optional) De-select the text using blur(). 
    copyFrom.blur();
  
    //Remove the textbox field from the document.body, so no other JavaScript nor 
    //other elements can get access to this.
    document.body.removeChild(copyFrom);
}
const random = (length = 280) => {
    // Declare all characters
    let chars = 'byv8WRBHUIPEWVGUILYUGEWRB2yihjgoevuhef79                                             ouhcuweeeeaaaaaeeeeeiiiiiiiooooooooouuuuuuuu111115555555222222224444444888888866666660000000999bcpqzilehuic;;;g32cuikvyou8cuewio9guikuiljkeo;ewie]kewfipoe[pfevhewvio';
  
    // Pick characers randomly
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    return str;
  
};
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function IsNumeric(input)
{
    return (input - 0) == input && (''+input).trim().length > 0;
}
chrome.browserAction.onClicked.addListener(function(tab) {
    var t = prompt("Keysmash length? (press Cancel or leave input blank to produce a random amount.)");
    if (IsNumeric(t) && t <= 99999) {t = t} else {t = ""};
    var length =  t || getRandomInt(280);
    copyTextToClipboard(random(length));
    alert("Press CTRL-V on a text input area to paste a " + length + " character long keysmash.");
});