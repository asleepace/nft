const WALLET_REGEX = new RegExp(/[A-Za-z0-9]{42}/)


let prowel = () => {
    let matches = []
    var spans = document.getElementsByTagName('span');
    var l = spans.length;
    for (var i=0;i<l;i++) {
        var str = spans[i].innerText.match(/[A-Za-z0-9]{42}/)
        matches.push(str)
    }
    return matches.filter(data => data).map(data => data[0])
}