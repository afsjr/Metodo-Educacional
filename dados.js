let dados = [
    {
      nome: "Método Montessori",
      paisOrigem: "Itália",
      criador: "Maria Montessori",
      descricao: "Promove a autonomia e o aprendizado ativo através da exploração sensorial e materiais didáticos específicos. Melhores resultados em crianças com maior independência e amor pelo aprendizado.",
      link: "https://pt.wikipedia.org/wiki/M%C3%A9todo_Montessori"
    },
    {
      nome: "Pedagogia Waldorf",
      paisOrigem: "Alemanha",
      criador: "Rudolf Steiner",
      descricao: "Valoriza o desenvolvimento integral do aluno, integrando aspectos cognitivos, artísticos e práticos. Melhores resultados em alunos criativos e com senso de comunidade.",
      link: "https://pt.wikipedia.org/wiki/Pedagogia_Waldorf"
    },
    {
      nome: "Construtivismo",
      paisOrigem: "Suíça",
      criador: "Jean Piaget",
      descricao: "O aluno é o protagonista da construção do seu conhecimento, interagindo com o ambiente e resolvendo problemas. Melhores resultados em alunos com pensamento crítico e capacidade de resolução de problemas.",
      link: "https://pt.wikipedia.org/wiki/Construtivismo_(pedagogia)"
    },
    {
      nome: "Aprendizagem Baseada em Problemas (ABP)",
      paisOrigem: "Canadá",
      criador: "Universidade McMaster",
      descricao: "Os alunos trabalham em grupos para resolver problemas reais, desenvolvendo habilidades de pesquisa e colaboração. Melhores resultados em alunos com capacidade de trabalho em equipe e aplicação prática do conhecimento.",
      link: "https://pt.wikipedia.org/wiki/Aprendizagem_baseada_em_problemas"
    },
    {
      nome: "Sala de Aula Invertida",
      paisOrigem: "Estados Unidos",
      criador: "Jonathan Bergmann e Aaron Sams",
      descricao: "Os alunos estudam o conteúdo em casa e utilizam o tempo em sala de aula para atividades práticas e discussões. Melhores resultados em alunos com maior engajamento e aproveitamento do tempo em sala de aula.",
      link: "https://pt.wikipedia.org/wiki/Sala_de_aula_invertida"
    },
    {
      nome: "Gamificação",
      paisOrigem: "Estados Unidos",
      criador: "Nick Pelling",
      descricao: "Utiliza elementos de jogos para motivar e engajar os alunos no processo de aprendizagem. Melhores resultados em alunos com maior interesse e participação nas atividades.",
      link: "https://pt.wikipedia.org/wiki/Gamifica%C3%A7%C3%A3o"
    },
    {
      nome: "Aprendizagem Cooperativa",
      paisOrigem: "Estados Unidos",
      criador: "David Johnson e Roger Johnson",
      descricao: "Os alunos trabalham em grupos, dividindo tarefas e responsabilidades para alcançar um objetivo comum. Melhores resultados em alunos com habilidades de comunicação e colaboração.",
      link: "https://pt.wikipedia.org/wiki/Aprendizagem_cooperativa"
    },
    {
      nome: "Método Freinet",
      paisOrigem: "França",
      criador: "Célestin Freinet",
      descricao: "Valoriza a expressão livre e a comunicação entre os alunos, incentivando a produção de textos e a criação de projetos. Melhores resultados em alunos com maior autonomia e criatividade.",
      link: "https://pt.wikipedia.org/wiki/Pedagogia_Freinet"
    },
    {
      nome: "Método Sócio-interacionista",
      paisOrigem: "Rússia/Bielorrússia",
      criador: "Lev Vygotsky",
      descricao: "A aprendizagem ocorre através da interação social e da mediação do professor. Melhores resultados em alunos com maior desenvolvimento cognitivo e social.",
      link: "https://pt.wikipedia.org/wiki/Teoria_sociointeracionista"
    },
    {
      nome: "Ensino Híbrido",
      paisOrigem: "Estados Unidos",
      criador: "Clayton Christensen",
      descricao: "Combina o ensino presencial com o ensino online, oferecendo maior flexibilidade e personalização da aprendizagem. Melhores resultados em alunos com diferentes estilos de aprendizagem e necessidades.",
      link: "https://pt.wikipedia.org/wiki/Ensino_h%C3%ADbrido"
    },
    {
      nome: "Design Thinking",
      paisOrigem: "Estados Unidos",
      criador: "David Kelley e Tim Brown",
      descricao: "Metodologia de resolução de problemas que incentiva a criatividade e a empatia. Melhores resultados em alunos com capacidade de inovação e resolução de problemas complexos.",
      link: "https://pt.wikipedia.org/wiki/Design_thinking"
    },
    {
      nome: "Aprendizagem Baseada em Projetos (ABP)",
      paisOrigem: "Estados Unidos",
      criador: "John Dewey",
      descricao: "Os alunos desenvolvem projetos que integram diferentes áreas do conhecimento, aplicando o que aprenderam na prática. Melhores resultados em alunos com maior engajamento e capacidade de aplicar o conhecimento em situações reais.",
      link: "https://pt.wikipedia.org/wiki/Aprendizagem_baseada_em_projetos"
    },
    {
      nome: "Método de Ensino Tradicional",
      paisOrigem: "Grécia Antiga",
      criador: "Sócrates, Platão e Aristóteles",
      descricao: "O professor é o centro do processo de ensino, transmitindo o conhecimento aos alunos de forma expositiva. Melhores resultados em alunos com boa capacidade de memorização e concentração.",
      link: "https://pt.wikipedia.org/wiki/Educa%C3%A7%C3%A3o_tradicional"
    },
    {
      nome: "Método Diretivo",
      paisOrigem: "Alemanha",
      criador: "Johann Friedrich Herbart",
      descricao: "O professor guia os alunos passo a passo, fornecendo instruções claras e controlando o ritmo da aprendizagem. Melhores resultados em alunos que precisam de maior estrutura e orientação.",
      link: "https://pt.wikipedia.org/wiki/Johann_Friedrich_Herbart"
    },
    {
      nome: "Método Não Diretivo",
      paisOrigem: "Estados Unidos",
      criador: "Carl Rogers",
      descricao: "O aluno é o centro do processo de aprendizagem, sendo livre para explorar seus interesses e tomar decisões. Melhores resultados em alunos com alta motivação intrínseca e capacidade de autodireção.",
      link: "https://pt.wikipedia.org/wiki/Carl_Rogers"
    },
    {
      nome: "Método de Ensino por Competências",
      paisOrigem: "Europa",
      criador: "Vários autores",
      descricao: "O foco está no desenvolvimento de habilidades e competências que os alunos precisam para ter sucesso na vida profissional e pessoal. Melhores resultados em alunos com maior preparação para o mercado de trabalho e para a vida em sociedade.",
      link: "https://pt.wikipedia.org/wiki/Aprendizagem_baseada_em_compet%C3%AAncias"
    },
    {
      nome: "Método de Ensino Personalizado",
      paisOrigem: "Estados Unidos",
      criador: "Benjamin Bloom",
      descricao: "Adapta o ensino às necessidades e ao ritmo de cada aluno, oferecendo diferentes recursos e atividades. Melhores resultados em alunos com diferentes estilos de aprendizagem e necessidades.",
      link: "https://pt.wikipedia.org/wiki/Aprendizagem_personalizada"
    },
    {
      nome: "Método de Ensino por Investigação",
      paisOrigem: "Estados Unidos",
      criador: "Joseph Schwab",
      descricao: "Os alunos formulam perguntas, investigam e buscam respostas, desenvolvendo habilidades de pesquisa e pensamento crítico. Melhores resultados em alunos com curiosidade e interesse em aprender.",
      link: "https://pt.wikipedia.org/wiki/Aprendizagem_baseada_em_investiga%C3%A7%C3%A3o"
    },
    {
      nome: "Método de Ensino Colaborativo",
      paisOrigem: "Estados Unidos",
      criador: "Vários autores",
      descricao: "O professor e os alunos trabalham juntos na construção do conhecimento, compartilhando ideias e responsabilidades. Melhores resultados em alunos com maior engajamento e senso de comunidade.",
      link: "https://pt.wikipedia.org/wiki/Aprendizagem_colaborativa"
    }
  ];
