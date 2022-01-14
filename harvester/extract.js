chrome.scripting.executeScript({
  target: { tabId: tab.id },
  function: extractWallets,
});

// Regex for wallets
// test.match(/[(^0x){40}]/)
// doc.replace(/<(.|\n)*?>/g, '').match(/[^0x]/g)
// doc = document.body.outerHTML.toString().replace(/\W/g, '')

function extractWallets() {
  console.log("[harvestor] extracting wallets...");
}

// let prowel = () => {
//   let matches = [];
//   var spans = document.getElementsByTagName("span");
//   var l = spans.length;
//   for (var i = 0; i < l; i++) {
//     var str = spans[i].innerText.match(/[(^0x){40}]/);
//     matches.push(str);
//   }
//   return matches
//     .filter((data) => data)
//     .filter((data) => data.input.length > 40);
// };

let prowel = () => {
    let matches = []
    var spans = document.getElementsByTagName('span');
    var l = spans.length;
    for (var i=0;i<l;i++) {
        var str = spans[i].innerText.match(/[A-Za-z0-9]{40}/)
        matches.push(str)
    }
    return matches.filter(data => data).map(data => data[0])
}

let prowel = () => {
    let matches = []
    var spans = document.getElementsByTagName('span');
    var l = spans.length;
    for (var i=0;i<l;i++) {
        var str = spans[i].innerText.match(/[A-Za-z0-9]{42}/)
        matches.push(str)
    }
    matches.filter(data => data).map(data => data[0])
    console.log(matches)
    return matches 
}