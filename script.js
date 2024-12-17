function notificaAssenti() {
    // Mostra una notifica agli studenti assenti
    const notificaDiv = document.getElementById('notifica');
    notificaDiv.style.display = 'block';
    notificaDiv.innerHTML = 'Attenzione! Gli studenti che sono arrivati alla seconda ora hanno perso la parte teorica. Coloro che non sono venuti affatto, hanno perso entrambe le ore di lezione. Si consiglia di recuperare il materiale al più presto.';
}
