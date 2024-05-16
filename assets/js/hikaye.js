
alert("Hikaye Oyununa Hoş Geldiniz!");


let soru1 = prompt("Bugün hava nasıl (a) Güneşli (b) Bulutlu").toLowerCase();

// Soru 1
if (soru1 === "a") {
  alert("Bugün güneşli hava,Harikaa");

  let soru2 = prompt("Dışarıda bir etkinlik yapmak ister misin? (a) Evet (b) Hayır").toLowerCase();

  //Soru 2
  if (soru2 === "a") {
    alert("O zaman ne yapalım? Belki piknik yapabiliriz");
    alert("Piknik yaparken bir köpek gördük. Ne güzel bir gün");
  } else if (soru2 === "b") {
    alert("Tamam, o zaman evde vakit geçirelim.");
    alert("Evin bahçesinde kitap okurken kuş sesleri duyduk. Ne güzel bir gün");
  } else {
    alert("Geçersiz seçim yaptınız.");
  }
} else if (soru1 === "b") {
  alert(" bulutlu hava. Yine de güzel bir gün olabilir");

  let soru2 = prompt("Dışarıda bir etkinlik yapalım mı (a) Evet (b) Hayır").toLowerCase();

  if (soru2 === "a") {
    alert("sinemaya gidelim mi, ne dersin?");
    alert("Sinemada yeni bir film izledik, çok eğlendik");
  } else if (soru2 === "b") {
    alert("Evin içinde vakit geçirelim o zaman.");
    alert("Evde film izlerken yağmur başladı.");
  } else {
    alert("Geçersiz seçim yaptınız.");
  }
} else {
  alert("Geçersiz seçim yaptınız.");
}


alert("Hikaye sona erdi. İyi günler!");
