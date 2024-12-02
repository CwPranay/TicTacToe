import React, { useRef, useState } from 'react'
import "./TicTacToe.css"
import circleIcon from "../assets/circle.png"
import crossIcon from "../assets/cross.png"

let data = ["","","","","","","","",""]
const TicTacToe = () => {
    let [count, setCount] = useState(0)
    let [lock, setLock] = useState(false)
    let titleRef = useRef(null)
    
    let box1= useRef(null)
    let box2= useRef(null)
    let box3= useRef(null)
    let box4= useRef(null)
    let box5= useRef(null)
    let box6= useRef(null)
    let box7= useRef(null)
    let box8= useRef(null)
    let box9= useRef(null)
    let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9]


    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }

        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${crossIcon}'>`;
            data[num] = "x"
            setCount(++count);

        }

        else {
            e.target.innerHTML = `<img src='${circleIcon}'>`;
            data[num] = "o";
            setCount(++count);

        }
        checkWin()

    }
    const checkWin = () => {

        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[5]);
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8]);

        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6]);

        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {

            won(data[7]);

        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {


            won(data[8]);

        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {


            won(data[8]);

        }
        else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {


            won(data[6]);

        }

    }

    const reset =()=>{
        setLock(false);
         data = ["","","","","","","","",""]
         titleRef.current.innerHTML = `Tic <span>Tac</span> Toe`
       box_array.map((e)=>{
        e.current.innerHTML ="";
       })
    }
    
    const won = (winner) => {
        setLock(true);
        if(winner==="x")
        {
            titleRef.current.innerHTML = `Congratulation : <img src=${crossIcon}> Won `
        }
        else{
            {
                titleRef.current.innerHTML = `Congratulation : <img src=${circleIcon}> Won `
            }
        }
    }

    return (
        <div>
            <div className="container">
                <h1 ref={titleRef} className="title ">Tic <span>Tac</span> Toe</h1>
                <div className="game">
                    <div className="row1">
                        <div onClick={(e) => { toggle(e, 0) }} ref={box1}  className="box"></div>
                        <div onClick={(e) => { toggle(e, 1) }} ref={box2} className="box"></div>
                        <div onClick={(e) => { toggle(e, 2) }} ref={box3} className="box"></div>
                    </div>
                    <div className="row2">
                        <div onClick={(e) => { toggle(e, 3) }} ref={box4} className="box"></div>
                        <div onClick={(e) => { toggle(e, 4) }} ref={box5} className="box"></div>
                        <div onClick={(e) => { toggle(e, 5) }} ref={box6} className="box"></div>
                    </div>
                    <div className="row3">
                        <div onClick={(e) => { toggle(e, 6) }} ref={box7} className="box"></div>
                        <div onClick={(e) => { toggle(e, 7) }} ref={box8}  className="box"></div>
                        <div onClick={(e) => { toggle(e, 8) }} ref={box9} className="box"></div>
                    </div>

                </div>
                <button onClick={()=>{reset()}} className="reset">Reset</button>
            </div>
        </div>
    )
}

export default TicTacToe
