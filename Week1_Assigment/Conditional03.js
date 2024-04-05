

function launchBrowse(browserName) {
    if (browserName === "chrome") {
        console.log(browserName);
    }
    else {
        console.log('Unsupported Browser');
    }
}

function runTests(testType) {
    switch(testType){
        case 'smoke':
            console.log(testType);
            break
        case 'sanity':
            console.log(testType);
            break;
        case 'regression':
            console.log(testType);
            break;
        default:
            console.log('Unsupported Test Type - Switch');
            break;
    }
}
launchBrowse('chrome');
runTests('sanity');

launchBrowse('LInux');
runTests('smoke');
