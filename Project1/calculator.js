const result = document.getElementById('result');
const buttons = document.querySelectorAll('.btn button');

let local = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            local = '';
            result.value = '';
        } else if (value === '=') {
            try {
                result.value = eval(local);
            } catch {
                result.value = 'Error'; 
            }
            local = result.value;  
        } else {
            local += value;
            result.value = local;
        }
    });
});
