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
    debug: true,
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
            about:{
              paragraph01: 'LibPDF is a React/Java web application that allows you to manage electronic bibliographic resources such as papers, books, and even code.',  
              paragraph02: 'The frontend will be built with REACT, while the backend will be a Restful API built with Spring (a Java backend framework) and Spring-JPA on PostgreSQL.',  
              paragraph03: 'The development process uses Github (free tier) and follows a continuous integration and continuous deployment (CI/CD) methodology that includes automated testing.',  
              paragraph04: 'The deployment will take place in the cloud (AWS or another provider) or on a traditional provider like Digital Ocean using Docker.',  
              paragraph05: 'Although this software ought to be useful, it will mostly serve as a technology demonstration.',  
              paragraph06: 'Jorge L.S. Leão (jorge.leao@ufrj.br, currently working alone) is leading the project.',  
              paragraph07a: 'The software will be available as a free download (',
              paragraph07b: ') and was designed to be used on a computer with a minimum resolution of 1280x720 pixels.',
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
            about: {
              paragraph01: 'LibPDF é uma aplicação React/Java para armazenar, buscar e recuperar materiais bibliográficos eletrônicos, como papers, livros e até código de programas de computador',  
              paragraph02: 'O frontend vai ser desenvolvido em REACT e o backend vai ser, na sua versão final, uma implementação de uma API REST em Spring,'+
                            ' (um framework Java para backend), com SpringJPA e PostgreSQL.',  
              paragraph03: 'O processo de desenvolvimento está sendo feito com o Github (free tier) com uma disciplina de CI/CD que inclui testes automatizados.',  
              paragraph04: 'A implantação será feita em um serviço de cloud (AWS ou outro) ou em um sistema como o Docker num provedor tradicional como o Digital Ocean.',  
              paragraph05: 'Embora esta aplicação seja útil por si mesma, ela deve servir sobretudo como uma demonstração das tecnologias mencionadas acima.',  
              paragraph06: 'O projeto está sendo conduzido por Jorge L.S.Leão (jorge.leao@ufrj.br, sozinho por enquanto).',  
              paragraph07a: 'O software será disponibilizado como um software de código aberto e gratuito (',
              paragraph07b: ') e ele foi projetado para ser usado em um computador com uma resolução mínima de 1280x720 pixels.',
              paragraph08: 'O projeto (re)iniciou-se em 20 de setembro de 2022. Ele ainda não produziu uma versão funcional nem foi implantado.'
            }
          }
      }
    }
  });

export default i18n;
