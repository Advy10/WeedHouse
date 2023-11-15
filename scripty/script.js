console.log(`Mikasa Sukasa`);

const MINIMUM_AGE = 15;
const MAXIMUM_AGE = 69;

const jmenoUzivatele = window.prompt('Jak se jmenuješ?', 'Milion Plus Fans');
window.alert(`Nezapomeň! Yzo Empire na věky!, ${jmenoUzivatele}!`);
const jeFanousekMilionPlus = window.confirm('Jsi fanoušek Milion Plus? Klikni na OK pro Ano, nebo Storno pro Ne.');

if (jeFanousekMilionPlus) {
  let vekUzivatele = window.prompt('Tak a kolik ti je vlastně let?');
  console.log(vekUzivatele);

  if (!isNaN(Number(vekUzivatele))) {
    if (vekUzivatele >= MINIMUM_AGE && vekUzivatele <= MAXIMUM_AGE) {
      window.alert(`Gratuluji, můžeš na web!`);
      window.alert(`Vítej v naší hře na počest Yzomandiasovi!`);
    } else {
      window.alert(`Omlouváme se, ale musí ti být nejméně ${MINIMUM_AGE} a nejvíce ${MAXIMUM_AGE} let. Omlouváme se za potíže.`);
    }
  } else {
    const novaSance = window.confirm('Vypadá to, že jsi nezadal(a) číslo. Chceš to zkusit znovu? Klikni na OK pro Ano, nebo Storno pro Ne.');
    if (novaSance) {
      vekUzivatele = window.prompt('Dáme ti ještě jednu šanci. Kolik ti je skutečně let?');
      if (!isNaN(Number(vekUzivatele)) && vekUzivatele >= MINIMUM_AGE && vekUzivatele <= MAXIMUM_AGE) {
        window.alert(`Vítej v naší hře na počest Yzomandiasovi!`);
      } else {
        window.alert(`Omlouváme se, ale musí ti být nejméně ${MINIMUM_AGE} a nejvíce ${MAXIMUM_AGE} let. Pokud opět nezadáš platné číslo, nebude ti umožněn přístup.`);
      }
    } else {
      window.alert(`Omlouváme se, ale musí ti být nejméně ${MINIMUM_AGE} a nejvíce ${MAXIMUM_AGE} let. Pokud opět nezadáš platné číslo, nebude ti umožněn přístup.`);
    }
  }
} else {
  window.alert('Omlouváme se, ale nemůžeš pokračovat, nejsi fanoušek Milion Plus!');
}





