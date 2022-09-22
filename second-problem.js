// Second Problem
// Checking if the file is a JavaScript File or Not.
// Every JavaScript File has an extension of .js, so it will easy to find the extension and check the file is a JavaScript file or not.


function isJavaScriptFile(file) {
    
    if (typeof(file) !== 'string') {
        console.log('Please give a file name');
    }

    else{
        const fileExtension = file.endsWith('.js');
        if (fileExtension === true) {
            return true;
        }
        else{
            return false;
        }
    }

    // const fileExtension = file.endsWith('.js');
    // if (fileExtension === true) {
    //     return true;
    // }
    // else{
    //     return false;
    // }
}


// Should Remove befor Submitting
// let fileCheck = isJavaScriptFile('app.js');
// const fileCheck = isJavaScriptFile('js.png');
// const fileCheck = isJavaScriptFile('image.js.png');

// const fileCheck = isJavaScriptFile("5");
// console.log(fileCheck);