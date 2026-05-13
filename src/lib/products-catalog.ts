/** Her ilan için uyumlu Unsplash görseli + Türkçe açıklama (50 kayıt). */

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  city: string;
  condition: "Sıfır" | "İkinci el";
  tags: string[];
  imageUrl: string;
  description: string;
};

const IMG = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=960&q=85`;

function formatTry(n: number): string {
  return `${n.toLocaleString("tr-TR")} ₺`;
}

const cities = [
  "İstanbul",
  "Ankara",
  "İzmir",
  "Bursa",
  "Antalya",
  "Adana",
  "Kocaeli",
  "Eskişehir",
  "Trabzon",
  "Gaziantep",
] as const;

/** Görsel id’leri sırayla ürün listesiyle eşleşir; konu uyumu için tek tek seçildi. */
const IMAGE_IDS: string[] = [
  "1601956349578-c31521587860", // elektro/strat sahne
  "1650894752164-ec6bfdafe4de", // saksafon
  "1635043702882-1bd821a08d78", // dijital piyano klavyesi
  "1526142684086-7ebd69df27a5", // keman + kutusu
  "1550291652-6ea9114a47b1", // LP tek gövde
  "1608663003920-757dd225d6c5", // davul seti
  "1764323038644-501788b28f87", // Kawai dijital piyano el
  "1573871665247-2b556aa23460", // klarnet
  "1516450360452-9312f5e86fc7", // mikrofon
  "1526394931761-c03d7397cfa8", // ev stüdyosu / arayüz ortamı
  "1591365437381-2db81d59f1e0", // elektro (HSS estetik)
  "1519640350407-953bc0614f4c", // akustik gitar
  "1595340515387-61155fd65420", // bas gitar
  "1682271920907-781daffc09a6", // mızıka
  "1743487814218-3758ddd382a8", // MIDI klavye / kontrolcü
  "1598659870294-ee9a5a02c87a", // büyük diyafram mikrofon
  "1505740420928-5e560c06d30e", // kulaklık
  "1550985616-10810253b84d", // gitar + kombo amfi
  "1616533719060-a7fc492e9299", // amfi
  "1635043702883-20db8a5b1f4d", // arranger tuşlar
  "1607560105214-0aaa5f8fcba4", // stratocaster
  "1520166012956-add9ba0835cb", // elektro gitar
  "1510915361894-db8b79c880d2", // akustik çalma
  "1525201548942-d4252f5187e0", // akustik yakın plan
  "1508186736123-44a5fcb36f9f", // elektro detay
  "1568193755668-aae18714a9f1", // beyaz elektro
  "1706356104839-5d3a4e8eb35f", // elektro + ahşap sap
  "1516924962500-2b4b3b99ea02", // duvar gitarları (semi-hollow vitrin)
  "1470225621710-d075e2c2d8d6", // teller / aksesuar hissi
  "1516280443064-f78e1989c8fa", // çanta / sahne ekipmanı
  "1514525253161-7a46d19cd819", // nota / sehpa ortamı
  "1558618666-fcd25c85cd64", // pedal tahtası
  "1763889553133-fa80b1ee404c", // efekt pedalları
  "1571115764585-a42ed8ff922d", // stüdyo kabini / rack ortamı
  "1511379938547-c1f69419868d", // gitar duvarı (modelleme ünitesi vitrin)
  "1585562918855-cc7c760a8dcf", // ses kartı / arabirim hissi
  "1511371482916-0d04efd19f8a", // kayıt ortamı
  "1484704849700-f032a568e944", // monitör / kulaklık dinleme
  "1511671782779-c2d579fe2b99", // prodüksiyon masası
  "1464372989693-6148c10f24f0", // vokal / stüdyo mikrofon
  "1545128488-c021e0b4c6c3", // kulaklık stüdyo
  "1742783637429-2452a4caee8c", // beyaz kulaklık ürün
  "1628245124458-96793b50eba0", // piyano tuş estetiği (pad’li kontrolcü)
  "1617456254375-25d123745294", // canlı tuş / klavye
  "1560665301-91a70ba3a9ea", // piyano tuş kontrast
  "1690381763970-f26cfa7c0ef0", // klasik sahne piano görseli (vintage elektrik)
  "1671540921394-452ce567f4ff", // piyanoda tempo / çalışma
  "1520523132285-180274f3a9b4", // partitür müzik ortamı
  "1690181439367-a6876b9f7846", // saks nefesliler detay
  "1628625768177-a0450f91b07d", // nefesli enstrüman parça
];

type Row = readonly [
  name: string,
  category: string,
  basePrice: number,
  Product["condition"],
  readonly string[],
  string,
];

const rows: Row[] = [
  [
    "Fender Player Stratocaster",
    "Gitar",
    42900,
    "Sıfır",
    ["Alder gövde", "Parlak ton"],
    "Meksika üretimi Player Serisi strat; modern C profilli akçaağaç sap ve üç tek sargılı manyetikle parlak köprü tonu ile yumuşak orta seçenekleri bir arada sunar.",
  ],
  [
    "Yamaha YAS-280 Alto Saksafon",
    "Nefesli",
    38500,
    "İkinci el",
    ["Öğrenci seti", "Tam bakım"],
    "Yamaha’nın okul orkestralarında sık tercih edilen alto modeli; dengeli ağızlık–boru hattı ve kontrollü alt register ile öğrenci için öngörülebilir nefes direnci sağlar.",
  ],
  [
    "Roland FP-30X Dijital Piyano",
    "Tuşlu",
    29750,
    "Sıfır",
    ["Taşınabilir", "Bluetooth"],
    "SuperNATURAL piyano motoru ve escapement hissi veren tuş yüzeyi; hoparlörler küçük odaya uygun, kulaklıkla gece çalışmalarına ideal taşınabilir bir seçenektir.",
  ],
  [
    "Eastman VL80 Keman 4/4",
    "Yaylı",
    18200,
    "İkinci el",
    ["Abanoz aksam", "Dolgun ses"],
    "Handcrafted serisine yakın işçilik; abanoz ve akçaağaç kombinasyonu orta perdelerde sıcak, üst octave’de kontrollü bir yay çıkışı vermeyi amaçlar.",
  ],
  [
    "Gibson Les Paul Studio",
    "Gitar",
    68900,
    "Sıfır",
    ["Mahogany", "Burstbucker"],
    "Maun gövde ve humbucker dizilimi ile kalın riff ve solo tonlarında odaklı, tek parça köprü tailpiece ile sustain odaklı bir elektro gitar paketi.",
  ],
  [
    "Pearl Export EXX Davul Seti",
    "Vurmalı",
    45500,
    "İkinci el",
    ["5 parça", "Zil dahil değil"],
    "Poplar/maple gövdeciler ile dengeli tepki; eksiksiz ilk kurulum için ziller ve pedal ayrı planlanarak fiyatı düşük tutulmuş giriş–orta seviye sahne seti.",
  ],
  [
    "Kawai CA49 Dijital Piyano",
    "Tuşlu",
    62400,
    "Sıfır",
    ["Grand Feel", "Bluetooth audio"],
    "Grand Feel Compact tuş aksiyonu ve SK-EX/SK-5 örneklemeleri; oturma odası için hoparlör yönlendirmesi ve Bluetooth ile sessiz pratik ve dinleme akışı sunar.",
  ],
  [
    "Buffet Crampon E12 Klarinet",
    "Nefesli",
    35800,
    "Sıfır",
    ["Grenadilla", "Bakım seti"],
    "Grenadilla gövdede sıcak başlangıç tonu ve homojen register geçişi hedeflenir; öğrenci–orta seviye geçiş dönemi için tam bakım aksesuarlarıyla listelenmiştir.",
  ],
  [
    "Shure SM58 Dinamik Mikrofon",
    "Ses",
    4200,
    "Sıfır",
    ["Sahne standardı", "Dayanıklı gövde"],
    "Vokal ve yüksek SPL kaynaklarında yüzüllük türbülans filtresiyle sahne klasikleri; sahne düşüşlerine ve yoğun turne kullanımına dayanıklı çelik örgü yapısı.",
  ],
  [
    "Focusrite Scarlett 2i2 4th Gen",
    "Ses",
    7800,
    "Sıfır",
    ["USB-C", "Air modları"],
    "İki kombinasyon girişi ve 192 kHz’e kadar destek; ön yüz Air emülasyonu ile genişletilmiş tiz detayı ve basit ev kayıt akışı için düşük gecikmeli sürücü desteği.",
  ],
  [
    "Ibanez RG550 Genesis",
    "Gitar",
    51200,
    "İkinci el",
    ["Edge tremolo", "HSS"],
    "İnce süper-fast Wizard sap ve Floyd Rose uyumlu Edge köprüsü ile agresif shred ve dalgalı bend isteyen oyunculara yönelik koleksiyon değeri yüksek RG formu.",
  ],
  [
    "Taylor GS Mini Mahogany",
    "Gitar",
    28900,
    "Sıfır",
    ["Travel beden", "Warm ton"],
    "Kompakt Grand Symphony gövdesi mahogany üst yüz ile orta bölgelerde sıcak, çıtırdan arındırılmış parlaklık düzeyinde seyahat ve sofa çalımı için tasarlanır.",
  ],
  [
    "Yamaha TRBX304 Bas Gitar",
    "Gitar",
    12400,
    "İkinci el",
    ["Aktif EQ", "4 tel"],
    "Mahogany/maple blok ve aktif düşük/Yüksek üç bant dizaynı; slap ve parmak için ayrı “shape” seçenekleri sunan sahne dostu çıkış seviyesine sahiptir.",
  ],
  [
    "Hohner Special 20 Mızıka",
    "Nefesli",
    1850,
    "Sıfır",
    ["Richter", "C tonu"],
    "Akrilik taraklı klasik Blues Harp seçeneği; ağız uyumu rahat komb ve Richter dizilimi ile bend odaklı blues ve folk çalımına uygun.",
  ],
  [
    "Arturia MiniLab 3",
    "Tuşlu",
    5600,
    "Sıfır",
    ["25 tuş", "Analog Lab"],
    "Dokunsal pad ve knob kontrolleri Analog Lab yazılımıyla entegre; taşınabilir beat ve synth katmanları için masaüstü veya sırt çantasında hafif bir hub.",
  ],
  [
    "Neumann TLM 103",
    "Ses",
    38500,
    "Sıfır",
    ["Büyük diyafram", "Stüdyo"],
    "Kardioid büyük diyafram kondanser; doğal Presence boost olmadan detaylı tiz sürekliliği ve düşük gürültülü elektroniğiyle vokal ve solo enstrüman odaklı stüdyo standardıdır.",
  ],
  [
    "Audio-Technica ATH-M50x",
    "Ses",
    7200,
    "Sıfır",
    ["Kapalı kulaklık", "Mix"],
    "45 mm sürücü ile geniş stereo görüntü ve katlanır tasarım; DJ ve karma referans kullanıcıları için izolasyon ile dengeli ara frekans sunar.",
  ],
  [
    "Boss Katana 50 MKII",
    "Gitar",
    11800,
    "Sıfır",
    ["50W", "Çoklu amp modeli"],
    "Tone Studio ile geniş efekt sahnesi; Power Control ile evde düşük spl’de amp hissiyatını koruma ve üçüncül kanal seçenekleriyle ev provası için pratik kombine.",
  ],
  [
    "Orange Crush Bass 50",
    "Gitar",
    9800,
    "İkinci el",
    ["Analog preamp", "Tuner"],
    "Solid state güç ile turuncu karakteristik ön yüz; parametrik orta filtresi ve dahili tuner ile küçük prova odasında bas frekanslarını şekillendirmeyi kolaylaştırır.",
  ],
  [
    "Casio CT-S1000V Arranger",
    "Tuşlu",
    14200,
    "Sıfır",
    ["Vokal sentez", "Hafif"],
    "Vokal sentez motoru ile söz tabanlı vokal dizileri çıkarma ve hafif gövdesi ile sokak veya kamp gezilerinde pille çalım imkanı sunan arranger workstation.",
  ],
  [
    "Squier Classic Vibe 60s Strat",
    "Gitar",
    16800,
    "Sıfır",
    ["Vintage radius", "Alnico"],
    "Vintage stil tuner ve tinted sap estetiği; alnico single coil seti ile yumuşak kırılım ve yüksük temiz köprü tonlarını hedefleyen giriş seviyesi strat deneyimi.",
  ],
  [
    "Epiphone SG Standard",
    "Gitar",
    19500,
    "İkinci el",
    ["Mahogany", "LockTone"],
    "Çift humbucker ve ince gövde profili ile agresif rock tonlarında hızlı ergonomi; LockTone köprü tailpiece kombinasyonu ile akort stabilitesini artırmayı hedefler.",
  ],
  [
    "Martin LX1 Little Martin",
    "Gitar",
    11200,
    "Sıfır",
    ["Kompakt", "Sitka üst"],
    "Martin’in LX serisi kompakt akustikleri; sırt çantasında taşınabilir küçük ölçü ve sıkıştırılmış X bracing ile seyahat besteciliği için tasarlanır.",
  ],
  [
    "Cordoba C5 Klasik Gitar",
    "Gitar",
    8900,
    "Sıfır",
    ["Cedar üst", "Fan bracing"],
    "Fan bracing klasik titreşim yayılımına odaklıdır; sıcak sedir üst ve geniş çivi üst yüz ile parmak tekniği ve flamenko yakın pastel tonların dengesini Kurar.",
  ],
  [
    "Yamaha Pacifica 112V",
    "Gitar",
    9800,
    "Sıfır",
    ["Alnico V", "HSS"],
    "Alder gövde ve tremolo ile çok tarz riff/solo geçişlerine uygun tek parça bağlantısı; Coil split opsiyonu ile single coil yakınlığı arayan kullanıcıya esneklik verir.",
  ],
  [
    "PRS SE Custom 24",
    "Gitar",
    28500,
    "İkinci el",
    ["Wide Thin", "Tremolo"],
    "Çift humbucker ve geniş kesim sap profili ile progresif rock ve melodik solo geçişlerinde daha tok alt orta çıkış; PRS yüzük tailpiece ergonomisi sunulur.",
  ],
  [
    "Jackson JS32 Dinky",
    "Gitar",
    11200,
    "Sıfır",
    ["HSS", "Floyd Rose"],
    "Floyd Rose locking trem ve agresif freboard radius ile daha düşük aksiyonda shred; humbucker + tek tek manyetik kombo metal ritim işler için uygundur.",
  ],
  [
    "Gretsch G2622 Streamliner",
    "Gitar",
    22500,
    "İkinci el",
    ["Broad'Tron", "Semi hollow"],
    "Yarım ahşap gövdede sıcak jazz-blues çıkışı ve Broad'Tron MK2 manyetiklerle tek nota bileşimi arasında sıcak ama düşük gürültü performansını hedefler.",
  ],
  [
    "D'Addario NYXL 10-46 Tel Seti (12 pk)",
    "Aksesuar",
    4200,
    "Sıfır",
    ["Uzun ömür", "Paket"],
    "Carbon steel çekirdek ve daha yüksek mukavemetli süre için NY çelik bileşeni; sık koparan agresif benderların tel ömrünü uzatmayı vaat eden parti paketidir.",
  ],
  [
    "Mono M80 Vertigo Gitar Çantası",
    "Aksesuar",
    12500,
    "Sıfır",
    ["Hibrit koruması", "Siyah"],
    "Hybrid case tasarımı yarı sert yapısı ile sırt ergonomisi ve sıvı sıçraması önleyen dış yüzeyle turne ve günlük taşımayı kombine etmeyi hedefler.",
  ],
  [
    "Hercules GS414B Gitar Standı",
    "Aksesuar",
    1850,
    "Sıfır",
    ["Katlanır", "Yumuşak contalar"],
    "Otomatik kavrama mekanizmalarıyla tek ellerde enstrüman kilitlemesi ve yumuşak contalı temasla vernik çizilmelerinin önüne geçmeye yönelik katlanır stüdyo standı.",
  ],
  [
    "TC Electronic Hall of Fame 2",
    "Gitar",
    4200,
    "İkinci el",
    ["Mash footswitch", "TonePrint"],
    "Stereo reverb seçenekleri ve Mash yüzeyi ile dinamik reverb yükseltimi; TonePrint ile sanatçı presetlerini cep telefonundan yükleme özelliği sunar.",
  ],
  [
    "Strymon BigSky",
    "Gitar",
    28500,
    "Sıfır",
    ["Reverb", "300 preset"],
    "Çok katmanlı reverb makinesi shimmer ve cloud varyasyonları dahil karmaşık algoritmalara sahiptir; MIDI ve eksprasyon pedalı ile yaşayan soundscape performansına uyar.",
  ],
  [
    "Line 6 Helix LT",
    "Gitar",
    38500,
    "İkinci el",
    ["IR desteği", "Footswitch"],
    "DSP tabanlı modellemede yüzden fazla blok; IR yükleri ve stage ready footswitch tasarımı ile rack veya zeminde çift görevli rig kurulumuna uygun işlemci gücü sunar.",
  ],
  [
    "Kemper Profiler Head",
    "Gitar",
    98500,
    "İkinci el",
    ["Profil kaydı", "Rig yönetimi"],
    "Amp profiler motoru sahne mikrofonu ve kabin konum bilgisini yakalayarak dijital profil çıkarımı yapar; canlı sahne için power amp seçeneği ayrı değerlendirilir.",
  ],
  [
    "Universal Audio Volt 276",
    "Ses",
    11200,
    "Sıfır",
    ["1176 tarzı", "USB"],
    "Basit iki girişli ses kartında 76 tipi sıkıştırma hissiyatı için analog devre yaklaşımı; doğrudan kondenser ve DIY vokal için phantom beslemeden sorumlu busları içerir.",
  ],
  [
    "Presonus Studio 24c",
    "Ses",
    7800,
    "Sıfır",
    ["2 in / 2 out", "48V"],
    "Ultra düşük gecikmeli loopback seçeneği olan giriş/çıkış çiftleri; küçük ev stüdyosunda mikrofon + enstrüman hibrit bağlantılar için dengeli I/O yapısı sağlar.",
  ],
  [
    "Adam Audio T5V Monitör (çift)",
    "Ses",
    18500,
    "Sıfır",
    ["U-ART tweeter", "5 inç"],
    "Beş inch woofer ve U-Art accelerated ribbon twitter ile yakın dinleme üçgeninde kısmen düz tepki sunar; masa üstünde doğru açı üçgen için izolasyon pedalı önerilir.",
  ],
  [
    "Yamaha HS5 Monitör (çift)",
    "Ses",
    14200,
    "Sıfır",
    ["Room control", "5 inç"],
    "Düzgün tepki tasarımlı yakın sahne klasikleri; arka yüz ROOM CONTROL süzgeçleriyle köşeye yerleşimde daha az bozulmuş referans çıkışı yakalamayı hedefler.",
  ],
  [
    "Rode NT1-A Paket",
    "Ses",
    6200,
    "Sıfır",
    ["Şok mount", "Pop filtre"],
    "Büyük diyafram kardioid mikrofon; şok emici ve iki katlı pop filtresiyle ev vokal kabini kurulumunu tek pakette toplarken özellikle tiz hissiyatını yumuşatır.",
  ],
  [
    "Sennheiser HD 600",
    "Ses",
    14800,
    "İkinci el",
    ["Açık kulaklık", "Referans"],
    "Otolarengi sıcak nötr ara frekans genişliği; açık arka yüz yapısı derin sahne hissiyatıyla uzun kritik dinleme seanslarına yönlendirilir.",
  ],
  [
    "Beyerdynamic DT 770 Pro 80Ω",
    "Ses",
    7200,
    "Sıfır",
    ["Kapalı", "Stüdyo"],
    "Kapalı kulak deri yastıklarla yüksek izolasyon; 80 ohm sürümü taşınabilir arayüzlerle orta seviye çıkış gücü isteyen tracking ve mix oturumları için uygundur.",
  ],
  [
    "Akai MPK Mini MK3",
    "Tuşlu",
    4200,
    "Sıfır",
    ["8 pad", "Arpeggiator"],
    "Mini tuş adımları ve MPC pad hissi; note repeat ve arpeggiator ile beat üretimini yolda yapmayı kolaylaştıran Ableton uyumlu kompakt kontrol yüzeyi.",
  ],
  [
    "Novation Launchkey 37 MK3",
    "Tuşlu",
    9800,
    "Sıfır",
    ["Ableton entegrasyonu", "RGB pad"],
    "Otomatik Ableton uyandırma makrolarıyla clip lanç sıraları; MIDI çıkış ve RGB pad görsel kodlaması sahne doğaçlamasıyla entegredir.",
  ],
  [
    "Nord Stage 4 88",
    "Tuşlu",
    285000,
    "Sıfır",
    ["Triple sensor", "Organ + piano"],
    "Fiziksel drawbar ve üç sensörlü grand aksiyon; canlı sahne layering’inde synth, organ ve piano bölümü arasında ani geçişler için multitimbral güç sunar.",
  ],
  [
    "Korg SV-2 73",
    "Tuşlu",
    98500,
    "İkinci el",
    ["Vintage tuşlar", "RH3"],
    "RH3 aksiyon ve vintage elektrifikasyon modellerinden layer’lı vintage electric piano koleksiyonu; çıkış EQ’su ve vibrato/chorus efektleriyle retro tur rengi zenginleştirir.",
  ],
  [
    "Wittner Metronom 813M",
    "Aksesuar",
    1850,
    "Sıfır",
    ["Mekanik", "Cilalı"],
    "Mekanik sarkaçlı klasik pratik metronom; pil ihtiyacı olmadan tempo disiplinini geliştirmek isteyen enstrümantalistlere odaklı tahta kasa cilalı model.",
  ],
  [
    "Manhasset Nota Sehpası 4801",
    "Aksesuar",
    3200,
    "Sıfır",
    ["Orkestra", "Alüminyum"],
    "Orkestra ve dershane için alüminyum tabanlı stand; partitür ağırlıklarını dengeleyen geniş çene ve yükseklik kilidi ile uzun prova oturumlarında stabilite sağlar.",
  ],
  [
    "BG Franck Bec L2 Saksafon",
    "Nefesli",
    420,
    "Sıfır",
    ["Ebonit", "Alto"],
    "Alto saksafon için ebonit gövde ve dengeli açı; öğrenci ve semi-pro geçişte nefes ve embouchure konforunu artırmayı hedefleyen Fransız yapım ağızlık modeli.",
  ],
  [
    "Vandoren V5 A27 Alto Bek",
    "Nefesli",
    1850,
    "Sıfır",
    ["Klasik jazz", "Abanoz"],
    "Uzun yüzük ve klasik yüzük kombinasyonu ile jazz alto çizgisinde sıcak ve kontrollü hava hızına ihtiyaç duyan çalgıcıların tercihi için abanoz gövdeli alto bek.",
  ],
];

export const catalogProducts: Product[] = rows.map((row, i) => {
  const [name, category, basePrice, condition, tags, description] = row;
  const jitter = ((i * 173) % 900) - 400;
  const priceNum = Math.max(120, basePrice + jitter);
  return {
    id: String(i + 1),
    name,
    category,
    price: formatTry(priceNum),
    city: cities[i % cities.length],
    condition,
    tags: [...tags],
    imageUrl: IMG(IMAGE_IDS[i] ?? IMAGE_IDS[0]),
    description,
  };
});

/** Mağazada listelenen tam katalog (50 ürün). */
export const allProducts = catalogProducts;

/** Ana sayfa vitrin — ilk 8 ürün. */
export const featuredProducts = catalogProducts.slice(0, 8);

export function getProductById(id: string): Product | undefined {
  return catalogProducts.find((p) => p.id === id);
}
