import React from 'react';
import { Link } from 'react-router-dom';
import './Library.css';

function Library() {
    return (
        <div id='library' className='text-archive'>

            <div className="text-archive-intro">
                <p className="text-archive-path">TEXT_ARCHIVE / INDEX</p>
                <h1>The empty library</h1>

            <p>Like the name says, it's a empty library, there is nothing here...</p>


            <p>Just kidding, the page is in progress, here are Fernando Pessoa's Page with my favorite poems for you instead while im finishing.</p>
            </div>
            <section className="text-window" aria-labelledby="text-index-title">
                <div className="text-titlebar"><h2 id="text-index-title">TEXT_ARCHIVE / FILE INDEX</h2><span aria-hidden="true">[−] [□] [×]</span></div>
                <div className="text-window-body">
                    <p className="text-meta">DIRECTORIES: 04 / STATUS: IN PROGRESS</p>
                    <div className="text-table-wrap">
                        <table className="text-file-table">
                            <thead><tr><th scope="col">NAME</th><th scope="col">TYPE</th><th scope="col">SIZE</th><th scope="col">DATE</th><th scope="col">STATUS</th></tr></thead>
                            <tbody>
                                <tr><td>reading_log/</td><td>DIR</td><td>—</td><td>—</td><td>IN PROGRESS</td></tr>
                                <tr><td>poetry/</td><td>DIR</td><td>—</td><td>—</td><td>READABLE</td></tr>
                                <tr><td className="text-file-child"><Link to="/pessoa">Fernando Pessoa</Link></td><td>TXT</td><td>—</td><td>—</td><td><Link to="/pessoa">[ READ ]</Link></td></tr>
                                <tr><td>unfinished/</td><td>DIR</td><td>—</td><td>—</td><td>IN PROGRESS</td></tr>
                                <tr><td>favorite_authors/</td><td>DIR</td><td>—</td><td>—</td><td>IN PROGRESS</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-meta">— = INFORMATION NOT AVAILABLE</p>
                </div>
            </section>

{/*             <div className='simple-list'>
                <h1>2025</h1>
                <h2>Janeiro</h2>
                <ul>
                    <li>Alerta Vermelho (Martha Wells)</li>
                    <li>O peso do pássaro morto (Aline Bei)</li>
                </ul>

                <h2>Fevereiro</h2>
                <ul> 
                    <li>A morte de Ivan Ilitch (Liev Tolstói)</li>
                </ul>

                <h2>Março</h2>
                <ul>
                    <li>A redoma de vidro (Sylvia Plath)</li>
                </ul>

                <h2>Abril</h2>
                <ul>
                    <li>Cartas na rua (Charles Bukowski)</li>
                </ul>

                <h2>Maio</h2>
                <ul>
                    <li>Felicidade Clandestina (in progress)</li>
                </ul>
            </div>
            <br/>
            <div className='simple-list'>
                <h1>2024</h1>
                <h2>Janeiro</h2>
                <ul>
                    <li>Uma breve história da filosofia (Nigel Warburton)</li>
                    <li>A Metamorfose (Franz Kafka)</li>
                </ul>

                <h2>Fevereiro</h2>
                <ul>
                    <li>O declínio de um homem (Osamu Dazai)</li>
                    <li>Percy Jackson III A maldição do titã (Rick Riordan)</li>
                </ul>

                <h2>Março</h2>
                <ul>
                    <li>A depressão é uma borboleta azul (Sabrine Cantele)</li>
                </ul>

                <h2>Abril</h2>
                <ul>
                    <li>Missão Romance (Lyssa Kay Adams)</li>
                    <li>Carta ao pai (Franz Kafka)</li>
                </ul>
            
                <h2>Maio</h2>
                <ul>
                    <li>Percy Jackson IV A batalha do Labirinto (Rick Riordan)</li>
                </ul>

                <h2>Junho/Julho</h2>
                <ul>
                    <li>Percy Jackson V O Último Olimpiano (Rick Riordan)</li>
                </ul>

                <h2>Agosto/Setembro</h2>
                <ul>
                    <li>Memórias do Subsolo (Fiódor Dostoiévski)</li>
                    <li>Noites brancas (Fiódor Dostoiévski)</li>
                </ul>

                <h2>Outubro</h2>
                <ul>
                    <li>Uma criatura dócil (Fiódor Dostoiévski)</li>
                </ul>

                <h2>Novembro</h2>
                <ul>
                    <li>O estrangeiro (Albert Camus)</li>
                </ul>

                <h2>Dezembro</h2>
                <ul>
                    <li>A hora da estrela (Clarice Lispector)</li>
                </ul>
            </div>

            <h1>Destaques</h1>
            <p><a href='/pessoa'>Fernando Pessoa</a></p> */}
        </div>
    );
}

export default Library;
