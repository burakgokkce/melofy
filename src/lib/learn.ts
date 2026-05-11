export type LearnCategory = {
  slug: string;
  title: string;
  preview: string;
  guides: { title: string; summary: string }[];
  warmup: string[];
};

export const learnCategories: LearnCategory[] = [
  {
    slug: "gitar-bas",
    title: "Gitar & bas",
    preview:
      "Tellerin gerginliği, aksiyon ve manyetik setuplar gibi satın alma ve ilk ayar süreçlerini netleştir.",
    guides: [
      {
        title: "İlk elektro gitar seçimi",
        summary:
          "Gövde türü (ST / LP / hollow), fretboard radius ve çıkış sinyalin hedefin.",
      },
      {
        title: "Bas için amp ve DI",
        summary:
          "Küçük oda için hoparlör hacmi yerine kulaklık veya doğrudan kayıta giden zincir.",
      },
      {
        title: "Temel bakım rutini",
        summary:
          "Tel değişimi, temizlik ve nemden koruma — sık sık yaşanan sıkışmaları önlemek için.",
      },
    ],
    warmup: ["Altı telde open akorların dengesi", "Penadan picking yönü kontrolü"],
  },
  {
    slug: "yayli",
    title: "Yaylılar",
    preview:
      "Yay bileği, yay yayı ve rosin ile başlayan doğru ergonomi günlük rahatlığı belirliyor.",
    guides: [
      {
        title: "Keman / viyola beden seçimi",
        summary:
          "Kol uzunluğuna uygun ölçü, çene dayanağı düzenlemesi ve ilk akort alışkanlığı.",
      },
      {
        title: "Çello taşıma ve oturuş",
        summary:
          "Diz geometrisi olmadan pratik etmek sırt sorunlarına yol açabiliyor.",
      },
      {
        title: "Yayı anlama",
        summary:
          "Yay için iletiği rosin yüzeyi, teller için ise sürekli ve paralel düzlem.",
      },
    ],
    warmup: ["Uzun yay vuruşlarında doğrusal düz çizgi", "Boş telde titreşimin sürmesi"],
  },
  {
    slug: "nefesli",
    title: "Nefesliler",
    preview:
      "İlk nefeste direnç hissini yakalamadan önce doğru aksesuar ve emiş ölçüsü kritik.",
    guides: [
      {
        title: "Klarnet / saks için kamış ritmi",
        summary:
          "Ucun kendi diline uygun kalınlık seçimi günlük ısınmadan daha çok güvenilirlik getiriyor.",
      },
      {
        title: "Nefes hızını ölçmek",
        summary:
          "Metronoma göre küçük cümleler; taşmış tonları erken yakalamak için pratik günlük.",
      },
      {
        title: "Enstrüman kurutma rutini",
        summary:
          "İç yüzeydeki rutubet yüzünden oluşabilecek sıkışmaları azaltmak.",
      },
    ],
    warmup: ["Uzun ses hedefi için sabit basınç", "Dilin alt damak mesafesi denemesi"],
  },
  {
    slug: "tuslu",
    title: "Tuşlular",
    preview:
      "Klavyenin hissiyatını belirleyen aksiyon tipi — konser piyanodan controller’a ölçekli hedefler.",
    guides: [
      {
        title: "Dijital piyano ve ham tuş hissiyatı",
        summary:
          "Üç sensör yerine iki sensör, escapement simülasyonu ve hoparlör yönleri.",
      },
      {
        title: "MIDI controller ile yazım",
        summary:
          "Velocity eğrisi map’lenmesi, aftertouch gereksinimi ve DAW seçimi.",
      },
      {
        title: "Kulak için referans tonalite",
        summary:
          "Transpoze etmek bazen daha iyi ergonomi için geçici çözüm olabilir.",
      },
    ],
    warmup: ["Her iki ellerde yüzük parmağı geçişi", "Çapraz ellerde omuz sıkılığını gevşetmek"],
  },
  {
    slug: "vurmali",
    title: "Vurmalılar",
    preview:
      "Davul yüzleri, pedallar ve oda akustiği mikrofonlama seçiminden önce doğru sırayı oluşturur.",
    guides: [
      {
        title: "Evde küçük set kurulumları",
        summary:
          "Mesh head / susturucu pedler ile komşu ilişkisini düşük frekansta sürdürme.",
      },
      {
        title: "Kick ve hi-hat balansları",
        summary:
          "El ve ayak zamanlamasını ayrı katman olarak metronoma oturtmak.",
      },
      {
        title: "Temel bakım kutusu",
        summary:
          "Anahtar seti ve basit yağ rutini için haftalık kontrol.",
      },
    ],
    warmup: ["Kick ve rimshot ayrımıyla ghost notalar", "16’lık subdivision’da bilek rahatlığı"],
  },
];

