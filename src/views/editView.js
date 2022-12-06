import {html, nothing} from '../../node_modules/lit-html/lit-html.js';
import * as dashBoardService from '../services/dashboardService.js';



const editTemplate = (animal, submitHandler) => html `
<section id="editPage">
            <form class="editForm" @submit=${submitHandler} method = 'POST'>
                <img src="./images/editpage-dog.jpg">
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" value=${animal.name}>
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" value=${animal.breed}>
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" value=${animal.age + " years"}>
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" value=${animal.weight + "kg"}>
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" value=${animal.image}>
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>


`;


const dataIsInvalid = (data) => {

    const requiredFields = ["name", "breed", "age","weight", "image"];

    return requiredFields.some(x => !data[x])

}

export const editView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        

        const data = Object.fromEntries(new FormData(e.currentTarget));
        if(dataIsInvalid(data)){
            alert('All fields should be filled!')
            return;
        }

        dashBoardService.edit(ctx.params.animalId, data)
        .then(() => {
            ctx.page.redirect(`/data/pets/${ctx.params.animalId}`)
        })

    }

    dashBoardService.getOne(ctx.params.animalId)
    .then(animal => {
        ctx.render(editTemplate(animal, submitHandler))
    })

}