// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// creo lista email autorizzate

const email_list = ['fabio@teacher.boolean.com', 'tiziano@tutor.boolean.com', 'fabiola@tutor.boolean.com', 'roberto@student.boolean.com'];

// collego btn_go
const btnGoElement = document.getElementById('btn_go');

// creo funzione per il click del btn_go
btnGoElement.addEventListener('click', function() {
    
    // chiedo all'utente la sua email
    const emailUserElement = document.getElementById('email_user').value;
    console.log(emailUserElement);

    // controlla che sia nella lista di chi può accedere
    let control = false; // setto a valore di controllo a falso
    for (let i = 0; i < email_list.length; i++) {
        const element = email_list[i];
        if (emailUserElement == element) {
           control = true; // se è nella lista setto il valore a vero
        }
    }
    // se rientra nella lista stampo il messaggio di bentornato
    if (control == true) {
        let h3Element = document.querySelector('.welcome').innerHTML = `Bentornato ${emailUserElement}`;
    } else {
        let h3Element = document.querySelector('.welcome').innerHTML = `Accesso Negato`;
    }
})


// collego btn_reset
const btnResetElement = document.getElementById('btn_reset');
//collego il form
const formElement = document.querySelector('form');

// creo funzione per il click del btn_reset
btnResetElement.addEventListener('click', function() {

    // resetto il form
    formElement.reset();

    // resetto h3 in html
    let h3Element = document.querySelector('.welcome').innerHTML = ``;
})
