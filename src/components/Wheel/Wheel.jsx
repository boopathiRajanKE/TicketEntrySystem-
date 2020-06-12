import * as React from "react"
import { TicketGeneratorContext } from "../context"
import "./styles.scss"

function Wheel() {
  const [rotate, setRotate] = React.useState(false)

  const { tickets = [], setInputValue = () => {} } = React.useContext(
    TicketGeneratorContext
  )

  const onWheelClick = React.useCallback(() => {
    setRotate(true)
    setTimeout(() => {
      const randomNumber = Math.round(
        100000 + Math.random() * (999999 - 100000)
      ).toString()

      setInputValue(randomNumber)
      setRotate(false)
    }, 1000)
  }, [])

  return (
    <div className="tg-wheel-wrapper">
      <div className="tg-wheel-text">
        Click the wheel to generate random tickets
      </div>
      <div
        className={`tg-wheel-image-wrapper ${tickets.length > 4 && "hide"}`}
        onClick={onWheelClick}
      >
        <img
          alt="wheel"
          className={`tg-wheel-image ${rotate && "rotate"}`}
          src="/wheel.png"
        />
      </div>
      <div className="tg-wheel-warn">Ticket number range: 100000 - 999999</div>
    </div>
  )
}

export default Wheel
export { Wheel }
