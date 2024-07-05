const fone = "558291981626";
const textSaberMais = `Oii, gostaria de saber mais sobre o *TV Express* :)`;

const nameID = document.getElementById("idName");
const messageID = document.getElementById("idMessage");

const WhatsApp_Contato_Nos = () => {
    const name = nameID.value;
    const message = messageID.value;
    var contatoNos = `Oi, me chamo *${name}*.\n\n`;
    contatoNos += `${message}\n`;

    if (name && message){
        // Cria a URL do WhatsApp
        const url = `https://wa.me/${fone}?text=${encodeURIComponent(contatoNos)}`;
        
        // Abre a URL em uma nova aba
        window.open(url, '_blank');
    }
};

const WhatsApp_Saber_Mais = () => {

    // Cria a URL do WhatsApp
    const url = `https://wa.me/${fone}?text=${encodeURIComponent(textSaberMais)}`;

    // Abre a URL em uma nova aba
    window.open(url, '_blank');
};

