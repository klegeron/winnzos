import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import '/client/views/admin/Applications/components/style/presentationProduit.css';

class Client extends Component {
    render() {
        return (
            <div className="portfolio-content">
                <div className="fondBleu">
                    <div className="cbp-l-project-title"><h1>Développez votre relation client</h1></div>
                    <div className="cbp-l-project-subtitle">
                        <h2 style={{'color':'black'}}>10 jours Gratuit pour découvrir tous Winnzos</h2></div>
                    <div style={{'textAlign':'center'}}>
                        <a href="/register" className="btn red uppercase">Démarrez gratuitement <i className="fa fa-chevron-right"></i> </a>
                    </div>
                </div>
                <div className="cbp-l-project-container container">
                    <div className="row" style={{'paddingBottom':'50px'}}>

                        <div className="center-block">
                            <div className="col-md-4">

                                <h2 style={{'color':'blue'}}>Restez proche de vos client </h2>
                                <p style={{'textAlign':'left', 'fontSize':'16px'}}> </p>
                                <p style={{'textAlign':'left', 'fontSize':'16px'}}> Vos clients accèdent à vos disponibilités, prennent rendez-vous en ligne 24h/24, 7j/7, et vous sollicitent moins par téléphone : votre ligne est donc disponible pour les appels vraiment importants !</p>

                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 center-block" >
                            <div className="thumbnail">

                                <img src="/front/AnnuaireWinnzos2.jpg" alt="Annuaire Winnzos" style={{'display':'block', 'width':'100%'}} />
                            </div>

                        </div>



                    </div>
                    <div className="row" style={{'paddingBottom':'50px'}}>

                        <div className="col-sm-6 col-md-6 col-lg-6 center-block" >
                            <div className="thumbnail">

                                <img src="/front/GoogleMyBusinesss.jpg" alt="Google my business" style={{'display':'block', 'width':'100%', 'height': ''}} />
                            </div>

                        </div>

                        <div className="col-md-4 center-block">

                            <h2 style={{'color':'blue'}}>Visibilité multi canal</h2>
                            <p style={{'textAlign':'left', 'fontSize':'16px'}}>Optimisation de votre référencement Google pour s'assurer que vos clients vous trouvent, quel que soit le moteur de recherche utilisé. </p>
                            <p style={{'textAlign':'left', 'fontSize':'16px'}}>Google My Business vous permet de faire connaître votre établissement au plus grand nombre et de le mettre en évidence dans les résultats de recherche Google ou dans Maps.</p>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Client;
