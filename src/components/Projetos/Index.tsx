import "../../styles/index.scss";
import Decorp from '../../assets/images/decorp.png';
import Itroca from '../../assets/images/itroca.png';
import Portifolio from '../../assets/images/portifolio.png';
import { useState } from "react";
import CardProjeto from '../CardProjeto/Index';

function Index() {

  interface IcardData {
    title: string;
    description: string;
    img:string;
    link:string;
  }

  const [cardOpen, setCardOpen] = useState<boolean>(false);
  const [cardData, setCardData] = useState<IcardData>({
    description:"",
    title:"",
    img:"",
    link:""
  });

  const cardDataOpen = (description : string, title:string, img:string, link:string) => {
    setCardData({
      description,
      title,
      img,
      link
    });
    setCardOpen(true);
  }

  return (
    <>
    <div className={cardOpen ? "page" : ""}></div>
      <div className="portifolio">
        <h2>PORTIFOLIO</h2>
        <h1>Confira alguns projetos realizado</h1>
        <div className="projects">
            <div 
              onClick={
                () => cardDataOpen(
                  `Desenvolvido utilizando Node.js e React, este projeto demandou aproximadamente 7 meses para ser 
                  concluído. Seu objetivo é facilitar a contratação de profissionais de diferentes áreas para a 
                  prestação de serviços específicos.`,
                  "DECORP",
                  Decorp,
                  "http://34.206.239.17:5173/"
                )
              }
            >
              <img src={Decorp} alt="decorp" />
              {cardOpen ? null : <h1>DECORP</h1>}
            </div>
            <div
              onClick={
                () => cardDataOpen(
                  `Projeto no qual participei criando a parte do front, itroca é um site para facilitar a 
                  troca de iphones`,
                  "ITROCA",
                  Itroca,
                  "https://www.itroca.com.br/"
                )
              }
            >
              <img src={Itroca} alt="itroca" />
              {cardOpen ? null :<h1>ITROCA</h1>}
            </div>
            <div 
              onClick={
                () => cardDataOpen(
                  `Site desenvolvido para minha apresentação diante dos possiveis recrutadores e clientes.`,
                  "PORTIFOLIO",
                  Portifolio,
                  "https://portifolio-sdxp.vercel.app/"
                )
              }
            >
              <img src={Portifolio} alt="portifolio" />
              {cardOpen ? null : <h1>PORTIFOLIO</h1>}
            </div>
        </div>
          <CardProjeto
            description={cardData.description}
            img={cardData.img}
            link={cardData.link}
            title={cardData.title}
            setIsOpen={setCardOpen}
            isOpen={cardOpen}
          />
    </div>
    </>
  )
}

export default Index