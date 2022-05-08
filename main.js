document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let lbs = e.target.value;
    document.getElementById('poundsOutput').innerHTML = (lbs*2.2046).toFixed(2);
    document.getElementById('gOutput').innerHTML = (lbs*1000).toFixed(2);
    document.getElementById('ozOutput').innerHTML = (lbs*35.2739619).toFixed(2);
});
