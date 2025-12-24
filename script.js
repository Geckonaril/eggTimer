let sayacArac; 
let kalanSure = 0; 

const sayacElementi = document.getElementById('zamanGostergesi');
const yumurtaResmi = document.getElementById('yumurtaGorsel'); // Resim elementini seçtik

// Ses efekti için (İstersen ileride ses dosyası da ekleriz)
// const alarmSesi = new Audio('assets/alarm.mp3');

function sureAyarla(dakika) {
    clearInterval(sayacArac);
    kalanSure = dakika * 1;
    ekraniguncelle();
    
    // Süre seçildiğinde veya sıfırlandığında resim "Bekleme" moduna dönsün
    yumurtaResmi.src = 'assets/egg.png';
}

function sayaciBaslat() {
    clearInterval(sayacArac);

    if (kalanSure > 0) {
        // Başlata basınca "Pişme/Kaynama" animasyonu gelsin
        yumurtaResmi.src = 'assets/tencere.gif';

        sayacArac = setInterval(() => {
            kalanSure--;
            ekraniguncelle();

            if (kalanSure <= 0) {
                clearInterval(sayacArac);
                // Süre bitti! "Pişmiş/Hazır" resmi gelsin
                yumurtaResmi.src = 'assets/egg2.png';
                
                alert("Yumurta Pişti! Afiyet olsun!"); 
            }
        }, 1000);
    }
}

function ekraniguncelle() {
    const dakika = Math.floor(kalanSure / 60);
    const saniye = kalanSure % 60;
    const formatliDakika = dakika < 10 ? '0' + dakika : dakika;
    const formatliSaniye = saniye < 10 ? '0' + saniye : saniye;
    sayacElementi.innerText = `${formatliDakika}:${formatliSaniye}`;
}