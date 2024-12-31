// Optional video

class vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na gari chole na')
    }
}

class Bus extends vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);    //super diye parent ta ke nite parbo jeta hocche constructor er parameter
        this.seat = seat;
        this.ticketPrice = ticketPrice;   //this diye nirdisto ta ke nite parbo jeta hocche bus er parameter
    }
    
}



class Truck extends vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }

}

