function calcular() {
    var tibiacoin = document.getElementById('tibiacoin')
    var tc = Number(tibiacoin.value)
    /*Supreme Health Potion */ 
    var suhealth = document.querySelector('div#suhealth')
    var suhealth1 = tc * 59 / 1000
    suhealth.innerHTML = `Cada Supreme Health potion vale ${suhealth1} gps.`
    /* Ultimate mana Potion */
    var umana = document.querySelector('div#umana')
    var umana1 = tc * 42 / 1000
    umana.innerHTML = `Cada Ultimate Mana Potion vale ${umana1} gps.`
    /* Ultimate Health Potion */
    var uhealth = document.querySelector('div#uhealth')
    var uhealth1 = tc * 36 / 1000
    uhealth.innerHTML = `Cada Ultimate Health Potion vale ${uhealth1} gps.`
    /* Ultimate Spirit Potion */
    var uspirit = document.querySelector('div#uspirit')
    var uspirit1 = tc * 42 / 1000
    uspirit.innerHTML = `Cada Ultimate Spirit Potion vale ${uspirit1} gps.`
    /* Great Mana Potion */
    var gmana = document.querySelector('div#gmana')
    var gmana1 = tc * 14 / 1000
    gmana.innerHTML = ` Cada Great Mana Potion vale ${gmana1} gps.`
    /* Great Health Potion */
    var ghealth = document.querySelector('div#ghealth')
    var ghealth1 = tc * 22 / 1000
    ghealth.innerHTML = `Cada Great Health Potion vale ${ghealth1} gps.`
    /* Great Spirit Potion */
    var gspirit = document.querySelector('div#gspirit')
    var gspirit1 = tc * 22 / 1000
    gspirit.innerHTML = `Cada Great Spirit Potion vale ${gspirit1} gps.`
    /* Strong Mana Potion */
    var smana = document.querySelector('div#smana')
    var smana1 = tc * 9 / 1000
    smana.innerHTML = `Cada Strong Mana Potion vale ${smana1} gps.`
    /* Strong Health Potion */
    var shealth = document.querySelector('div#shealth')
    var shealth1 = tc * 11 / 1000
    shealth.innerHTML = `Cada Strong Health Potion vale ${shealth1} gps.`
    /* Mana Potion */
    var mana = document.querySelector('div#mana')
    var mana1 = tc * 5 / 1000
    mana.innerHTML = `Cada Mana Potion vale ${mana1} gps.`
    /* Health Potion */
    var health = document.querySelector('div#health')
    var health1 = tc * 5 / 1000 
    health.innerHTML = `Cada Health Potion vale ${health1} gps.`




}





