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

document.addEventListener('DOMContentLoaded', () => { //carrega o documento e depois roda o js
 
    const formBlog = document.getElementById('form-historia-blog');
    const inputNomeBlog = document.getElementById('input-nome');
    const inputHistoriaBlog = document.getElementById('input-historia');
    const postsContainerBlog = document.getElementById('posts-container');

    formBlog.addEventListener('submit', (event) => { //captura o momento que o botao é clicado
        
        event.preventDefault(); //impede que a página recarregue

        const nomeblogg = inputNomeBlog.value;  //pega o texto de dentro dos campos
        const historiablogg = inputHistoriaBlog.value;

        // 5. Cria o novo elemento 'div' que será o post-it
        const novoPost = document.createElement('div');
        novoPost.classList.add('post-it-blog'); //adiciona a classe CSS 'post-it'

        //monta o HTML interno do novo post-it com os valores
        novoPost.innerHTML = `
            <div class="post-header-blog">
                <span class="icone-pessoa-blog">👤</span>
                <span class="nome-usuario-blog">${nomeblogg}</span>
            </div>
            <div class="post-reacoes-blog">
                <span>❤</span>
                <span>😊</span>
                <span>🤔</span>
            </div>
            <div class="post-corpo-blog">
                <p>${historiablogg}</p>
            </div>
        `;

        postsContainerBlog.appendChild(novoPost); //adiciona o novo post-it dentro do contêiner de posts

    });
});