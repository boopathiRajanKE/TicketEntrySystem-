import * as React from "react"
import { TicketGeneratorContext } from "../context"
import { deleteIcon } from "../icons"
import "./styles.scss"

function TicketList() {
  const { tickets = [], setTicket = () => {} } = React.useContext(
    TicketGeneratorContext
  )

  const onDelete = (event) => {
    const ticketId = event.currentTarget.getAttribute("ticket")

    setTicket(tickets.filter((item) => item !== ticketId))
  }

  const renderTickets = (ticket, index) => {
    return (
      <div key={`ticket-item-${index}`} className="tg-ticket-block">
        <div className="tg-ticket-key">{`Ticket #${index + 1}`}</div>
        <div className="tg-ticket-content">
          {ticket.split("").map((item, index) => (
            <span key={`ticket-letter-${index}`}>{item}</span>
          ))}
        </div>
        <div className="tg-ticket-delete" ticket={ticket} onClick={onDelete}>
          {deleteIcon()}
        </div>
      </div>
    )
  }

  return (
    <div className="tg-ticket-list-wrapper">
      {tickets.length > 0 ? (
        <div>
          <div className="tg-ticket-list-title">Your Selected Tickets:</div>
          <div className="tg-tickets">{tickets.map(renderTickets)}</div>
        </div>
      ) : (
        <div className="tg-no-tickets">No Tickets Selected !!!</div>
      )}
    </div>
  )
}
export default TicketList
export { TicketList }
