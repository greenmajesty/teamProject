const productList = [
    {
      id: "product1",
      name: "LED전구 디밍 F-LED 3D TREE",
      price: 30000,
      src: "../img/1111.jpg",
      best: true,
      deliver: true,
      new: false
    },
    {
      id: "product2",
      name: "IK 시리즈 SNOWMAN22 SOLID Table Stand",
      price: 230000,
      src: "../img/1112.jpg",
      best: true,
      deliver: true,
      new: false
    },
    {
      id: "product3",
      name: "IK 시리즈 SNOWBALL22 SOLID Table Stand",
      price: 210000,
      src: "./img/1113.jpg",
      best: true,
      deliver: true,
      new: false
    },
    {
        id: "product4",
        name: "IK 시리즈 FONDUE16 Table Stand KYOBO BOOK Edition",
        price: 280000,
        src: "./img/1114.jpg",
        best: true,
        deliver: true,
        new: true
    },
    {
      id: "product5",
      name: "IK 시리즈 TRIANGLE120 A Pendant",
      price: 390000,
      src: "./img/1115.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product6",
      name: "IK 시리즈 TRIANGLE120 B Pendant",
      price: 390000,
      src: "./img/1116.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product7",
      name: "IK 시리즈 MAGRITTE40 Pendant",
      price: 380000,
      src: "../img/1117.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product8",
      name: "IK 시리즈 MAGRITTE40 Pendant",
      price: 380000,
      src: "./img/1118.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product9",
      name: "클래식전구 ST64 (25w, 40w, E26)",
      price: 6500,
      src: "./img/1119.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product10",
      name: "장식용전구 S45 (10w, E14)",
      price: 1200,
      src: "./img/1120.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product11",
      name: "삼파장전구 EL (11w, E26)",
      price: 2700,
      src: "./img/1121.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product12",
      name: "가드닝전구 LED PG PAR30 (11w, E26, 실내용)",
      price: 20000,
      src: "./img/1122.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product13",
      name: "할로겐전구 G9 (28w, 42w)",
      price: 2000,
      src: "./img/1123.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product14",
      name: "산업용전구 IR125 RED(250w, 하드글래스 열전구)",
      price: 6000,
      src: "./img/1124.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product15",
      name: "LED전구 F-LED TUBE R (3.5w, E26, Dimmable)",
      price: 14000,
      src: "./img/1125.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product16",
      name: "LED 전구 Spherical E14 (5.7w)",
      price: 5000,
      src: "./img/1126.jpg",
      best: true,
      deliver: true,
      new: false
    },
    {
      id: "product17",
      name: "CFL 전구 Twin Tube 2-Pin (18w)",
      price: 7500,
      src: "./img/1127.jpg",
      best: false,
      deliver: true,
      new: true
    },
    {
      id: "product18",
      name: "할로겐 전구 Capsule G4 (20w)",
      price: 3000,
      src: "./img/1128.jpg",
      best: true,
      deliver: false,
      new: false
    },
    {
      id: "product19",
      name: "LED 전구 Classic A60 E27 (8.5w)",
      price: 9000,
      src: "./img/1129.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product20",
      name: "CFL 전구 Triple Tube 4-Pin (26w)",
      price: 8500,
      src: "./img/1130.jpg",
      best: true,
      deliver: true,
      new: false
    },
    {
      id: "product21",
      name: "LED 전구 Classic B35 E14 (5.7w)",
      price: 7000,
      src: "./img/1131.jpg",
      best: false,
      deliver: true,
      new: true
    },
    {
      id: "product22",
      name: "산업용전구 MR16 GU5.3 (35w)",
      price: 6500,
      src: "./img/1132.jpg",
      best: true,
      deliver: false,
      new: false
    },
    {
      id: "product23",
      name: "LED 전구 F-LED TUBE R (14w, E26, Dimmable)",
      price: 17000,
      src: "./img/1133.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product24",
      name: "LED 전구 Classic ST64 E27 (7.5w)",
      price: 10000,
      src: "./img/1134.jpg",
      best: true,
      deliver: true,
      new: false
    },
    {
      id: "product25",
      name: "할로겐 전구 Capsule GY6.35 (50w)",
      price: 3500,
      src: "./img/1135.jpg",
      best: false,
      deliver: true,
      new: true
    },
    {
      id: "product26",
      name: "LED 전구 Classic A70 E27 (10w)",
      price: 11000,
      src: "./img/1136.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product27",
      name: "산업용전구 AR111 G53 (50w)",
      price: 7000,
      src: "./img/1137.jpg",
      best: true,
      deliver: false,
      new: false
    },
    {
      id: "product28",
      name: "CFL 전구 Twin Tube 4-Pin (13w)",
      price: 6500,
      src: "./img/1138.jpg",
      best: false,
      deliver: true,
      new: true
    },
    {
      id: "product29",
      name: "LED 전구 Spherical E27 (6w)",
      price: 6000,
      src: "./img/1139.jpg",
      best: true,
      deliver: true,
      new: false
    },
    {
      id: "product30",
      name: "할로겐 전구 Capsule G9 (40w)",
      price: 3200,
      src: "./img/1140.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product31",
      name: "LED 전구 F-LED TUBE R (18w, E26, Dimmable)",
      price: 18000,
      src: "./img/1141.jpg",
      best: true,
      deliver: true,
      new: false
    },
    {
      id: "product32",
      name: "산업용전구 IR125 RED(400w, 하드글래스 열전구)",
      price: 8000,
      src: "./img/1142.jpg",
      best: false,
      deliver: true,
      new: true
    },
    {
      id: "product33",
      name: "CFL 전구 Triple Tube 2-Pin (20w)",
      price: 7500,
      src: "./img/1143.jpg",
      best: true,
      deliver: false,
      new: false
    },
    {
      id: "product34",
      name: "LED 전구 Classic B35 E14 (7w)",
      price: 8000,
      src: "./img/1144.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product35",
      name: "할로겐 전구 Capsule GY6.35 (75w)",
      price: 4000,
      src: "./img/1145.jpg",
      best: true,
      deliver: true,
      new: false
    },
    {
      id: "product36",
      name: "LED 전구 Spherical E14 (7w)",
      price: 5500,
      src: "./img/1146.jpg",
      best: false,
      deliver: true,
      new: true
    },
    {
      id: "product37",
      name: "CFL 전구 Twin Tube 2-Pin (23w)",
      price: 8000,
      src: "./img/1147.jpg",
      best: true,
      deliver: false,
      new: false
    },
    {
      id: "product38",
      name: "할로겐 전구 Capsule G4 (30w)",
      price: 3500,
      src: "./img/1148.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product39",
      name: "LED 전구 Classic A60 E27 (11w)",
      price: 9500,
      src: "./img/1149.jpg",
      best: true,
      deliver: true,
      new: false
    },
    {
      id: "product40",
      name: "CFL 전구 Triple Tube 4-Pin (32w)",
      price: 9000,
      src: "./img/1150.jpg",
      best: false,
      deliver: true,
      new: true
    },
    {
      id: "product41",
      name: "LED 전구 Classic B35 E14 (8.5w)",
      price: 8500,
      src: "./img/1151.jpg",
      best: true,
      deliver: false,
      new: false
    },
    {
      id: "product42",
      name: "산업용전구 MR16 GU5.3 (50w)",
      price: 7000,
      src: "./img/1152.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product43",
      name: "LED 전구 F-LED TUBE R (21w, E26, Dimmable)",
      price: 20000,
      src: "./img/1153.jpg",
      best: true,
      deliver: true,
      new: false
    },
    {
      id: "product44",
      name: "LED 전구 Classic ST64 E27 (10w)",
      price: 11500,
      src: "./img/1154.jpg",
      best: false,
      deliver: true,
      new: true
    },
    {
      id: "product45",
      name: "할로겐 전구 Capsule GY6.35 (100w)",
      price: 4500,
      src: "./img/1155.jpg",
      best: true,
      deliver: false,
      new: true
    },
    {
      id: "product46",
      name: "LED 전구 Classic B35 E14 (9.5w)",
      price: 9000,
      src: "./img/1156.jpg",
      best: false,
      deliver: true,
      new: true
    },
    {
      id: "product47",
      name: "산업용전구 MR16 GU10 (75w)",
      price: 8000,
      src: "./img/1157.jpg",
      best: true,
      deliver: false,
      new: false
    },
    {
      id: "product48",
      name: "LED 전구 F-LED TUBE R (22w, E26, Dimmable)",
      price: 21000,
      src: "./img/1158.jpg",
      best: false,
      deliver: true,
      new: true
    },
    {
      id: "product49",
      name: "LED 전구 Classic ST64 E27 (12w)",
      price: 12000,
      src: "./img/1159.jpg",
      best: true,
      deliver: false,
      new: true
    },
    {
      id: "product50",
      name: "할로겐 전구 Capsule GY6.35 (125w)",
      price: 5000,
      src: "./img/1160.jpg",
      best: false,
      deliver: true,
      new: false
    },
    {
      id: "product51",
      name: "LED 전구 Classic A60 E27 (12.5w)",
      price: 10000,
      src: "./img/1161.jpg",
      best: true,
      deliver: true,
      new: true
    },
    {
      id: "product52",
      name: "CFL 전구 Quad Tube 4-Pin (42w)",
      price: 10000,
      src: "./img/1162.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product53",
      name: "LED 전구 Classic B35 E14 (10.5w)",
      price: 9000,
      src: "./img/1163.jpg",
      best: true,
      deliver: false,
      new: false
    },
    {
      id: "product54",
      name: "산업용전구 MR16 GU10 (100w)",
      price: 9000,
      src: "./img/1164.jpg",
      best: false,
      deliver: true,
      new: true
    },
    {
      id: "product55",
      name: "LED 전구 F-LED TUBE R (24w, E26, Dimmable)",
      price: 22000,
      src: "./img/1165.jpg",
      best: true,
      deliver: true,
      new: false
    },
    {
      id: "product56",
      name: "LED 전구 Classic ST64 E27 (14w)",
      price: 13000,
      src: "./img/1166.jpg",
      best: false,
      deliver: true,
      new: true
    },
    {
      id: "product57",
      name: "할로겐 전구 Capsule GY6.35 (150w)",
      price: 5500,
      src: "./img/1167.jpg",
      best: true,
      deliver: false,
      new: true
    },
    {
      id: "product58",
      name: "LED 전구 Classic A60 E27 (13.5w)",
      price: 11000,
      src: "./img/1168.jpg",
      best: false,
      deliver: true,
      new: false
    },
    {
      id: "product59",
      name: "CFL 전구 Five Tube 4-Pin (52w)",
      price: 11000,
      src: "./img/1169.jpg",
      best: true,
      deliver: false,
      new: true
    },
    {
      id: "product60",
      name: "LED 전구 Classic B35 E14 (11.5w)",
      price: 10000,
      src: "./img/1170.jpg",
      best: true,
      deliver: true,
      new: false
    },
    {
      id: "product61",
      name: "산업용전구 MR16 GU10 (125w)",
      price: 10000,
      src: "./img/1171.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product62",
      name: "LED 전구 F-LED TUBE R (26w, E26, Dimmable)",
      price: 24000,
      src: "./img/1172.jpg",
      best: true,
      deliver: true,
      new: false
    },
    {
      id: "product63",
      name: "LED 전구 Classic ST64 E27 (16w)",
      price: 15000,
      src: "./img/1173.jpg",
      best: false,
      deliver: false,
      new: true
    },
    {
      id: "product64",
      name: "할로겐 전구 Capsule GY6.35 (175w)",
      price: 6000,
      src: "./img/1174.jpg",
      best: true,
      deliver: true,
      new: false
    },
    {
      id: "product65",
      name: "LED 전구 Classic A60 E27 (15w)",
      price: 12000,
      src: "./img/1175.jpg",
      best: false,
      deliver: true,
      new: true
    },
    {
  id: "product66",
  name: "CFL 전구 Six Tube 4-Pin (60w)",
  price: 12000,
  src: "./img/1176.jpg",
  best: true,
  deliver: false,
  new: true
},
{
  id: "product67",
  name: "LED 전구 Classic B35 E14 (12.5w)",
  price: 11000,
  src: "./img/1177.jpg",
  best: false,
  deliver: true,
  new: false
},
{
  id: "product68",
  name: "산업용전구 MR16 GU10 (150w)",
  price: 11000,
  src: "./img/1178.jpg",
  best: true,
  deliver: false,
  new: true
},
{
  id: "product69",
  name: "LED 전구 F-LED TUBE R (28w, E26, Dimmable)",
  price: 26000,
  src: "./img/1179.jpg",
  best: true,
  deliver: true,
  new: false
},
{
  id: "product70",
  name: "LED 전구 Classic ST64 E27 (18w)",
  price: 17000,
  src: "./img/1180.jpg",
  best: false,
  deliver: false,
  new: true
},
{
  id: "product71",
  name: "할로겐 전구 Capsule GY6.35 (200w)",
  price: 6500,
  src: "./img/1181.jpg",
  best: true,
  deliver: true,
  new: false
},
{
  id: "product72",
  name: "LED 전구 Classic A60 E27 (16.5w)",
  price: 13000,
  src: "./img/1182.jpg",
  best: false,
  deliver: true,
  new: true
}
  ];
  
  export default productList