import Food from './modules/food'

let food=new Food()

food.randerFoof()





// let snake:HTMLElement=document.getElementById("snake") as HTMLElement
document.addEventListener('keydown',handleKeyDown)

enum Direction{
    UP="ArrowUp",
    DOWN="ArrowDown",
    LEFT="ArrowLeft",
    RIGHT="ArrowRight",
}

function handleKeyDown(e:KeyboardEvent):void{
    console.log(e);
    switch(e.key){
        case Direction.UP :
            let snake:HTMLElement=document.getElementById("snake") as HTMLElement
            console.log(snake);
            let top:any=(snake.style.top).split('px')[0] 
            snake.style.top=top-10+ 'px'
            break;

            case Direction.DOWN :
            break;

            case Direction.LEFT :
            break;

            case Direction.RIGHT :
            break;

    }
}

