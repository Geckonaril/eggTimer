let sayacArac; 
let kalanSure = 0; 
const alarmSesi = new Audio('assets/zil.mp3');
const sayacElementi = document.getElementById('zamanGostergesi');
const yumurtaResmi = document.getElementById('yumurtaGorsel');
// DÜZELTME: Class ismi aramıyoruz, direkt etiketi (h1) buluyoruz. Garanti yöntem.
const baslik = document.querySelector('h1'); 
const favicon = document.getElementById('dinamik-favicon');

function sureAyarla(dakika) {
    clearInterval(sayacArac);
    alarmSesi.pause();      // Sesi durdur
    alarmSesi.currentTime = 0; // Sesi başa sar
    kalanSure = dakika * 1;
    
    // YENİ BAŞLATINCA BAŞLIĞI DÜZELT
    // Başlık "Afiyet Olsun"da kaldıysa tekrar eski haline dönsün
    baslik.innerText = "eggTimer";
    baslik.style.color = "#f1c40f"; // Rengi beyaza (veya eski haline) döndür

    // Resim ve Favicon başa dönsün
    yumurtaResmi.src = 'assets/egg.png';
    if(favicon) favicon.href = 'assets/egg.png';
    
    ekraniguncelle();
}

function sayaciBaslat() {
    if(kalanSure <= 0) return;

    clearInterval(sayacArac);
    
    // Başlangıç ayarları
    baslik.innerText = "Cooking..."; // İstersen buraya da bir şey yazdırabilirsin
    yumurtaResmi.src = 'assets/tencere.gif';
    if(favicon) favicon.href = 'assets/tencere.gif';

    sayacArac = setInterval(() => {
        kalanSure--;
        ekraniguncelle();

        if (kalanSure <= 0) {
            clearInterval(sayacArac);
            alarmSesi.play();
            // --- SÜRE BİTİNCE OLACAKLAR ---
            
            // 1. Resmi değiştir
            yumurtaResmi.src = 'assets/egg2.gif';
            if(favicon) favicon.href = 'assets/egg2.gif';
            
            // 2. Başlığı değiştir (Sorun çıkaran kısım burasıydı)
            baslik.innerText = "Finished!";
            baslik.style.color = "#f1c40f"; // Sarı renk yap (Dikkat çeksin)
            
            // 3. Sekme adını güncelle
            document.title = "Bon Appetit!";
        }
    }, 1000);
}

function ekraniguncelle() {
    const dakika = Math.floor(kalanSure / 60);
    const saniye = kalanSure % 60;
    const formatliDakika = dakika < 10 ? '0' + dakika : dakika;
    const formatliSaniye = saniye < 10 ? '0' + saniye : saniye;
    
    document.title = `${formatliDakika}:${formatliSaniye} - cooking...`;
    sayacElementi.innerText = `${formatliDakika}:${formatliSaniye} `;
}