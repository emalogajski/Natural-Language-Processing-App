import { handleSubmit } from "../src/client/js/formHandler";
import { analyzeData } from "../src/client/js/API";

// Mocked function for API fetch data. Runs before the function is actually imported
jest.mock('../src/client/js/API', () => ({
    __esModule: true,
    analyzeData: jest.fn(),
  }));
  
const renderForm = value => {
    document.body.innerHTML = `
        <form id="form" class="">
        <div id="title">Irony Detector</div>
        <input id="name" type="text" name="input" value="${value}" placeholder="Type your text here!">
        <input id="submit" type="submit" name="" value="Submit">
        </form>`;
}



describe('formHandler', () => {
    test('analyzeData not called when input is less than 10 characters', () => {

        renderForm('hello');

        const form = document.getElementById('form');
        const event = {target: form, preventDefault: () => {}};
        handleSubmit(event);
        
        expect(analyzeData).not.toHaveBeenCalled();
    });
    test('analyzeData called when input is greater than 10 characters', () => {

        renderForm('hello my name is Flomilija');

        const form = document.getElementById('form');
        const event = {target: form, preventDefault: () => {}};
        handleSubmit(event);
        
        expect(analyzeData).toHaveBeenCalled();
    });
});