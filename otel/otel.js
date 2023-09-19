hesapla.onclick=function(){
    var ucret=document.getElementById("ucret") ;
    var giris=new Date(document.getElementById("giris").value);
    var cikis=new Date(document.getElementById("cikis").value);
    var agu= new Date("2023-08-31");
    
    if(giris>cikis){
     alert("giriş tarihiniz çıkış tarihinizden önce olamaz");
    }
var aguFark= (agu-giris)+(1000 * 60 * 60 * 24);
var eylulFark=(cikis-agu)-(1000 * 60 * 60 * 24);
var eylul=cikis-giris;




if(aguFark>=0 && eylulFark>=0){
 var sonuc= (aguFark*100)/ (1000 * 60 * 60 * 24)+(eylulFark*50)/ (1000 * 60 * 60 * 24);
 
 ucret.value =sonuc;
}
if(aguFark<=0 && eylulFark>=0){
 var sonuc1=(eylul*50)/ (1000 * 60 * 60 * 24);
 ucret.value =  sonuc1 ;
}
if(aguFark>=0 && eylulFark<=0){
 var sonuc2=(eylul*100)/ (1000 * 60 * 60 * 24);
 ucret.value=sonuc2 ;
}








}
