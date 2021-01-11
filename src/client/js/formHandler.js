import { analyzeData } from './API';
import { checkForValidity} from './validityChecker';

async function handleSubmit(event) {
    console.log(event);
    const form = new FormData(event.target);
    const name = form.get("input");
    console.log('Name: ', name);
    const data = { encodedText: encodeURI(name) };

    // console.log(name);
    event.preventDefault()

    // check what text was put into the form field
    if (!checkForValidity(name)) {
        return;
    };

    const response = await analyzeData(data)
    .then(res => res.json());
    displayNewInfo(response);

}

const displayNewInfo = (res) => {

    document.getElementById('irony').innerHTML = res.irony;
    document.getElementById('confidence').innerHTML = res.confidence;
    document.getElementById('agreement').innerHTML = res.agreement;

};

export { displayNewInfo, handleSubmit };
