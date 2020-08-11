const sendBtn = document.querySelector('#sendBtn');
const messageInput = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg);

function sendMsg() {
    let content = messageIn.value;
    if(content === '') {
        alert('Please Enter Valid Value. Current Value Is Empty')
    }
    else {
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
    // console.log(content);
}