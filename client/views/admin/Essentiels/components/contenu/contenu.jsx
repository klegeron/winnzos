import React, {PropTypes} from 'react';
import moment from 'moment';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {DocHead} from 'meteor/kadira:dochead';
import {alertSuccess, alertDanger} from '/imports/Component/global/Alerts';
import { Carousel } from 'react-bootstrap';

import Tracker from 'tracker-component';
import pricingManager from '/imports/api/utils/pricingManager.js';
import ShoppingCartService from '/imports/shoppingcart/shoppingcartservice.js';

import swal from 'sweetalert2';


class Contenu extends Tracker.Component {

    constructor(props) {
        super(props);
    }
    handleClickWebStandard = (e) => {
        e.preventDefault();
        let {ht,ttc} = pricingManager.getApplicationPrice('packWebStandard');

        ShoppingCartService.addItem({
            id : 'prestation-packWebStandard',
            name :'Réalisation d\'un pack Web Standard',
            description : '',
            priceTtc : ttc,
            priceHt : ht,
        });

        swal({
            title: "Produit ajouté au panier.",
            type: 'success',
            showCancelButton: true,
            confirmButtonText: 'Finaliser ma commande',
            cancelButtonText: 'Continuer',
        }).then(function () {
            FlowRouter.go('/home_pro/shoppingcart');
        },function(){
        });
    }
    render() {

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="section-heading">
                            <h2 className="heading-1 with-lines">Pack Web Standard</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h4><i className="fa fa-check-circle fa-lg" style={{'color':'green'}}></i> 1 site web vitrine (5 pages)</h4>
                                <h4><i className="fa fa-check-circle fa-lg" style={{'color':'green'}}></i> Edition du contenu à votre guise</h4>
                                <h4><i className="fa fa-check-circle fa-lg" style={{'color':'green'}}></i> 1 nom de domaine en .fr (limité au disponibilité) </h4>
                                <h4><i className="fa fa-check-circle fa-lg" style={{'color':'green'}}></i> 1 hébergement OVH (1 an * )</h4>
                                <h4><i className="fa fa-check-circle fa-lg" style={{'color':'green'}}></i> Optimisation visibilité locale (Google My Business, Winnzos) </h4>
                                <h4><i className="fa fa-eur fa-lg" style={{'color':'red'}}></i> 270 € TTC </h4>
                                <button onClick={this.handleClickWebStandard} className="align-left btn red uppercase">Ajouter au panier</button>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fa fa-plus-circle fa-lg" style={{'color':'blue', 'padding':'20px'}}></i> Possibilité de formation pour gérer éfficacement le contenu de votre site web (non compris dans le prix)
                        </div>
                        <div className="row"><i className="fa fa-info-circle fa-lg" style={{'color':'blue', 'padding':'20px'}}></i> Nous vous contacterons par téléphone pour obtenir vos préférences de styles.</div>
                        <div className="row"><i className="fa fa-info-circle fa-lg" style={{'color':'blue', 'padding':'20px'}}></i> Renouvellement de l'hebergement de 50€/an.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contenu;