export type StarterStepDetail = {
  id: string;
  title: string;
  intro: string;
  bullets: string[];
  takeaway: string;
};

/** “İlk 5 adım” liste öğeleriyle birebir sıra — tıklanınca açılan içerik. */
export const starterStepsContent: StarterStepDetail[] = [
  {
    id: "step-1",
    title: "Doğru duruş ve el pozisyonu",
    intro:
      "Omuz sıkılığı yüzlek veya sıkışmış bir ses üretimi demek olabiliyor. Baştan dengeli oturuş zaman kazandırır.",
    bullets: [
      "Sandalyede kalça seviyesinin diz hizasında veya çok az üzerinde ayarlanması",
      "Gitar için enstrümanın bacak ile gövdenin üst yüzünde oluşan üçgenle dengelenmesi",
      "Dijital klavyede dirsekleri düşürmeden el bileğinin tarafsız eksende kalması",
    ],
    takeaway:
      "Dakikayı saymadan bile günde üç kez 30 saniye omuz sıkılığını bilinçlice bıraktırmış ol.",
  },
  {
    id: "step-2",
    title: "İlk ses üretimi ve nefes / yay kontrolü",
    intro:
      "İlk çıkan tonun doğruluğu, sonraki tüm karmaşık frazlar için güven oluşturan temel günlük rutindir.",
    bullets: [
      "Uzun süre için metronoma göre 4 ölçü boyunca ilk notayı sabit tutmak",
      "Nefesli çalgılarda daha geniş fazda nefes basıncının çok sıçrama yapmaması",
      "Yaylı çalgılarda yayın teller ile 90 derece yaklaşımını göz ile kontrol etmek",
    ],
    takeaway:
      "Her seans başında küçük “uzun ses” egzersizi: artıları netleşecek küçük farkların farkına varırsın.",
  },
  {
    id: "step-3",
    title: "Basit bir egzersiz döngüsü",
    intro:
      "Karmaşığa sıçramadan önce aynı hücreyi üç farklı tempoda güvenilirliğe yaklaşıyoruz.",
    bullets: [
      "Çok küçük bir motiv ( iki ölçü ) seç ve hatalı notaya gelmeden 3 başarılı tekrar",
      "+10 BPM çıkışa bir alt sınır koyarak sadece yukarı yönde hızlanma planı yaz",
      "Egzersizi bitirdiğinde 10 saniye sessizce ne olduğunu not et",
    ],
    takeaway:
      "Zihinsel yorgunluğu azaltmak için net bitiş çizgisi olan mini döngüler.",
  },
  {
    id: "step-4",
    title: "Kulak ve ritim mini oyunu",
    intro:
      "Ritim duygusunu metronom bağımlılığından çıkarmak için basit vokal ve el çırpma oyunları.",
    bullets: [
      "Metronom sadece 2 ve 4’te tık: aradaki hissi doldur",
      "Rastgele uzunluklarda duraklarla kendi kendine call & response",
      "Kısa bir şarkıyı sadece ilk vuruşları sayarak hatırlamaya çalış",
    ],
    takeaway:
      "İç sesle saymayı yavaş yavaş hissetmeye taşımak.",
  },
  {
    id: "step-5",
    title: "Sonraki derslere köprü",
    intro:
      "Öğrendiğin küçük parçayı bir sonraki müfredat hedefiyle bağla; kopuk ilerlemek motivasyon düşürüyor.",
    bullets: [
      "Tek bir teknik hedef ( örn. legato ) seç ve haftanın sonunda kısa video kaydı al",
      "Öğrendiğin içeriği repertuarda bağlanabilir küçük bir geçiş cümlesiyle bağla",
      "Forum veya hocana sorulacak net bir soru yaz ( genel soru yerine zaman damgalı )",
    ],
    takeaway:
      "Her blok sonunda bağlayıcı cümleyi yazmak sonraki seansların yönünü netleştirir.",
  },
];
