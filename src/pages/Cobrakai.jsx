import React from 'react';
import { useEffect } from 'react';
import './Cobrakai.css';

function Attachment({ number }) {
    const filename = `cobrakai${number}.png`;
    return (
        <figure className="shrine-attachment">
            <img src={`/images/${filename}`} alt="Cobra Kai" loading="lazy" />
            <figcaption>ATTACHMENT_{String(number).padStart(2, '0')} / {filename.toUpperCase()}</figcaption>
        </figure>
    );
}

function Cobrakai() {
    useEffect(() => {
        document.title = "Empty's Brain | Cobra Kai";
      }, []);
    return (
        <div id='cobrakai' className='shrine-archive'>
            <div className="shrine-intro" id="overview">
            <p className="shrine-path">MEDIA_SHRINE / COBRA_KAI / PERSONAL RECORD</p>
            <h1>Cobra Kai</h1>
            <p className="shrine-disclaimer">PERSONAL INTERPRETATION / UNOFFICIAL FAN PAGE</p>
            </div>
            <nav className="shrine-navigation" aria-label="Cobra Kai shrine sections">
                <a href="#overview">[ overview ]</a>
                <a href="#characters">[ characters ]</a>
                <a href="#quotes">[ quotes ]</a>
                <a href="#personal-notes">[ personal_notes ]</a>
                <a href="#images">[ images ]</a>
            </nav>
            <article className="shrine-window">
            <div className="shrine-titlebar"><span>COBRA_KAI / PERSONAL_LOG.TXT</span><span aria-hidden="true">[−] [□] [×]</span></div>
            <div className="shrine-content">
            <p className="shrine-record">[ RECORD 01 / OVERVIEW ]</p>
            <p>comecei a assistir cobra kai por achar que seria uma série divertida mas meio idiota, porque
            não queria ver algo muito bom ou pesado, pois tinha acabado de assistir Better Call Saul, e acabou sendo uma das coisas mais incríveis que já assisti</p>
            
            <p>O que mais me marcou na série foi a questão da mudança, da evolução dos personagens</p>
            <Attachment number={1} />
            <p className="shrine-record" id="characters">[ RECORD 02 / CHARACTERS ]</p>
            <p>johnny lawrence, o "vilão" do Karate Kid, que todos que assistiram o odiaram por infernizar a vida do Daniel-san, é o personagem principal da obra,
             e de cara já senti empatia por ele, tenho uma tendência a gostar de personagens mal tentando se tornar uma pessoa melhor.</p>

             <p>*não quero mais fazer uma review do filme fds, vou mudar a abordagem*</p>

             <h2 className="shrine-quote" id="quotes">time... you still have time</h2>
             <Attachment number={2} />
             <p>O amigo de Johnny, que está em estado terminal, mostra a ele que mesmo que sua vida esteja uma bagunça, e aparentemente sem solução, Johnny ainda possui a coisa mais preciosa do mundo, o tempo.
            Tempo para tomar novas decisões, seguir outros caminhos...</p>

            <h2 id="personal-notes">Sr. Miyagi em Karate Kid</h2>
            <Attachment number={3} />
            <p>engraçado como uma simples frase pode mudar sua forma de pensar. Enquanto assistia, estava sentindo bastante medo em tomar algumas decisões pessoais, mas o Sr. Miyagi apareceu na hora certa. E para pessoas ansiosas, acredito que pensar assim é essencial, muitas vezes perdemos para o medo/ansiedade antes mesmo de tentar, e isso é algo que aconteceu bastante durante minha vida, estive sempre perdendo para o medo.
            É preciso entender que tudo bem se der errado, o que não pode é perder para o medo, não deixe a ansiedade te dominar.</p>

            <h2>Chozen</h2>
            <Attachment number={4} />
            <p>Um pequeno conselho do meu mano Chozen</p>

            <h2>But i don't how to not fight</h2>
            <Attachment number={5} />
            <p>Essa cena mostra a diferença da mentalidade entre Cobra Kai e Miyagi-do. Apesar de respeitar a mentalidade de uma vida mais calma e etc. Me simpatizo muito mais com Johnny, para alguns, lutar é a única escolha possível.</p>
            <p>O que também é mostrado no diálogo entre a Amanda LaRusso e a Tory, que sofreu durante toda a série</p>
            <Attachment number={6} />
            <Attachment number={7} />
            <p>Tory, que apesar de ter se desviado várias vezes, também por conta da mentalidade Cobra Kai, sempre continuou sendo badass</p>

            <h2 id="images">COBRA KAI MENTALITY</h2>
            <h3>STRIKE FIRST</h3>
            <Attachment number={8} />
            <h3>STRIKE HARD</h3>
            <Attachment number={9} />
            <h3>NO MERCY</h3>
            <Attachment number={10} />
            <Attachment number={11} />

            <p>O fim da série é lindo, Cobra Kai volta a ser do Johnny, e agora com ele muito mais maduro, mas sem perder a essência, que é transformar seus alunos em pessoas fodas.</p>

            <p>DON'T BE A PUSSY</p>

            <p>e graças a série, estou explorando novos tipos de músicas *"Change that ringtone. Get some Guns N' Roses or something</p>

            </div>
            </article>
        </div>
    );
}

export default Cobrakai;
