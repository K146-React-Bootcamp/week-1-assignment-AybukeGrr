//SESSION STORAGE
//Session Storage, Local Storage’ın aksine verileri kısıtlı bir süre için depolar.
//Kullanıcı tarayıcı penceresini kapattığında veriler temizlenecektir.
//Veriler asla sunucuya gönderilmeyecektir.

//setItem(), veri eklemek için kullanılır.
window.sessionStorage.setItem("name", "Aybüke");
window.sessionStorage.setItem("lastname", "Gürer");

//getItem(), value değerine ulaşmak için kullanılır.
//Girilen key değeri storage'de mevcut değilse null return eder.
console.log(window.sessionStorage.getItem("name"));
console.log(window.sessionStorage.getItem("lastname"));
console.log(window.sessionStorage.getItem("phone")); //phone adında bir key değeri olmadığı için null döner.

//key(), seçilen indexteki key değerini bize return eder.
sessionStorage.key(0);

//removeItem(), storage içindeki seçilen verileri silerken kullanılır. Parametre değeri olarak key alınır.
sessionStorage.removeItem("lastname");

//clear(), storage içindeki tüm veriyi siler..
sessionStorage.clear();

//COOKIE
//Çerez, sunucu tarafı ile istemci tarafı arasında kalan bir miktar bilgidir.
//Bir web tarayıcısı, tarama sırasında bu bilgileri depolar.
//  Örneğin; herhangi bir sosyal medya hesabımıza her girişimizde tekrar yazmamak adına şifremizi kaydediyoruz.

//Çerezlerin Ömrünün Ayarlanması
// •Cookie’nin ömrünün belirli bir tarih ve saate kadar aktif kalmasını istiyorsak “expires” özelliğini kullanırız.
//document.cookie = "name=Aybüke; expires=Fri, 30 Sep 2020 10:00:00 UTC;";

//•	Cooki’nin ömrünün belirli bir süre kadar aktif olmasını istiyorsak “max-age” özelliğini kullanırız.
//document.cookie = "name=Aybüke; max-age="+60*60*24*2;

//Cookie'yi daha iyi anlayabilmek için yazılan textleri kaydeden ve istediğimizde geri dönderen bir örnek üzerinden çalışma yaptım.

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitButton = document.querySelector("#submitButton");
const cookieButton = document.querySelector("#cookieButton");

submitButton.addEventListener("click", () => {
  setCookie("firstName", firstText.value, 365);
  setCookie("lastName", lastText.value, 365);
});

cookieButton.addEventListener("click", () => {
  firstText.value = getCookie("firstName");
  lastText.value = getCookie("lastName");
});

//setCookie(), adında bir function oluşturuyoruz.
//Aldığı parametreler ise sırasıyla Cookie Adı, Cookie Değeri ve son olarak da tarayıcıda kaç dakika duracağını bilgilerini alır.

function setCookie(name, value, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
  setCookie(name, null, null);
}

//getCookie(), adında bir function oluşturuyoruz.
//Parametre olarak sadece cookie adını alır ve o cookie’ye ait değeri bize getirir.

function getCookie(name) {
  const decoded = decodeURIComponent(document.cookie);
  const array = decoded.split("; ");
  let result = null;

  array.forEach((element) => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1);
    }
  });
  return result;
}
