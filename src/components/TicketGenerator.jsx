import * as React from "react"
import { NumberPad } from "./NumberPad"
import { TicketList } from "./TicketList"
import { Wheel } from "./Wheel"
import { TicketGeneratorContext } from "./context"
import "./styles.scss"

function TicketGenerator() {
  const [tickets, setTicket] = React.useState(["123456"])
  const [inputValue, setInputValue] = React.useState("")
  const contextProps = {
    tickets,
    setTicket,
    inputValue,
    setInputValue,
  }
  return (
    <TicketGeneratorContext.Provider value={contextProps}>
      <div className="tg-main-wrapper">
        <div className="tg-primary-block">
          <NumberPad />
          <Wheel />
        </div>
        <div className="tg-secondary-block">
          <TicketList />
        </div>
      </div>
    </TicketGeneratorContext.Provider>
  )
}

export default TicketGenerator
export { TicketGenerator }
