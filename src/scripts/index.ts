const input = document.querySelector('input') as HTMLInputElement;
const numbersButtons = document.querySelectorAll('[data-num]') as NodeListOf<HTMLButtonElement>;
const operatorButtons = document.querySelectorAll('[data-operator]') as NodeListOf<HTMLButtonElement>;
const clearButton = document.querySelector('.btn-clear') as HTMLButtonElement;
const equalButton = document.querySelector('.btn-equal') as HTMLButtonElement;
const img = document.createElement('img');

const imgUrl = new URL('../../dist/algebra4.a30f8cca.jpeg',import.meta.url );
img.src = imgUrl.toString();
img.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundImage = 'url(' + imgUrl + ')';

let num1: number | null = null;
let num2: number | null = null;
let currentOperator: string | null = null;

operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!num1) {
                num1 = parseFloat(input.value);
                currentOperator = button.textContent;
                input.value = '';
            }
        });
    });


numbersButtons.forEach(button => {
    button.addEventListener('click', () => {
        input.value += button.textContent;
    });
});

// Add event listener to equal button
equalButton.addEventListener('click', () => {
        if (!num1 || !currentOperator) return;
    num2 = parseFloat(input.value);
        let result: number;
    
        switch (currentOperator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                if (num1 || num2 === 0) {
                   result = 0;
                }
                result = num1 * num2;
                break;
    
                case '/':
                    if (num2 === 0) {
                        alert('not allowed!');
                        return;
                    }
                    result = num1 / num2;
                    break;
                default:
                    return;
            }
            
            input.value = result.toString();
            num1 = null;
            num2 = null;
            currentOperator = null;
        });
    
        // Add event listener to clear button
        clearButton.addEventListener('click', () => {
        input.value = '';
        num1 = null;
        num2 = null;
        currentOperator = null;
        });