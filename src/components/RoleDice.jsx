import styled from "styled-components"

const RoleDice = ({roleDice,currentDice}) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`dice/dice_${currentDice}.png`} alt = "dice1"/>

      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
.dice{
    cursor: pointer;

}
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;
p{
font-size:24px;
}

`
