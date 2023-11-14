import style from './Keyboard.module.css'

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "."
  ];

  type Keyboardprops={
    activeLetters : string[]
    inactiveLetters : string[]
    addGuessedLetters: (Letter:string) => void 
  }

export default function Keyboard ({activeLetters, inactiveLetters, addGuessedLetters}:Keyboardprops){
return(
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(75px,1fr))",gap:"0.5rem"}}> 
        {
            KEYS.map(
                key => {
                    const isActive : boolean= activeLetters.includes(key)
                    const isInactive : boolean = inactiveLetters.includes(key)
                    return(
                        <button className={`${style.btn} ${isActive ? style.active : ""} ${ isInactive ? style.inactive : ""}`}
                         key={key}
                         onClick={() => addGuessedLetters(key)}
                         disabled={isInactive || isActive}>
                            {key}
                        </button>
                    )
                }
            )
        }

    </div>
)}
