export  function setStateFromKeywords(dispatch){
  var bountyAmounts = [
    '1 BTC',
    '0.15 BTC',
    '1.4 BTC',
    '3 BTC',
    '0.8 BTC'
  ];

  var textArray = [];

  var textInHtml = document.body.innerText;

  var body = document.body.getElementsByTagName('div');
  var length = body.length;

  dispatch({
      type: 'RESET',
      payload:{
          subtag_name: subKey,
          subtag_count: cat[subKey]
      }
  })
}
