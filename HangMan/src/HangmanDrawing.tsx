const Head = (
    <div style={{
        width:"50px",
        height:"50px",
        borderRadius:"100%",
        border:"10px solid black",
        position:"absolute",
        top:"50px",
        right:"-30px",
    }}/>
)

const Body = (
    <div style={{
        width:"10px",
        height:"100px",
        background:"black",
        position:"absolute",
        top:"119px",
        right:"0px",
    }}/>
)

const RightArm = (
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"150px",
        right:"-100px",
        rotate:"-30deg",
        transformOrigin:"left bottom"
    }}/>
)

const LeftArm = (
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"150px",
        right:"10px",
        rotate:"30deg",
        transformOrigin:"right bottom"
    }}/>
)

const RightLeg = (
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"210px",
        right:"-90px",
        rotate:"60deg",
        transformOrigin:"left bottom"
    }}/>
)

const LeftLeg = (
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"210px",
        right:0,
        rotate:"-60deg",
        transformOrigin:"right bottom"
    }}/>
)
const Body_Parts = [Head,Body,RightArm,LeftArm,RightLeg,LeftLeg]


type HangmanDrawingProps={
    numberofGuesses : number
}
export default function HangmanDrawing ({numberofGuesses}:HangmanDrawingProps){return(
<div style={{
    position:"relative"
}}> 
    {Body_Parts.slice(0,numberofGuesses)}

    <div style={{height:"50px",width:"10px",background:"black",top:0,right:0,position:"absolute"}}/>     
    {/*SOPORTE*/}
    <div style={{height:"10px",width:"200px",background:"black",marginLeft:"120px"}}/>
    {/*PALO DE ENMEDIO */}
    <div style={{height:"400px",width:"10px",background:"black",marginLeft:"120px"}}/>
    {/*BASE DEL AHORCADO*/}
    <div style={{height:"10px",width:"250px",background:"black"}}/>
    </div>)
}//export principal

