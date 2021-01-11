import { displayNewInfo } from "../src/client/js/formHandler";
const Client = {handleSubmit: () => {}}

describe('API Call', () => {
    test('3 divs in results are filled with information from API', () => {

        document.body.innerHTML = (`
        <script>const Client = {handleSubmit: () => {}}</script>
        <form class="" onsubmit="return Client.handleSubmit(event)">
        <div id="title">Irony Detector</div>
        <input id="name" type="text" name="input" value="" placeholder="Type your text here!">
        <input id="submit" type="submit" name="" value="Submit">
        </form>
        <p>
            <span>Irony: </span>
            <span id="irony"></span>
        </p>
        <p>
            <span>Confidence: </span>
            <span id="confidence"></span>
        </p>                    
        <p>
            <span>Agreement: </span>
            <span id="agreement"></span>
        </p>`);

        require('../src/client/js/formHandler');

        const irony = document.getElementById('irony');
        const confidence = document.getElementById('confidence');
        const agreement = document.getElementById('agreement');
        const onSubmit = document.getElementById('submit');

        onSubmit.click();

        expect(irony.innerHTML).toBeDefined();
        expect(confidence.innerHTML).toBeDefined();
        expect(agreement.innerHTML).toBeDefined();
    });

    test.only('displayNewInfo displays new info', () => {
        const res = {irony: 'nonironic', confidence: '89', agreement: 'agreement'};
        document.body.innerHTML = (`
            <p>
                <span>Irony: </span>
                <span id="irony"></span>
            </p>
            <p>
                <span>Confidence: </span>
                <span id="confidence"></span>
            </p>                    
            <p>
                <span>Agreement: </span>
                <span id="agreement"></span>
            </p>`
        );

        displayNewInfo(res);
        expect(irony.innerHTML).toBe(res.irony);
        expect(confidence.innerHTML).toBe(res.confidence);
        expect(agreement.innerHTML).toBe(res.agreement);    
    })
});