import React from 'react';
import Layout from '../components/Layout';

const About = () => {
    return(
        <div className="cart-page content-min-height container-fluid container-min-max-width
                d-flex flex-column justify-content align-items-center">
            <Layout>
                <h1>Despre acest magazin online</h1>
                <p>
                    Magazinul online echo-shop este cel de-al doilea proiect din cadrul cursului JavaScript Advanced - React, predat la sediul Telecom Academy.
                    Pentru toate detaliile legate de curs, puteti accesa link-ul urmator: <a href="https://www.telacad.ro/cursuri/cooming-soon-curs-javascript-advanced-react/">https://www.telacad.ro/cursuri/cooming-soon-curs-javascript-advanced-react/</a>
                </p>
                <h3>Functionalitati</h3>
                <ul>
                    <li>Click pe orice categorie - va lista produsele corespunzatoare</li>
                    <li>
                        Click pe butonul "Adauga in cos" al fiecarui produs(fie din pagina de categorie, fie din pagina de produs) - produsul va fi adaugat in cos. Iconita corepsunzatoare se actualizeaza daca produsul nu exista deja in cos
                    </li>
                    <li>
                        Click pe inimioara sau butonul "Adauga la Favorite" al fiecarui produs(fie din pagina de categorie, fie din pagina de produs) - produsul va fi adaugat in lista de favorite. Iconita corepsunzatoare se actualizeaza daca produsul nu exista deja in lista de favorite
                    </li>
                    <li>
                        Click pe produs - va duce catre pagina produsului
                    </li>
                    <li>
                        Click pe "Logare" - va redirecta catre pagina de Login, unde la click pe butonul "Logare cu Google" sau "Logare cu Facebook" veti fi redirectionati catre pagina corespunzatoare
                    </li>
                    <li>
                        Click pe cos(iconita) - va afisa produsele adaugate in cos. La click pe iconita "X" puteti elimina un produs din cos
                    </li>
                    <li>
                        Click pe inimioara(iconita) din Header - va afisa produsele adaugate in lista de favorite. Din aceasta lista produsele vor putea fi adaugate in cosul de cumparaturi sau eliminate din lista de favorite
                    </li>
                </ul>
            </Layout>
        </div>
    )
}

export default About;