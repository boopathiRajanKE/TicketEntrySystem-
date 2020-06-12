import * as React from "react"
import { TicketGeneratorContext } from "../context"
import { deleteIcon, backSpaceIcon, plusIcon } from "../icons"
import "./styles.scss"

const numbers = ["back", 0, "delete", 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse()

function NumberPad() {
  const {
    tickets = [],
    setTicket = () => {},
    inputValue = "",
    setInputValue = () => {},
  } = React.useContext(TicketGeneratorContext)

  const onAddBtnClick = () => {
    if (!tickets.includes(inputValue)) {
      setTicket([...tickets, inputValue])
      setInputValue("")
    }
  }

  const onNumPadClick = (event) => {
    const value = event.currentTarget.getAttribute("value")

    if (value === "delete") {
      setInputValue("")
    } else if (value === "back") {
      setInputValue(inputValue.slice(0, -1))
    } else if (inputValue.length < 6) {
      setInputValue(inputValue + value)
    }
  }

  const renderNumPad = (value, index) => {
    let finalValue

    if (value === "back") {
      finalValue = backSpaceIcon()
    } else if (value === "delete") {
      finalValue = deleteIcon()
    } else {
      finalValue = value
    }
    return (
      <li
        className="tg-key-number"
        value={value}
        onClick={onNumPadClick}
        key={`numberpad-${index}`}
      >
        {finalValue}
      </li>
    )
  }

  return (
    <div className="tg-number-pad-wrapper">
      <div className="tg-input-block">
        <input
          className="tg-input-element"
          onChange={() => true}
          value={inputValue}
          type="number"
          dir="rtl"
        />
        <div className="tg-input-text">Enter 6 Digits</div>
      </div>
      <div className="tg-keyboard-container">
        <ul>{numbers.length > 0 && numbers.map(renderNumPad)}</ul>
      </div>
      <div
        className={`tg-add-ticket ${
          (inputValue.length !== 6 || tickets.length > 4) && "hide"
        }`}
        onClick={onAddBtnClick}
      >
        {plusIcon()} ADD TICKET
      </div>
    </div>
  )
}

export default NumberPad
export { NumberPad }
