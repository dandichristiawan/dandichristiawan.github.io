function openWhatsAppChat() {
  const phone = "6285156540916"; 
  const message = "Hello Dandi"; 
  const encodedMessage = encodeURIComponent(message);
  window.open("https://wa.me/" + phone + "?text=" + encodedMessage, "_blank");
}