function checkForValidity(inputText) {
    console.log("::: Checking validity :::", inputText);

    if(inputText.length < 10) {
        console.log("Text is too short to analyze.")
        return false;
    }
    return true;
}

export { checkForValidity }
