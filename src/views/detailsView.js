import {html, nothing} from '../../node_modules/lit-html/lit-html.js';

import * as dashBoardService from '../services/dashboardService.js';

const donate = (e) => {
    e.preventDefault();
    let sum = 0;
    sum += 100;
    document.querySelector('.donation').textContent = `Donation: ${sum}$`;
    document.querySelector('.actionBtn').style.display = 'none';
    
    

}


const detailsTemplate = (animal, user, sum ) => html `
      <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src=${animal.image}>
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${animal.name}</h1>
                        <h3>Breed: ${animal.breed}</h3>
                        <h4>Age: ${animal.age} </h4>
                        <h4>Weight: ${animal.weight}</h4>
                        <h4 class="donation">Donation: 0$</h4>
                    </div>

                    <!-- Only for registered user and creator of the album-->
                    ${user._id == animal._ownerId

                       ? html`
                                <div class="actionBtn">
                                    <!-- Only for registered user and creator of the pets-->
                                    <a href="/data/pets/${animal._id}/edit" class="edit">Edit</a>
                                    <a href="/data/pets/${animal._id}/delete" class="remove">Delete</a>
                                </div>`
                    : nothing
                    }

                        ${user
                        ?html `<div class="actionBtn">
                        <a href="#" class="donate" @click=${donate}>Donate</a>
                        </div>`
                        : nothing 
                        }

                    
                </div>
            </div>
        </section>`;


export const detailsView = (ctx) => {
    dashBoardService.getOne(ctx.params.animalId)
    .then(animal => {
        if(ctx.user){
            ctx.render(detailsTemplate(animal, ctx.user))
        }
        else{
            ctx.render(detailsTemplate(animal, ''))

        }
        
    })

};