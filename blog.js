const sistBlog = [ 
    { 
    "BlogMural": { 
        "titulo": "Blog ou Mural de histórias", 
        "descricao": "Um espaço para compartilhar depoimentos, histórias e conteúdos inspiradores.", 
    },
},
]
    const sistPost = [ 
        { 
            "idPost": "p1", "Nome": "Digite aqui...", 
            "NovaHistória": "Digite aqui...", }, 
        ]
    const sistemaFeedback = [ 
            { "id": "Amei" , 
                "icone": "❤"
                }, 
                { "id": "Legal", 
                    "icone": " " 

                }, 
                { "id": "Gostei", 
                    "icone": " " 

                }, 
            ]
        const sistemaComentarios = [
                    { "nomeUsuario": "Digite aqui...", 
                        "texto": "Digite aqui..."
                        },
                    ]

// Espera o HTML carregar completamente antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Pega os elementos do HTML pelos seus IDs
    const form = document.getElementById('form-historia-blog');
    const inputNome = document.getElementById('input-nome');
    const inputHistoria = document.getElementById('input-historia');
    const postsContainer = document.getElementById('posts-container');

    // 2. Adiciona um "escutador" de evento para o formulário
    // Usamos 'submit' no formulário em vez de 'click' no botão.
    // Isso captura o clique e também o "Enter"
    form.addEventListener('submit', (event) => {
        
        // 3. Impede que a página recarregue (comportamento padrão do formulário)
        event.preventDefault();

        // 4. Pega os valores (o texto) de dentro dos campos
        const nome = inputNome.value;
        const historia = inputHistoria.value;

        // 5. Cria o novo elemento 'div' que será o post-it
        const novoPost = document.createElement('div');
        novoPost.classList.add('post-it-blog'); // Adiciona a classe CSS 'post-it'

        // 6. Monta o HTML interno do novo post-it com os valores
        novoPost.innerHTML = `
            <div class="post-header-blog">
                <span class="icone-pessoa-blog">👤</span>
                <span class="nome-usuario">${nome}</span>
            </div>
            <div class="post-reacoes-blog">
                <span>❤</span>
                <span>😊</span>
                <span>🤔</span>
            </div>
            <div class="post-corpo">
                <p>${historia}</p>
            </div>
        `;

        // 7. Adiciona o novo post-it dentro do contêiner de posts
        postsContainer.appendChild(novoPost);

        // 8. Limpa os campos do formulário para o próximo post
        form.reset();
    });
});