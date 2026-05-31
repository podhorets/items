import type { Item } from "../types";

/**
 * Local data source for the move-out sale.
 *
 * This is intentionally a typed module rather than a raw JSON file so the data
 * stays type-checked and tree-shakeable. To swap in a different source later
 * (e.g. a fetch), only `getItems` needs to change.
 *
 * `price`    = your asking price.
 * `newPrice` = Neupreis (retail price when new).
 * `link`     = optional link to the new item's product page.
 */
const items: Item[] = [
  {
    number: 1,
    title: "Einbauküche inkl. Elektrogeräte (Waschmaschine, Herd & Backofen)",
    description:
        "",
    price: 350,
    newPrice: 0,
    link: "",
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238539/Items/IMG_9779_hjkmoy.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238541/Items/IMG_9781_rtlsqd.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238542/Items/IMG_9784_whq0bu.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238542/Items/IMG_9783_nyzaj6.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238541/Items/IMG_9782_kjhe7i.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780240519/Items/IMG_9814_jssiik.heic"
    ],
  },
  {
    number: 2,
    title: "Schwebetürenschrank 250 cm",
    description:
      "Schwebetürenschrank – ein stilvoller und praktischer Schrank mit Spiegel, Einlegeböden und Kleiderstange.",
    price: 170,
    newPrice: 482,
    link: "https://imoebel24.de/produkt/schwebeturenschrank-alba-i-250-cm/?attribute_pa_korpus=weis&attribute_pa_front=weis-spiegel&attribute_pa_oswietlenieled=ohne-led-beleuchtung",
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238518/Items/IMG_9752_ooi4im.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238518/Items/IMG_9753_bhy3jv.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238518/Items/IMG_9754_pgpnrz.heic",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238529/Items/IMG_9760_qcd2ky.png",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238528/Items/IMG_9757_hsjj4y.png",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238529/Items/IMG_9758_t6ho4i.png",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238532/Items/IMG_9759_rdysda.png",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238521/Items/IMG_9761_t7hhlo.png",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238522/Items/IMG_9762_froscz.png",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238525/Items/IMG_9763_oy0gqm.png",
    ],
  },
  {
    number: 3,
    title: "Schlafsofa Bella, B: 241 cm, Liegefl. 142x194 cm",
    description:
      "Bettfunktion, Bettkasten & 2 Zierkissen, Federkern",
    price: 170,
    newPrice: 456,
    link: "https://www.otto.de/p/collection-ab-schlafsofa-bella-b-241-cm-liegefl-142x194-cm-bettfunktion-bettkasten-2-zierkissen-federkern-631749497/?variationId=631782115&shem=rimspwouoe,#ech=29670652",
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238514/Items/IMG_9698_j9fsuw.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238512/Items/IMG_9697_z5frva.heic",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238514/Items/IMG_9699_c1edbj.heic"
    ],
  },
  {
    number: 4,
    title: "4x Esszimmerstuhl mit Armlehnen",
    description:
      "Preis für 4 Stück",
    price: 95,
    newPrice: 280,
    link: "",
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238502/Items/IMG_9681_imdu3j.heic",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238506/Items/IMG_9687_sftadg.heic",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238503/Items/IMG_9682_picwp4.heic",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238502/Items/IMG_9683_v7yybf.heic",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238503/Items/IMG_9684_qm87b5.heic",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238504/Items/IMG_9685_iodk50.heic",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238511/Items/IMG_9694_ytnjm9.heic",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238511/Items/IMG_9695_adyvnt.heic",
    ],
  },
  {
    number: 5,
    title: "Höhenverstellbarer Schreibtisch #1",
    description:
      "Höhenverstellbarer Schreibtisch in der Größe 160 x 70 cm mit einem flexiblen Höhenbereich von 72 bis 120 cm. Die integrierte Memory-Funktion ermöglicht das Speichern von 4 individuellen Höhenstufen für maximalen Komfort im Alltag.",
    price: 70,
    newPrice: 170,
    link: "",
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238548/Items/IMG_9790_epf5nw.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238551/Items/IMG_9794_pt7h9q.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238550/Items/IMG_9793_hezfag.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238550/Items/IMG_9791_ptzpzx.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238551/Items/IMG_9796_uay2zq.heic"
    ],
  },
  {
    number: 6,
    title: "Höhenverstellbarer Schreibtisch #2",
    description:
        "Höhenverstellbarer Schreibtisch in der Größe 120 x 60 cm mit einem flexiblen Höhenbereich von 72 bis 120 cm. Die integrierte Memory-Funktion ermöglicht das Speichern von 4 individuellen Höhenstufen für maximalen Komfort im Alltag.",
    price: 75,
    newPrice: 313,
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238548/Items/IMG_9786_xb3dpr.heic",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238544/Items/IMG_9785_qzszac.heic",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238546/Items/IMG_9788_q0aos3.heic",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238544/Items/IMG_9789_bmcfqh.heic",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780241966/Items/Image_31.05.26_at_17.39_eamf50.png",
    ],
  },
  {
    number: 7,
    title: "7-Zonen Taschenfederkern-Matratze mit Hybridschaum",
    description:
      "Taschenfederkern ist nicht gleich Taschenfederkern. Der Dynamic®-Taschenfederkern ist in puncto Körperunterstützung, Haltbarkeit und Atmungsaktivität bestens konzipiert. Dank komfortabler Bauhöhe von 25 cm und einem Taschenfederkern, der auf die jeweiligen Körperzonen abgestimmt ist, wird der Körper optimal gestützt und der Druck wird dort abgefedert wo er entsteht. Gleichzeitig liegt der Fokus auf einem ganzjährig angenehmen Schlafklima. Dies wird durch die gute Belüftung des Dynamic®-Taschenfederkernes und der offenporigen Zellstruktur der innovativen Lumatex®-Hybridschaumabdeckung gewährleistet. Ebenfalls ist der Matratzenbezug durch die Silver-Spirit Veredelung geruchshemmend, antistatisch und antibakteriell.",
    price: 150,
    newPrice: 311,
    link: "https://www.lidl.de/p/hn8-schlafsysteme-7-zonen-taschenfederkern-matratze-dynamic-tfk-mit-hybridschaum/p100182984011?tug=AI_SEGMENT_2",
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780242669/Items/gcp5ae37e6f1786459b983a3e0692427445_mjssej.webp",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238528/Items/IMG_9764_lz1so8.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238533/Items/IMG_9767_krunow.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238537/Items/IMG_9775_zdm0bt.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780242669/Items/gcp7de191ba7e544e11bb3d4f12670f0c32_tvxmjt.webp",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780242668/Items/gcp3fbdc98505884a389cbab46e44849ddf_hktxss.webp",
    ],
  },
  {
    number: 8,
    title: "Polsterbett 160x200cm",
    description:
      "Polsterbett 160x200cm mit 2 USB, Doppelbett mit Lattenrost, Jugendbett mit LED, Holzbett mit Schwebebettrahmen, Leinen, Beige",
    price: 140,
    newPrice: 300,
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780244909/Items/acd39f833e08e17ec5325d2d0b54fd76_ci9wno.webp",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238528/Items/IMG_9764_lz1so8.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238530/Items/IMG_9765_hdz48s.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238532/Items/IMG_9766_fqnybt.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238536/Items/IMG_9772_yeyzcm.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238536/Items/IMG_9771_am47nn.heic",
    ],
  },
  {
    number: 9,
    title: "Ergonomischer Bürostuhl (fast neu)",
    description:
        "Ergonomischer Bürostuhl V-Stuhl für langes Sitzen & Rückenunterstützung",
    price: 90,
    newPrice: 0,
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238562/Items/IMG_9805_mqvrkh.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238557/Items/IMG_9798_afm8vj.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238559/Items/IMG_9803_ydtpjm.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238557/Items/IMG_9802_wxfe05.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238556/Items/IMG_9799_bqw0wi.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238564/Items/IMG_9806_y2i5am.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238562/Items/IMG_9808_k95g4n.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238563/Items/IMG_9809_dmmy4i.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238566/Items/IMG_9810_mkgb4v.heic",
    ],
  },
  {
    number: 10,
    title: "Waschmaschine Siemens",
    description:
        "Waschmaschine Siemens WM14UR90/08 – gepflegt & voll funktionsfähig. Zustand: gebraucht, sehr gut gepflegt, Voll funktionsfähig, Verschiedene Waschprogramme, Energieeffizient und zuverlässig im Alltag",
    price: 290,
    newPrice: 600,
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780246621/Items/IMG_7149_rhg2mf.jpg",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780246627/Items/IMG_7155_nbhpkc.jpg",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780246623/Items/IMG_7150_kvaprq.jpg",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780246625/Items/IMG_7154_hepwq6.jpg",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780246622/Items/IMG_7151_a4huut.jpg",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780246624/Items/IMG_7152_oeunng.jpg",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780246624/Items/IMG_7153_zgncc7.jpg"
    ],
  },
  {
    number: 11,
    title: "Küchentisch",
    description:
        "Maße: 160x90",
    price: 30,
    newPrice: 0,
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238506/Items/IMG_9688_etsgha.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238507/Items/IMG_9689_dkaye3.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238509/Items/IMG_9690_ne9z6d.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238508/Items/IMG_9692_wln9i3.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238509/Items/IMG_9693_klno9v.heic",
    ],
  },
  {
    number: 12,
    title: "2x Nachttische",
    description:
        "Preis für 2 Stück",
    price: 40,
    newPrice: 0,
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238535/Items/IMG_9768_q8ganh.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238534/Items/IMG_9769_gj5xy9.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238537/Items/IMG_9770_hltueu.heic"
    ],
  },
  {
    number: 13,
    title: "Balkonmöbel Set: Tisch, Stühle & Teppich",
    description:
        "",
    price: 50,
    newPrice: 0,
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238501/Items/IMG_9673_jp8vl3.jpg",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238501/Items/IMG_9672_jvlse3.jpg"
    ],
  },
  {
    number: 14,
    title: "3x Couchtische – Set / Beistelltische",
    description:
        "",
    price: 30,
    newPrice: 0,
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238515/Items/IMG_9706_w3omjo.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780238516/Items/IMG_9707_chqzr3.heic"
    ],
  },
  {
    number: 15,
    title: "PHILIPS Series 7000 Nass-/Trockensauger",
    description:
        "PHILIPS XW7110/01 AquaTrio Cordless Serie 7000 saugen und wischen, kabellos, Akkusauger, Nass-/Trockensauger, Akkubetrieb",
    price: 140,
    newPrice: 450,
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780249742/Items/IMG_7160_sa7umj.jpg",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780249743/Items/IMG_7161_oh9bc6.jpg",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780250043/Items/ASSET_MMS_106893982_p6qv5m.jpg"
    ],
  },
  {
    number: 16,
    title: "120L Aquarium Komplettset mit Außenfilter, Luftpumpe & Heizer – inkl. Fischbesatz",
    description:
        "Ein sehr gepflegtes 120 Liter Aquarium Komplettset inklusive Technik und Fischbesatz.\n" +
        "\n" +
        "Das Aquarium wurde neu gestartet im Februar 2026 und befindet sich in einem sehr guten, stabil laufenden Zustand.",
    price: 150,
    newPrice: 600,
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780249699/Items/IMG_7117_gfawoh.jpg",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780249706/Items/IMG_7125_uwk9u6.jpg",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780249705/Items/IMG_7122_lnrf4g.jpg",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780249702/Items/IMG_7120_lppsi8.jpg",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780249706/Items/IMG_7121_khksrq.jpg",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780249709/Items/IMG_7136_px3mat.jpg",
        "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780249708/Items/IMG_7133_t7xepx.jpg"
    ],
  },
  {
    number: 17,
    title: "Diverse Pflanzen",
    description:
        "",
    price: 10,
    newPrice: 0,
    photoUrl: [
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780250357/Items/IMG_9719_wu5xhj.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780250358/Items/IMG_9721_p9sqrm.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780250420/Items/IMG_9725_o8mgxx.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780250421/Items/IMG_9729_uyzriv.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780250423/Items/IMG_9731_ivprew.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780250424/Items/IMG_9732_cexown.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780250436/Items/IMG_9741_uehuki.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780250438/Items/IMG_9746_qugwhs.heic",
      "https://res.cloudinary.com/dbeyz3sxb/image/upload/v1780250440/Items/IMG_9747_dhuqco.heic"
    ],
  }
];

export function getItems(): Item[] {
  return items;
}
