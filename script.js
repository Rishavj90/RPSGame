let human_score = 0, cat_score = 0;
const human_img = document.querySelector(`#human_img`);
const cat_img = document.querySelector(`#cat_img`);
let human_hand = -1, cat_paw = -1;

document.querySelector(`#option_rock`).addEventListener(`click`,()=>{
    human_img.innerHTML = `<img src="./human/1.png">`;
    human_hand = 1;
})

document.querySelector(`#option_paper`).addEventListener(`click`,()=>{
    human_img.innerHTML = `<img src="./human/2.png">`;
    human_hand = 2;
})

document.querySelector(`#option_scissor`).addEventListener(`click`,()=>{
    human_img.innerHTML = `<img src="./human/3.png">`;
    human_hand = 3;
})


document.querySelector(`#submit`).onclick = function(){
    if(human_hand != -1){
        let i = (Math.trunc(Math.random()*10)%3)+1;
        cat_img.innerHTML = `<img src="./cat/${i}.png">`;
        cat_paw = i;
        let arr = [human_hand, cat_paw];
        if(human_hand != cat_paw)calScore(arr);
        document.querySelector(`#ur_score`).textContent = `you : ${human_score}`;
        document.querySelector(`#cat_score`).textContent = `cat : ${cat_score}`;
    }else{
        alert(`select a gesture`);
    }
    
}

function calScore(arr){
    if(checkArr(arr, [1,3])
        || checkArr(arr, [2,1])
        || checkArr(arr, [3,2])
    )human_score++;
    else if(checkArr(arr, [3,1])
        || checkArr(arr, [1,2])
        || checkArr(arr, [2,3])
    )cat_score++;
}

function checkArr(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i]!=arr2[i])return false;
    }
    return true;
}