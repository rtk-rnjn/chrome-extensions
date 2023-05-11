(async () => {
    chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
        if (request.type === "NEW") {
            await main();
        }
    });

    var globalClickCountCopy = 0;
    var globalClickCountEmpty = 0;

    const copyButtonTexts = ['Copied!', 'Double Copied', 'Triple Copied', 'Copied Again', 'More Copied', 'Epic Copied', 'Super Copied', 'Mega Copied', 'Ultimate Copied', 'Pro Max ++ Copied', 'Super Hyper Pro Max ++ Copied', 'God Level Copied', 'AAAAAAAAAAHHHHH', '...!', 'Ok!! ENOUGHHHH', 'RIP!'];

    const emptyButtonTexts = ['Emptied!', 'Double Emptied', 'Triple Emptied', 'Emptied Again', 'More Emptied', 'Epic Emptied', 'Super Emptied', 'Mega Emptied', 'Ultimate Emptied', 'Pro Max ++ Emptied', 'Super Hyper Pro Max ++ Emptied', 'God Level Emptied', 'AAAAAAAAAAHHHHH', '...!', 'Ok!! ENOUGHHHH', 'RIP!'];

    const navBarId = "compilationErrorIconsUl";
    const buttonIdCopyClipboard = "copyCodeToClipboard";
    const buttonIdEmptyClipboard = "emptyClipboard";
    const buttonClassName = "btn btn-xs mx-1 button-success p-2 my-auto XMS";
    const buttonStyle = "border: 1px solid #000000;";

    let parrentElement = document.getElementById(navBarId);

    Element.prototype.insertChildAtIndex = function (child, index = 0) {
        if (index >= this.children.length) {
            this.appendChild(child)
        } else {
            this.insertBefore(child, this.children[index])
        }
    }
    const main = async () => {

        let count = 1;
        while (!parrentElement) {
            await new Promise(resolve => setTimeout(resolve, count * 1000));
            parrentElement = document.getElementById(navBarId);
            count++;
        }

        const buttonCopy = document.createElement('p');
        buttonCopy.innerHTML = 'Copy Code!';
        buttonCopy.className = buttonClassName;
        buttonCopy.id = buttonIdCopyClipboard;
        buttonCopy.style = buttonStyle;

        parrentElement.insertChildAtIndex(buttonCopy, 0);

        let copyElement = document.getElementById(buttonIdCopyClipboard);

        const buttonEmptyClipboard = document.createElement('p');
        buttonEmptyClipboard.innerHTML = 'Empty Clipboard!';
        buttonEmptyClipboard.className = buttonClassName;
        buttonEmptyClipboard.id = buttonIdEmptyClipboard;
        buttonEmptyClipboard.style = buttonStyle;

        parrentElement.insertChildAtIndex(buttonEmptyClipboard, 1);

        let emptyElement = document.getElementById(buttonIdEmptyClipboard);

        copyElement.addEventListener('click', () => {
            const code = document.getElementsByClassName('ace_content')[0].innerText;
            navigator.clipboard.writeText(code);
            globalClickCountEmpty = 0;
            emptyElement.innerHTML = 'Empty Clipboard!';

            globalClickCountCopy = Math.min(globalClickCountCopy, copyButtonTexts.length - 1);
            copyElement.innerHTML = copyButtonTexts[globalClickCountCopy];
            globalClickCountCopy++;
        });

        emptyElement.addEventListener('click', () => {
            navigator.clipboard.writeText('');
            globalClickCountCopy = 0;
            copyElement.innerHTML = 'Copy Code!';

            globalClickCountEmpty = Math.min(globalClickCountEmpty, emptyButtonTexts.length - 1);
            emptyElement.innerHTML = emptyButtonTexts[globalClickCountEmpty];
            globalClickCountEmpty++;
        });
    };
    await main();
})();