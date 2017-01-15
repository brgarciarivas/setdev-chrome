import _ from 'lodash';

function myFunction() {

}

function expandBountyOverlay() {
    var overlay = document.getElementById('bounty-overlay');

    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';
    overlay.childNodes[0].style.top = '50vh';

    window.setTimeout(function() {
        collapseBountyOverlay();
        var buttons = document.body.getElementsByClassName('add-bounty-button');
        var firstButton = buttons[0];

        firstButton.removeEventListener('mouseover', null);
        firstButton.removeEventListener('mouseout', null);
        firstButton.removeEventListener('click', null);
        firstButton.addEventListener('mouseover', function() {
        });
        firstButton.addEventListener('mouseout', function() {
        })
        firstButton.addEventListener('click', function() {
        })

        firstButton.textContent = 'Current Bounty: ฿ 0.002';

        firstButton.style.backgroundColor = 'rgba(0,0,0,0)';
        firstButton.style.color = '#4078c0';
        firstButton.style.fontSize = '8px';
        firstButton.style.margin = '5px';
        firstButton.style.padding = '2px 5px';
        firstButton.style.position = 'absolute';
        firstButton.style.right = '0px';
        firstButton.style.bottom = '0px';
        firstButton.style.cursor = 'default';
        firstButton.style.boxShadow = 'none';
        firstButton.style.transition = 'all 0.45s';


    }, 25000)
}

function collapseBountyOverlay() {
    var overlay = document.getElementById('bounty-overlay');
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    overlay.childNodes[0].style.top = '100vh';
}

export function overlayBounties(dispatch) {

    var issues = document.body.getElementsByClassName('opened-by');
    var length = issues.length;

    console.log(length)

    var overlay = document.createElement('div');
    overlay.setAttribute('id', 'bounty-overlay');
    overlay.style.position = 'absolute';
    overlay.style.height = '100vh';
    overlay.style.opacity = '0';
    overlay.style.width = '100vw';
    overlay.style.top = '0';
    overlay.style.pointerEvents = 'none';
    overlay.style.left = '0';
    overlay.style.zIndex = '10000';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
    overlay.style.transition = 'all 0.25s linear';
    overlay.addEventListener('click', function() {
        collapseBountyOverlay();
    });

    var overlayItem = document.createElement('div');
    overlayItem.setAttribute('id', 'bounty-overlay-content');
    overlayItem.style.backgroundColor = 'white';
    overlayItem.style.borderRadius = '4px 4px 0 0';
    overlayItem.style.position = 'absolute';
    overlayItem.style.height = '50vh';
    overlayItem.style.width = '40vw';
    overlayItem.style.margin = 'auto';
    overlayItem.style.top = '100vh';
    overlayItem.style.zIndex = '10001';
    overlayItem.style.left = '30vw';
    overlayItem.style.transition = 'all 0.45s ease-out';
    overlayItem.style.boxShadow = '0 -1px 6px 2px rgba(37, 50, 56, 0.72)';
    overlayItem.style.padding = '20px';
    overlayItem.style.display = 'flex';
    overlayItem.style.flexDirection = 'column';
    overlayItem.style.flexItems = 'center';

    overlayItem.addEventListener('click', function(e) {
        e.stopPropagation();
        // collapseBountyOverlay();
    });

    var title = document.createElement('div');
    title.setAttribute('id', 'bounty-content-title');
    title.textContent = 'Send BTC to';
    title.style.fontSize = '22px';

    var image = document.createElement('div');
    image.setAttribute('id', 'bounty-content-image');
    image.style.backgroundImage = 'url("https://cloud.githubusercontent.com/assets/6628741/21963716/75878340-db0d-11e6-8fbe-568ffe4dadf2.png")';
    image.style.backgroundSize = '100% 100%';
    image.style.height = '150px';
    image.style.width = '150px';
    image.style.margin = 'auto';

    var address = document.createElement('span');
    address.setAttribute('id', 'bounty-content-text');
    address.textContent = '1Pag9hNiLpo2UVrmHZbMY7nKgVx3XJc4qo';
    address.style.fontSize = '11px';
    address.style.textAlign = 'center';

    overlayItem.appendChild(title)
    overlayItem.appendChild(image)
    overlayItem.appendChild(address)

    overlay.appendChild(overlayItem)

    document.body.appendChild(overlay);

    _.each(issues, function(issue, index) {
        var fundButton = document.createElement('span');
        fundButton.setAttribute('class', 'add-bounty-button');

        fundButton.textContent = '+ Add Bounty';

        fundButton.style.backgroundColor = '#4078c0';
        fundButton.style.color = 'white';
        fundButton.style.fontSize = '8px';
        fundButton.style.margin = '5px';
        fundButton.style.padding = '2px 5px';
        fundButton.style.position = 'absolute';
        fundButton.style.right = '0px';
        fundButton.style.bottom = '0px';
        fundButton.style.cursor = 'pointer';
        fundButton.style.borderRadius = '3px';
        fundButton.style.boxShadow = '0 1px 4px rgba(37, 50, 56, 0.12)';
        fundButton.style.transition = 'all 0.45s';

        fundButton.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'white';
            this.style.color = '#4078c0';
            this.style.boxShadow = '0 1px 5px rgba(37, 50, 56, 0.72)';
        });
        fundButton.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#4078c0';
            this.style.color = 'white';
            this.style.boxShadow = '0 1px 4px rgba(37, 50, 56, 0.12)';
        })

        fundButton.addEventListener('click', function() {
            expandBountyOverlay();
        })

        var parent = issue.parentNode.parentNode.parentNode.parentNode;
        parent.style.position = 'relative';

        parent.insertBefore(fundButton, parent.childNodes[0]);


    })


    dispatch({
        type: 'REGISTER_PAGE_LOAD',
        payload: {
            pageLoaded: true
        }
    });
}