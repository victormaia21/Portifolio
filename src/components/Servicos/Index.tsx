import { BiWorld } from "react-icons/bi";
import { MdWeb } from "react-icons/md";
import { FaImage } from "react-icons/fa";

function Index() {
  return (
    <div className="servicos">
        <div className="servicos_description">
            <h2 className="servicos_h2">SERVIÇOS</h2>
            <h1 className="help_servicos">Como posso te ajudar?</h1>
            <p className="description_serv">Se você precisa de um site, aplicativo, arte gráfica, está no lugar certo!</p>
        </div>
        <div className="containers">
            <div>
                <span><BiWorld /></span>
                <h2>Sistema Integrado</h2>
                <p>
                    Desde uma simples landpage, sites pessoais ou 
                    comercial, até lojas virtuais e sistemas complexos para internet
                </p>
            </div>
            <div>
                <span><FaImage/></span>
                <h2>Design Gráfico</h2>
                <p>
                    Essencial para o marketing digital, uma arte gráfica pode fazer toda a diferença
                    para o seu negocio. Panfletos, flyers, convites, banners, avatars, entre outras
                </p>
            </div>
            <div>
                <span><MdWeb/></span>
                <h2>Aplicação Web</h2>
                <p>
                    Desde uma simples landpage, sites pessoais ou comercial, até lojas virtuais e sistemas complexos para internet
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Index