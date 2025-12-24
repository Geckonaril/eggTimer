let sayacArac; // Zamanlayıcıyı tutacak değişken
let kalanSure = 0; // Saniye cinsinden

const sayacElementi = document.getElementById('zamanGostergesi');

// 1. Süreyi Ayarlayan Fonksiyon (Butonlara basınca çalışır)
function sureAyarla(dakika) {
    // Eğer hali hazırda çalışan bir sayaç varsa durdur
    clearInterval(sayacArac);
    
    // Dakikayı saniyeye çevir
    kalanSure = dakika * 60;
    
    // Ekrana yazdır
    ekraniguncelle();
}

// 2. Sayacı Başlatan Fonksiyon
function sayaciBaslat() {
    // Eğer zaten çalışıyorsa tekrar başlatma
    clearInterval(sayacArac);

    if (kalanSure > 0) {
        sayacArac = setInterval(() => {
            kalanSure--;
            ekraniguncelle();

            // Süre bitti mi kontrol et
            if (kalanSure <= 0) {
                clearInterval(sayacArac);
                alert("Yumurta Pişti! Afiyet olsun!"); 
                // İleride buraya ses çalma kodu ekleyeceğiz
            }
        }, 1000); // 1000 milisaniye = 1 saniye
    }
}

// 3. Ekrana "05:00" formatında yazdıran yardımcı fonksiyon
function ekraniguncelle() {
    const dakika = Math.floor(kalanSure / 60);
    const saniye = kalanSure % 60;

    // Sayı 10'dan küçükse başına 0 ekle (9 -> 09)
    const formatliDakika = dakika < 10 ? '0' + dakika : dakika;
    const formatliSaniye = saniye < 10 ? '0' + saniye : saniye;

    sayacElementi.innerText = `${formatliDakika}:${formatliSaniye}`;
}