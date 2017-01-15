function animateBitcoinReward() {
    console.log('animateBitcoinReward');

    var title = document.getElementById('bounty-content-title');
    var text = document.getElementById('bounty-content-text');
    var image = document.getElementById('bounty-content-image');
    var overlay = document.getElementById('bounty-overlay');
    var overlayContent = document.getElementById('bounty-overlay-content');
    var btcAmount = document.createElement('span');

    btcAmount.setAttribute('id', 'bitcoin-amount-text');
    btcAmount.textContent = '+ 1.364 BTC';
    btcAmount.style.fontSize = '18px';
    btcAmount.style.margin = '3px';
    btcAmount.style.fontWeight = '700';
    btcAmount.style.textAlign = 'center';

    var btcField = document.createElement('input');
    btcField.type = 'text';
    btcField.placeholder = 'Enter Bitcoin address';
    btcField.style.border = '1px solid #4078c0';
    btcField.style.width = '70%';
    btcField.style.fontSize = '12px';
    btcField.style.borderRadius = '4px';
    btcField.style.padding = '5px 10px';
    btcField.style.margin = '10px 15%';

    var sendButton = document.createElement('div');
    sendButton.textContent = 'Collect';
    sendButton.placeholder = 'Enter Bitcoin address';
    sendButton.style.borderRadius = '4px';
    sendButton.style.backgroundColor = '#4078c0';
    sendButton.style.color = 'white';
    sendButton.style.textAlign = 'center';
    sendButton.style.width = '30%';
    sendButton.style.padding = '5px 8px';
    sendButton.style.margin = '10px 35% 0';
    sendButton.style.cursor = 'pointer';
    sendButton.style.transition = 'all 0.25s ease-out';
    sendButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'white';
        this.style.boxShadow = '0 0 0 1px #4078c0 inset';
        this.style.color = '#4078c0';
    });
    sendButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#4078c0';
        this.style.boxShadow = '0 0 0 0';
        this.style.color = 'white';
    })
    sendButton.addEventListener('click', function(e) {
        e.stopPropagation();
        var overlay = document.getElementById('bounty-overlay');
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        overlay.childNodes[0].style.top = '100vh';
    });
    

    overlayContent.appendChild(btcAmount);
    overlayContent.appendChild(btcField);
    overlayContent.appendChild(sendButton);

    overlayContent.style.padding = '0 0 20px';
    overlayContent.style.width = '30vw';
    overlayContent.style.height = '70vh';
    overlayContent.style.left = '35vw';
    overlayContent.style.top = '30vh';

    title.textContent = 'Congratulations!';
    title.style.textAlign = 'center';

    text.textContent = 'One of your pull requests has been merged and your bounty has been released! Enter a bitcoin address to collect your reward:'
    text.style.margin = '5px 20px';

    image.style.backgroundImage = 'url("https://cloud.githubusercontent.com/assets/4914611/21962121/b062fe3a-daeb-11e6-9f55-2270f5276ed5.gif")';
    image.style.backgroundSize = 'cover';
    image.style.backgroundPosition = 'center';
    image.style.width = '100%';
    image.style.height = '45%';
    image.style.margin = '0 0 15px';
    image.style.borderRadius = '4px 4px 0 0';

    overlayContent.removeChild(image);
    overlayContent.insertBefore(image, title)

    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';
}

export function checkMerge(interval) {
    console.log('checkMerge');
    fetch('https://api.github.com/repos/otech47/setcoins-web/pulls/7/merge', {
        method: 'GET',
        crossDomain: true,
        headers: {
            Accept: 'application/json',
            'Proxy-Authorization': 'brgarciarivas:5a1e559c90a50eb962563b51fc349115928300a9'
        }
    })
    .then(res => res.json())
    .then(res => {
        console.log('res');
        console.log(res);
        console.log('res.message');
        console.log(res.message);

        if(res.message) {

        } else {
            animateBitcoinReward();
            clearInterval(interval);
        }
    }).catch(err => {
        console.log('error = ' + err);
        console.error(err);
        animateBitcoinReward();
        clearInterval(interval);

    })
}