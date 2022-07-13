let selection = document.querySelector('select');

selection.addEventListener('change',() => {
    result.innerText = selection.options[selection.selectedIndex].text;

});