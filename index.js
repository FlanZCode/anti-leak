const antiLeak = {
    ipv4: /\b(?:\d{1,3}\.){3}\d{1,3}\b/,
    ipv6: /[a-fA-F\d]{1,4}(?::[a-fA-F\d]{1,4}){7}/,
    email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
    token: /[\w-]{24}\.[\w-]{6}\.[\w-]{27}|mfa\.[\w-]{84}/,
    EUPhone: /\b(?:\+|00)[\d\s.-]{3,}[\d\s.-]+\b/,
    NAPhone: /\b(?:\+?1[-.]?)?(?:\(\d{3}\)|\d{3})[-.]?\d{3}[-.]?\d{4}\b/,
};
  
module.exports = antiLeak;