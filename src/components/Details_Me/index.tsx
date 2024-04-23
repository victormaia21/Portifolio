import perfilFoto from '../../assets/images/perfilFoto.webp';
import { FaMessage } from "react-icons/fa6";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { LiaUniversitySolid } from "react-icons/lia";

function index() {
    
 
    return (
    <section className="details">
        <div className="about">
            <h3>SOBRE</h3>
            <h1>Vou contar um pouco sobre o meu trabalho...</h1>
            <div className='photo_description'>
                <div><img src={perfilFoto} alt="minha foto" /></div>
                <p>Formado na área de analise e desenvolvimento de sistema, atuo no mercado como freelance, oferecendo soluções completas para sistemas web, design grafico e sistema integrados</p>
            </div>
        </div>
        <div className="profile_skills">
        <div className="profile">
            <div className='profile_apresentation'>
                <h1>PERFIL</h1>
                <p>Eu amo programação, me divirto muito e tomo bastante café durante meus projeto</p>
            </div>

            <div className="my_details">
                <div>
                    <h2>NOME:</h2>
                    <p>João Victor Benevenuto Maia</p>
                </div>
                <div>
                    <h2>NASCIMENTO:</h2>
                    <p>31 de Março de 2001</p>
                </div>
                <div>
                    <h2>CARGO:</h2>
                    <p>Freelancer, Full-Stack Developer, UI/UX Designer</p>
                </div>
                <div>
                    <h2>WEBSITE:</h2>
                    <p>victor.com</p>
                </div>
                <div>
                    <h2>EMAIL:</h2>
                    <p>jv1555550@gmail.com</p>
                </div>
            </div>
        </div>
            <div className="skills">
                <h1>SKILLS</h1>
                <p>Minhas especialidades</p>
                <div className='especialidade'>
                    <article>
                        <h2>FRONT-END</h2>
                        <span className='_porcentagem_front'><FaMessage /></span>
                    </article>
                    <div className='_front_end'></div>
                </div>
                <div className='especialidade'>
                    <article>
                        <h2>BACK-END</h2>
                        <span className='_porcentagem_back'><FaMessage /></span>
                    </article>
                    <div className='_back_end'></div>
                </div>
                <div className='especialidade'>
                    <article>
                        <h2>WEB</h2>
                        <span className='_porcentagem_back'><FaMessage /></span>
                    </article>
                    <div className='_web'></div>
                </div>
                <div className='especialidade'>
                    <article>
                        <h2>DESIGN GRÁFICO</h2>
                        <span className='_porcentagem_grafico'><FaMessage /></span>
                    </article>
                    <div className='_grafico'></div>
                </div>
            </div>
        </div>
        <div className="resumo">
            <h2>Resumo</h2>
            <h1 className='minhas_qualificacoes'>Minhas qualificações</h1>
            <p className='minha_trajetoria'>Um pouco sobre a minha trajetoria no mundo da programação</p>

            <h1 className='experiencia_profissional'>Experiência Profissional</h1>
            <div className='experiencia_profissional_divs'>
                <span className='mala'><BsSuitcaseLgFill /></span>
                <div className="myWork">
                    <h1>Developer</h1>
                    <p>2023 - Presente</p>
                </div>
                <div className="barra_cinza"></div>
                <div className="freelancer">
                    <h1>Freelancer</h1>
                    <p>
                        Atuo de forma independente como arquiteto de soluções de software, conduzindo projetos desde a concepção até a 
                        entrega final. Minha abordagem inclui análise detalhada de requisitos, prototipagem, desenvolvimento em 
                        diversas linguagens, testes abrangentes e documentação completa. Utilizo metodologias ágeis para garantir a 
                        qualidade e a satisfação do cliente em nível internacional.
                    </p>
                </div>
            </div>

            <div className='experiencia_profissional_divs'>
                <span className='mala'><LiaUniversitySolid /></span>
                <div className="myWork">
                    <h1>Uninorte</h1>
                    <p>Janeiro 2022 - Junho 2024</p>
                </div>
                <div className="barra_cinza"></div>
                <div className="freelancer">
                    <h1>CST Análise e Desenvolvimento de Sistemas</h1>
                    <p>
                    O curso de CST em Análise e Desenvolvimento de Sistemas prepara os alunos para desenvolver, 
                    analisar, projetar, implementar e atualizar sistemas de 
                    informação. Os estudantes adquirem noções básicas de 
                    gerenciamento, mas o foco principal é na especialização em 
                    criação de sistemas informatizados, incluindo programação de
                    computadores e desenvolvimento de softwares para maximizar 
                    a capacidade dos recursos do equipamento.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default index