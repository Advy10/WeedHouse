console.log(`Mikasa Sukasa`);

const MINIMUM = 15;
const jmenoUzivatele = window.prompt('Jak se jmenuješ?', 'Milion Plus Fans');
window.alert(`Nezapomeň! Yzo Empire na věky!, ${jmenoUzivatele}!`);

let vekUzivatele = window.prompt('Tak a kolik ti je vlastně let?');
console.log(vekUzivatele);

if (Number(vekUzivatele) === MINIMUM) {
  window.alert(`Gratuluji, můžeš na web!`);
}
else if (Number(vekUzivatele) > MINIMUM) {
  window.alert(`Můžeš na web, je ti o ${vekUzivatele - MINIMUM} víc než minimum ${MINIMUM} let!`);
}
else {
  if (!isNaN(Number(vekUzivatele))) {
    window.alert(`Abych tě pustil na web, musíš počkat ještě ${MINIMUM - vekUzivatele} let!`);
  }
  else {
    window.alert(`${vekUzivatele} To přece nedává žádný smysl!`);
  }
}


window.alert(`Vítej v naší hře na počest Yzomandiasovi!`);
const nameOfPlayer = window.prompt(`Jak se jmenuješ, uličníku?`, `Yzomandias`);
window.alert(`Vítám tě, ${nameOfPlayer}, zajímá tě to, co je neznámé, tajemné, nevysvětlitelné, proto jsi přece tady. A my teď poprvé řekneme celou pravdu o tom, co se stalo.`);



