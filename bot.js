var config = require('./config');
var Twit = require('twit');
var T = new Twit(config);
//Recive all the translations to upload to Twitter.
var translations = ["Alles sal reg wees","كل شي سيصبح على مايرام","Hər şey yaxşı olacaq","Усё будзе добра","Всичко ще бъде наред","সবকিছু ঠিক থাকব","Sve će biti u redu",
"Tot anirà bé","Ang tanan mahimong maayo","Všechno bude v pořádku","Bydd popeth yn iawn","Alt kommer til at være okay","Alles wird gut","Ολα θα πάνε καλά",
"Everything will be fine","Everything will be fine","Todo estará bien","Kõik saab korda","Dena ondo egongo da","همه چیز خوب خواهد بود","tulee olemaan hyvin","Tout ira bien","Beidh gach rud ceart go leor","Todo estará ben","બધું સારું થઇ જશે","Duk abin zai zama lafiya","सब कुछ ठीक हो जाएगा","Everything will be fine",
"Sve će biti u redu","Tout bagay pral bon","Minden rendben lesz","Ամեն ինչ լավ կլինի","Semuanya akan baik-baik saja","Ihe niile ga-adị mma","Þetta reddast","Tutto andrà bene",
"הכל יהיה בסדר ","何もかも良くなるだろう","Kabeh bakal apik","Ყველაფერი კარგად იქნება","Барлығы жақсы болады","អ្វី​គ្រប់យ៉ាង​នឹង​ល្អ​ប្រសើរ​ឡើង","ಎಲ್ಲವೂ ಚೆನ್ನಾಗಿರುತ್ತವೆ","다 괜찮을거야",
"Everything will be fine","ທຸກສິ່ງທຸກຢ່າງຈະດີ","Viskas bus gerai","Viss būs labi","Handeha tsara ny zavatra rehetra","Ka pai nga mea katoa","Се ќе биде во ред","എല്ലാം നന്നായിരിക്കും",
"Бүх зүйл сайхан болно","सर्व काही ठीक होईल","Segala-galanya akan baik","Kollox se jkun tajjeb","အားလုံးအဆင်ပြေသွားမှာပါ","सबै ठिक हुन्छ","Alles komt goed","Alt vil bli bra","Chilichonse chidzakhala bwino",
"ਸੱਭ ਕੁੱਝ ਠੀਕ ਹੋਵੇਗਾ","Wszystko będzie dobrze","Tudo vai ficar bem","Totul va fi bine","все будет отлично","හැම දෙයක්ම හොඳයි","Všetko bude v poriadku","Vse bo v redu",
"Wax walba waa ay fiicnaan doonaan","Cdo gje do te rregullohet","Све ће бити у реду","Lintho tsohle li tla ba hantle","Sagalana bakal rupa","Allt kommer att bli bra",
"Kila kitu kitakuwa vizuri","எல்லாம் சரியாகி விடும்","అంతా బాగానే ఉంటుంది అంతా మంచి జరుగుతుంది","Ҳама чиз хуб мешавад","ทุกอย่างจะดี","Lahat ay magiging maayos","Herşey iyi olacak",
"Все буде добре","سب کچھ ٹھیک ہو جائے گا","Hammasi yaxshi bo&#39;ladi","Mọi thứ sẽ ổn thôi","אַלץ וועט זיין פייַן","Gbogbo nkan a dara","一切都会好起来的","一切都会好起来的","一切都會好起來的",
"Yonke into izolunga"];

var nums = [];
var gen_nums = [];

//Fill index in the array.
for(var i=0;i<translations.length;i++)
{
  nums.push(i);
}

//Repetetive detection function
function in_array(array, el) {
   for(var i = 0 ; i < array.length; i++)
       if(array[i] == el) return true;
   return false;
}

//Generate random number without repetitive numbers.
function get_rand(array) {
    var rand = array[Math.floor(Math.random()*array.length)];
    if(!in_array(gen_nums, rand)) {
       gen_nums.push(rand);
       return rand;
    }
    return get_rand(array);
}

//Posting Tweets function.
T.post('statuses/update', { status: "Everything will be fine"+" :)" }, function(err, data, response) {
  //console.log(data)
})

//Set the interval of time between tweets.
setInterval(tweetit,1000*60*60*12);
function tweetit(txt)
{
  var txt = translations[get_rand(nums)];
  T.post('statuses/update', { status: txt + " :)" }, function(err, data, response) {
  })
}
