import { useState } from "react";
import { Generateno, sum } from "./helper";
import Tickets from "./Ticket.jsx"


export default function Lottery({ winningno, winningsum }) {

    let [Ticket, setTicket] = useState(Generateno(winningno));
    let iswinning = false;

    const buyticket = () => {
        setTicket(Generateno(winningno));
    }

    if (sum(Ticket) === winningsum) {
        iswinning = true;
    };

    return (
        <div className="num">

            <h2>Lottery Game</h2>

            <Tickets num={Ticket} />

            <h3>Sum = {sum(Ticket)}</h3>

            <button onClick={buyticket}>
                Generate No.
            </button>

            <h3>{iswinning ? "Congratulations! You Won the Lottery" : ""}</h3>

        </div>
    )
}