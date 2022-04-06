

export class Snack {

    constructor(data){
        this.name = data.name || ''
        this.price = data.price 
        this.ammount = data.ammount
    }

    get Template(){
        return /*html*/` 
        <div class="col">
            <div class="card">${this.name} <br> ${this.price}</div>
        </div>`
    }

}