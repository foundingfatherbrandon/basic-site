
document.querySelectorAll('.copy').forEach(function(b){
  b.addEventListener('click',function(){
    var t=b.getAttribute('data-copy');
    function done(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy'},1600)}
    try{
      navigator.clipboard.writeText(t).then(done,function(){sel(b)});
    }catch(e){sel(b)}
  });
});
function sel(b){
  var v=b.closest('.c-row').querySelector('.val');
  var r=document.createRange();r.selectNodeContents(v);
  var s=window.getSelection();s.removeAllRanges();s.addRange(r);
  b.textContent='Selected';setTimeout(function(){b.textContent='Copy'},1600);
}
