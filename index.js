const antiLeak = {
    //IP
    ipv4: /\b(?:\d{1,3}\.){3}\d{1,3}\b/,
    ipv6: /[a-fA-F\d]{1,4}(?::[a-fA-F\d]{1,4}){7}/,

    //Privé
    email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
    token: /[\w-]{24}\.[\w-]{6}\.[\w-]{27}|mfa\.[\w-]{84}/,

    //Numéro
    EUPhone: /\b(?:\+|00)[\d\s.-]{3,}[\d\s.-]+\b/,
    NAPhone: /\b(?:\+?1[-.]?)?(?:\(\d{3}\)|\d{3})[-.]?\d{3}[-.]?\d{4}\b/,

    //Carte
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    Mastercard: /^5[1-5][0-9]{14}$/,
    Maestro: /^(?:5[0678]\d\d|6304|6390|67\d\d)\d{8,15}$/,
    AmericanExpress: /^3[47][0-9]{13}$/,
    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    JCB: /^(?:2131|1800|35\d{3})\d{11}$/,

    //Confidentiels
    SSN: /\b\d{3}-\d{2}-\d{4}\b/,
    passport: /\b[A-Z0-9]{6,9}\b/,
    CVC: /\b\d{3,4}\b/,

};
  
module.exports = antiLeak;