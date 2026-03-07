import Ticketnum from "./Ticketnum.jsx"
import "./Ticket.css"

export default function Ticket({ num }) {

    return (
        <div className="ticket">
            {
                num.map((nums, index) => (
                    <Ticketnum num={nums} key={index}/>
                ))
            }
        </div>
    )
}