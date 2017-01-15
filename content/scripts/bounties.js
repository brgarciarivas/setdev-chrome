import _ from 'lodash';

export function overlayBounties(dispatch) {
    var bountyAmounts = [
      '1 BTC',
      '0.15 BTC',
      '1.4 BTC',
      '3 BTC',
      '0.8 BTC'
    ];

    var textArray = [];

    var textInHtml = document.body.innerText;

    var issues = document.body.getElementsByClassName('opened-by');
    var length = issues.length;


    console.log(issues);
    console.log(length);

    _.each(issues, function(issue, index) {
        var newItem = document.createElement('span');
        var parent = issue.parentNode;
        newItem.textContent = '0.5 BTC'
        newItem.style.color = 'green';
        newItem.style.fontSize = '25px';
        newItem.style.margin = '10px';
        parent.insertBefore(newItem, parent.childNodes[0]);
    })


    dispatch({
        type: 'REGISTER_PAGE_LOAD',
        payload: {
            pageLoaded: true
        }
    });
}