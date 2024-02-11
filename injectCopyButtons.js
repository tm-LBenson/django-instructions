'use strict';
document.addEventListener('DOMContentLoaded', (event) => {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach((block) => {
        const preElement = block.parentNode;
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.textContent = 'Copy Code';

        copyButton.addEventListener('click', () => {
            const code = block.textContent;
            navigator.clipboard.writeText(code).then(() => {
                copyButton.textContent = 'Copied!';
                setTimeout(() => copyButton.textContent = 'Copy Code', 2000); 
            }).catch(err => {
                console.error('Error copying text: ', err);
            });
        });

        preElement.parentNode.insertBefore(copyButton, preElement);
    });
});
