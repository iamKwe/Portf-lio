function enviarWhatsapp(event) {
            event.preventDefault();

            const nome = document.getElementById(`nome`).value;
            const mensagem = document.getElementById(`mensagem`).value;
            const telefone = "5516982338837";

            const texto = `Olá, meu nome é ${nome}, e gostaria de entrar em contato com você. Minha mensagem é: ${mensagem}`;
            const msgFormatada = encodeURIComponent(texto);

            const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

            window.open(url, '_blank');
}