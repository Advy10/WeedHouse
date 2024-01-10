console.log(`Mikasa Sukasa`);

const MINIMUM_AGE = 15;
const MAXIMUM_AGE = 69;

const dneska = new Date();
const dnesni_datum = `${dneska.getDate()}.${dneska.getMonth() + 1}.${dneska.getFullYear()}`;

window.alert(`Dnešní datum: ${dnesni_datum}`);


let jmenoUzivatele = window.prompt('Jak se jmenuješ?', 'Milion Plus Fans');
jmenoUzivatele = jmenoUzivatele.trim();

let emailUzivatele;
do {
    emailUzivatele = window.prompt('Zadej svůj e-mail:');
} while (!emailUzivatele.includes('@'));

let hesloUzivatele;
do {
    hesloUzivatele = window.prompt('Zadej heslo (minimálně 6 znaků a musí obsahovat alespoň jedno číslo):');
} while (hesloUzivatele.length <= 6)

const zadaniDatumu = window.prompt('Zadej své datum narození (DD.MM.RRRR)', '10.02.2007');
const parts = zadaniDatumu.split('.');
const zadaneDatum = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));

const rozdilDni = Math.floor((dneska - zadaneDatum) / (1000 * 60 * 60 * 24));

window.alert(`Od tvého narození uběhlo již: ${rozdilDni} dní`);
window.alert(`Nezapomeň! Yzo Empire na věky!, ${jmenoUzivatele}!`);

const jeFanousekMilionPlus = window.confirm('Jsi fanoušek Milion Plus? Klikni na OK pro Ano, nebo Storno pro Ne.');

if (jeFanousekMilionPlus) {
    let vekUzivatele = window.prompt('Tak a kolik ti je vlastně let?');
    console.log(vekUzivatele);

    if (!isNaN(Number(vekUzivatele))) {
        if (vekUzivatele >= MINIMUM_AGE && vekUzivatele <= MAXIMUM_AGE) {
            window.alert(`Gratuluji, splňuješ podmínku pro možnost vstupu na web!`);
            window.alert(`Vítej v naší hře na počest Yzomandiasovi!`);
        } else {
            window.alert(`Omlouváme se, ale musí ti být nejméně ${MINIMUM_AGE} a nejvíce ${MAXIMUM_AGE} let. Omlouváme se za potíže.`);
        }
    } else {
        const novaSance = window.confirm('Vypadá to, že jsi nezadal(a) číslo. Chceš to zkusit znovu? Klikni na OK pro Ano, nebo Storno pro Ne.');
        if (novaSance) {
            vekUzivatele = window.prompt('Dáme ti ještě jednu šanci. Kolik ti je skutečně let?');
            if (!isNaN(Number(vekUzivatele)) && vekUzivatele >= MINIMUM_AGE && vekUzivatele <= MAXIMUM_AGE) {
            } else {
                window.alert(`Omlouváme se, ale musí ti být nejméně ${MINIMUM_AGE} a nejvíce ${MAXIMUM_AGE} let. Pokud opět nezadáš platné číslo, nebude ti umožněn přístup.`);
            }
        } else {
            window.alert(`POSLEDNÍ POKUS: Omlouváme se, ale musí ti být nejméně ${MINIMUM_AGE} a nejvíce ${MAXIMUM_AGE} let. Pokud opět nezadáš platné číslo, nebude ti umožněn přístup.`);
        }
    }
} else {
    window.alert('Omlouváme se, ale nemůžeš pokračovat, nejsi fanoušek Milion Plus!');
}

let nahodnaCisla = [];
let tah = "Losovaná čísla jsou:  ";
window.alert('Ještě předtím než si zahrajeme Kvíz o Yzomandiasovi, tu pro tebe mám minihru. Zkus si vylosovat 6 náhodných číšel a uvidíš, jaké ti padnou. Nemůžeš nic vyhrát, ani nic prohrát, je to jen pro zábavu.');

for (let i = 0; i < 6; i++) {
    let nahodneCislo = Math.floor(Math.random() * 60) + 1;
    nahodnaCisla.push(nahodneCislo);
    tah += `${nahodneCislo}, `;
    window.alert(`Tah čísla ${i + 1}: ${nahodneCislo}`);
}

window.alert(tah);
console.log(nahodnaCisla);

const nejkrasnejsijmena = ['Jakub', 'Jan', 'Tomáš', 'Nela', 'Míša', 'Monča', 'Tadeáš', 'Adam', 'Matěj', 'Jonáš', 'Lukáš', 'Viki', 'Natka', 'Filip', 'David', 'Radek', 'Eliška', 'Lucka', 'Kleopatra'];
let vylosovanajmena = [];

const los = Math.floor(Math.random() * nejkrasnejsijmena.length);
const vybranejmeno = nejkrasnejsijmena[los];

window.alert(`Nejkrásnější jméno dne vyhrává: ${vybranejmeno}`);
vylosovanajmena.push(vybranejmeno);

console.log(vylosovanajmena);
