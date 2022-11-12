import { getFirestore } from "./firebase/firebaseConfig";

//copiar este codigo en algun componente antes del return de app.

  React.useEffect(()=> {
   

   const items = [
        {
            "title": "EQUIPO DE PINTAR LUSQTOFF",
            "description": "Equipo de pintar Lusqtoff 450W 1.5mts",
            "imgDir": "https://i.ibb.co/zbncxx7/equipo-de-pintar-lusqtoff1-afb24bed27ec04afd115527475750262-640-0.png",
            "price": 5800,
            "stock": 4,
            "categoryId": "Herramientas"
        },
        {
            "title": "LIJADORA",
            "description": "Lijadora de banda de banco Lusqtoff LQLB-250",
            "imgDir": "https://i.ibb.co/6FRBtt9/lijadora-de-banda1-ad0f155f01c3ce5f1d15535479897547-480-0.png",
            "price": 18300,
            "stock": 5,
            "categoryId": "Herramientas"
        },
        {
            "title": "AMOLADORA",
            "description": "Amoladora DeWalt D28136 4 1/2 1400W",
            "imgDir": "https://i.ibb.co/PCRVtMn/amoladora-de-walt-d28136-e20fc9c82bbc4b350015122941492436-480-0.jpg",
            "price": 30000,
            "stock": 5,
            "categoryId": "Herramientas"
        },
        {
            "title": "ATORNILLADOR A BATERIA",
            "description": "Atornillador a bateria DeWalt 12v DCD710S2",
            "imgDir": "https://i.ibb.co/jz5chv0/atornillador-dewalt-12v-dcd710s2-caffd8bbc7c0acc2bf15122940196537-640-0.jpg",
            "price": 30500,
            "stock": 6,
            "categoryId": "Herramientas"
        },
        {
            "title": "ROTOMARTILLO",
            "description": "Rotomartillo Einhell SDS plus 800W TE-RH 26 4F",
            "imgDir": "https://i.ibb.co/kcy6VRh/rotomartillo-einhell-te-rh-264f1-13f0c63450961abf6316257537466295-640-0.jpg",
            "price": 20200,
            "stock": 3,
            "categoryId": "Herramientas"
        },
        {
            "title": "PISTOLA DE CALOR",
            "description": "Pistola de calor Gamma G1936KA 2000W",
            "imgDir": "https://i.ibb.co/hRrjKPf/pistola-de-calor-g19361-52989ebcb39bcfa23815870340021502-640-0.jpg",
            "price": 6700,
            "stock": 7,
            "categoryId": "Herramientas"
        },
        {
            "title": "TALADRO",
            "description": "Taladro Bosch GSB 450 10mm 450W",
            "imgDir": "https://i.ibb.co/mC6dykR/taladro-bosch-gsg-4501-96d393b4578035ed4415849954400824-640-0.jpg",
            "price": 8200,
            "stock": 2,
            "categoryId": "Herramientas"
        },
        {
            "title": "TERMOFUSORA",
            "description": "Termofusora Stanley SXH1530",
            "imgDir": "https://i.ibb.co/m5jw7qN/termofusora-stanley-i1-f60305b21176b770c015473080457412-640-0.jpg",
            "price": 10200,
            "stock": 8,
            "categoryId": "Herramientas"
        },
        {
            "title": "HERRAMIENTA MULTIFUNCIÓN",
            "description": "Herramienta multifuncion Bosh eléctrica",
            "imgDir": "https://i.ibb.co/tP0YYvm/herramiento-multifuncion-bosch-electrica-037e4749047583164515122940056865-480-0.jpg",
            "price": 9100,
            "stock": 2,
            "categoryId": "Herramientas"
        },
        {
            "title": "AFILADOR DE MECHAS",
            "description": "Afilador de mechas eléctrico Einhell 3-10mm TH-SH 3/10",
            "imgDir": "https://i.ibb.co/4thHxQt/afilador-de-mecha-ii1-6a64f5280157302b7015608949746594-640-0.jpg",
            "price": 17300,
            "stock": 7,
            "categoryId": "Herramientas"
        },
        {
            "title": "MOTOSIERRA STIHL",
            "description": "Motosierra STIHL MS170",
            "imgDir": "https://i.ibb.co/pd8TMtP/motosierra-stihl-ms170-162a8eae4a4566275a15122939406374-480-0.jpg",
            "price": 17300,
            "stock": 7,
            "categoryId": "Jardineria"
        },
        {
            "title": "DESMALEZADORA",
            "description": "Desmalezadora STIHL FS55",
            "imgDir": "https://i.ibb.co/9HpTg59/motoguadanas-stihl-fs55-8abcd4d3814cd11bbe15122938969788-640-0.jpg",
            "price": 23000,
            "stock": 1,
            "categoryId": "Jardineria"
        },
        {
            "title": "MOTOGUADAÑA",
            "description": "Motoguadaña STIHL FS120",
            "imgDir": "https://i.ibb.co/dJ1zDBg/motoguadana-stihl-fs120-jpg-21-26bb7e4f5259b0bd8e15122941815925-480-0.jpg",
            "price": 41000,
            "stock": 3,
            "categoryId": "Jardineria"
        },
        {
            "title": "CORTACERCO",
            "description": "Cortacerco a bater¡a STIHL HSA 45",
            "imgDir": "https://i.ibb.co/XYVhPfY/hsa-451-2beb973706c2b5ce8115192169026025-640-0.jpg",
            "price": 14800,
            "stock": 3,
            "categoryId": "Jardineria"
        },
        {
            "title": "BORDEADORA",
            "description": "Bordeadora electrica STIHL FSE60 600W",
            "imgDir": "https://i.ibb.co/k4xwjmr/bordeadora-electrica-stihl-fse60-27ecb3277f1ec705f815122939813641-640-0.jpg",
            "price": 15500,
            "stock": 2,
            "categoryId": "Jardineria"
        },
        {
            "title": "SOPLADOR",
            "description": "Soplador a explosion STIHL BG50",
            "imgDir": "https://i.ibb.co/NSZ9hyZ/soplador-stihl-bg50-ae4e3f18520411680a15122942290812-480-0.jpg",
            "price": 32400,
            "stock": 2,
            "categoryId": "Jardineria"
        },
        {
            "title": "PULVERIZADOR",
            "description": "Pulverizador manual STIHL SG11",
            "imgDir": "https://i.ibb.co/JnTrKLB/pulverizador-sg111-100da57d0b0a7aaca015122942706977-640-0.jpg",
            "price": 1500,
            "stock": 15,
            "categoryId": "Jardineria"
        },
        {
            "title": "PISTOLA DE RIEGO",
            "description": "Pistola de riego multichorro Gardena 1/2 18301-20",
            "imgDir": "https://i.ibb.co/xMkQhJx/lanza-183011-2fb2e6d8323ffe831d15938070453175-640-0.png",
            "price": 1200,
            "stock": 15,
            "categoryId": "Jardineria"
        },
    ];


const db = getFirestore();
const itemsCollection = db.collection("items");


items.forEach((item) => {
    itemsCollection
        .add(item)
        .then((docRef) => console.log('Item agregado exitosamente: ',docRef.id))
        .catch((error) => console.log(error));

    });
  },[])