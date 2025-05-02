import React from 'react';

function Library() {
    return (
        <div id='library' className='page-content'>
            <h1>The empty library</h1>
            <p>It's not empty; I just think the name will be funny..</p>
            
            <h2>Favorite books</h2>
            <ul>
                <li>O peso do passáro morto</li>
                <li>Noites brancas</li>
                <li>Percy Jackson e os Olimpianos</li>
                <li>O declínio de um homem</li>
                <li>A metamorfose</li>
                <li>Flores para Algernon</li>
            </ul>

            <h2>Favorite authors</h2>
            <ul>
                <li>Dostoiévsk</li>
                <li>Franz Kafka</li>
                <li>Aline Bei</li>
                <li><a href='/pessoa'>Fernando Pessoa</a></li>
            </ul>
        </div>
    );
}

export default Library;