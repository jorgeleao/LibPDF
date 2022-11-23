import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
            appPageTexts: {
                part1: "...em Português, por favor!",
                part2: 'Another english text!',
                part3: 'Search',
                part4: 'Logout',
                part5: 'Search',
                part6: 'Cataloging',
                part7: 'About',
                part8: 'Logout',
            },
            common:{
              serial: 'Serial',
              title: 'Title',
              author: 'Authority',
              publisher: 'Publisher',
              pubdate: 'Publish date',
              from: 'From',
              to: 'To',
              keywords: 'Keywords',
              originalfilename: 'Original filename',
              fileupload: 'File upload',
              choosefile: 'Choose file',
              nofilechosen: 'No file chosen',
              upload: 'Upload',
              newcomment: 'New comment',
              previouscomments: 'Previous comments',
            },
            search:{
                currentpage: 'Current page',
                previouspage: 'Previous',
                nextpage: 'Next',
                previous: 'Previous',
                next: 'Next',
                search: 'Search',
                cataloging: 'Edit',
                clear: 'Clear',
                results: 'Results',
                nrorecordsfound: '# records',
                and: 'AND',
                or: 'OR'
            },
            bibliform:{
              serial: 'Serial',
              title: 'Title',
              author: 'Authority',
              publisher: 'Publisher',
              pubdate: 'Publish date',
              from: 'From',
              to: 'To',
              keywords: 'Keywords',
          },
            searchMode:{
              AND: 'And',
              OR: 'Or'
            },  
            cataloging:{
              previous: 'Previous',
              next: 'Next',
              serial: 'Serial',
              title: 'Title',
              author: 'Authority',
              publisher: 'Publisher',
              pubdate: 'Publish date',
              keywords: 'Keywords',
              originalfilename: 'Original filename',
              fileupload: 'File upload',
              choosefile: 'Choose file',
              nofilechosen: 'No file chosen',
              upload: 'Upload',
              newcomment: 'New comment',
              previouscomments: 'Previous comments',
              edit: 'Edit',
              saveascurrent: 'Save as current',
              saveasnew: 'Save as new',
              download: 'Download',
              clear: 'Clear',
              delete: 'Delete'
          },  
            about:{
              paragraph01: 'LibPDF is a React/Java web application that allows you to manage electronic bibliographic resources such as papers, books, and even code.',  
              paragraph02: 'The frontend will be built with REACT/JS, while the backend will be a Restful API built with Java/Spring and Spring-JPA with PostgreSQL.',  
              paragraph03: 'The development process uses Github (https://github.com/jorgeleao/LibPDF) and follows a continuous integration and continuous deployment (CI/CD) methodology that includes automated testing.',  
              paragraph04: 'The deployment will take place in the cloud (AWS or another provider) or on a traditional provider like a Digital Ocean droplet.',  
              paragraph05: 'Although this software ought to be useful, it will mostly serve as a technology demonstration.',  
              paragraph06: 'Jorge L.S. Leão (jorge.ls.leao@gmail.com, currently working alone) is leading the project.',  
              paragraph07a: 'The software will be available free and open source (',
              paragraph07b: '). It was designed to be used on desktop and notebook computers with a minimum resolution of 1280x720 pixels; the text may not be readable on small screens.',
              paragraph08: 'The project (re)started on september 20th, 2022. It has not yet produced a working version nor been deployed.'
            }  
        }
      },
      pt:{
          translation:{
            appPageTexts: {
                part1: "...in English, please!",
                part2: 'Outro texto em Português!',
                part3: 'Busca',
                part4: 'Sair',
                part5: 'Busca',
                part6: 'Catalogação',
                part7: 'Sobre',
                part8: 'Sair',
            },
            common:{
              serial: 'Patrimônio',
              title: 'Título',
              author: 'Autores',
              publisher: 'Editora',
              pubdate: 'Data de publicação',
              from: 'De',
              to: 'Até',
              keywords: 'Palavras-chave',
              originalfilename: 'Nome original do arquivo',
              fileupload: 'Subir arquivo',
              choosefile: 'Escolher',
              nofilechosen: 'Nenhum arquivo escolhido',
              upload: 'Subir',
              newcomment: 'Novo comentário',
              previouscomments: 'Comentários anteriores',
            },
            search:{
              currentpage: 'Página atual',
              previouspage: 'Anterior',
              nextpage: 'Próxima',
              previous: 'Anterior',
              next: 'Próximo',
              search: 'Buscar',
              cataloging: 'Editar',
              clear: 'Limpar',
              results: 'Resultados',
              nrorecordsfound: '# registros',
              and: 'E',
              or: 'OU'
            },  
            bibliform:{
              serial: 'Patrimônio',
              title: 'Título',
              author: 'Autores',
              publisher: 'Editora',
              pubdate: 'Data de publicação',
              from: 'De',
              to: 'Até',
              keywords: 'Palavras-chave',
            },
            searchMode:{
              AND: 'E',
              OR: 'Ou'
            },  
            cataloging:{
              previous: 'Anterior',
              next: 'Próximo',
              serial: 'Patrimônio',
              title: 'Título',
              author: 'Autores',
              publisher: 'Editora',
              pubdate: 'Data da publicação',
              keywords: 'Palavras-chave',
              originalfilename: 'Nome original do arquivo',
              fileupload: 'Subir arquivo',
              choosefile: 'Escolher',
              nofilechosen: 'Nenhum arquivo escolhido',
              upload: 'Subir',
              newcomment: 'Novo comentário',
              previouscomments: 'Comentários anteriores',
              edit: 'Editar',
              saveascurrent: 'Salvar como atual',
              saveasnew: 'Salvar como novo',
              download: 'Baixar',
              clear: 'Limpar',
              delete: 'Excluir'
            },  
            about: {
              paragraph01: 'LibPDF é uma aplicação React/Java para armazenar, buscar e recuperar materiais bibliográficos eletrônicos, como papers, livros e até código de programas de computador',  
              paragraph02: 'O frontend vai ser desenvolvido em REACT/JS e o backend vai ser, na sua versão final, uma implementação de uma API REST em Java/Spring,'+
                            ' com SpringJPA e PostgreSQL.',  
              paragraph03: 'O processo de desenvolvimento está sendo feito com o Github (https://github.com/jorgeleao/LibPDF) com uma disciplina de CI/CD que inclui testes automatizados.',  
              paragraph04: 'A implantação será feita em um serviço de cloud (AWS ou outro) ou em um provedor tradicional como um droplet da Digital Ocean.',  
              paragraph05: 'Embora esta aplicação seja útil por si mesma, ela deve servir sobretudo como uma demonstração das tecnologias mencionadas acima.',  
              paragraph06: 'O projeto está sendo conduzido por Jorge L.S.Leão (jorge.ls.leao@gmail.com, sozinho por enquanto).',  
              paragraph07a: 'O software será disponibilizado gratuitamente, com o código aberto (',
              paragraph07b: '). Ele foi projetado para ser usado em um notebook ou desktop com uma resolução mínima de 1280x720 pixels; o texto pode não ser legível em telas pequenas.',
              paragraph08: 'O projeto (re)iniciou-se em 20 de setembro de 2022. Ele ainda não produziu uma versão funcional nem foi implantado.'
            }
          }
      }
    }
  });

export default i18n;
