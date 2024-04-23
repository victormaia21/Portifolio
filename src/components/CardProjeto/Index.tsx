import "../../styles/index.scss";

interface Props {
    img: string;
    description: string;
    title: string;
    link: string;
    setIsOpen:(open : boolean) => void;
    isOpen:boolean;
}

function Index({ img, description, title, link, setIsOpen, isOpen } : Props) {
  return (
    (isOpen && <div className={isOpen ? "card card_open" : "card"}>
        <div className="card_img">
            <img src={img} alt="logo" />
        </div>
        <p className="title_card">{title}</p>
        <p className="description_card">
            {description}
        </p>
        <div className="buttons_card">
            <button>
                <a href={link} target="_blank">Detalhes</a>
            </button>
            <button onClick={() => setIsOpen(false)}>Fechar</button>
        </div>
    </div>)
  )
}

export default Index