import styled from "styled-components";
import moment from "moment";
import Counter from "./Counter";
// import { events } from "../data";

const EventsSection = () => {
    const event1 = new Date(2022, 6, 30);
    const formattedDate1 = moment(event1).format('MMM Do YY')
    const daysInBetween1 = event1.getTime();

    const event2 = new Date(2022, 7, 3);
    const formattedDate2 = moment(event2).format('MMM Do YY')
    const daysInBetween2 = event2.getTime();

    const event3 = new Date(2022, 7, 10);
    const formattedDate3 = moment(event3).format('MMM Do YY')
    const daysInBetween3 = event3.getTime();
    
    return (
        <EventsOuter>
            <h2>upcoming events</h2>
            <Events>
                <Event>
                    <div className="date">
                        <h3>{formattedDate1}</h3>
                    </div>
                    <p>Centrum scene, nairobi</p>
                    <button>Get tickets</button>
                    <Line />
                </Event>
                <Event>
                    <div className="date">
                        <h3>{formattedDate2}</h3>
                    </div>
                    <p>Carnivore grounds, nairobi</p>
                    <button>Get tickets</button>
                    <Line />
                </Event>
                <Event>
                    <div className="date">
                        <h3>{formattedDate3}</h3>
                    </div>
                    <p>Splash scene (opening act), nairobi</p>
                    <button>Get tickets</button>
                    <Line />
                </Event>
            </Events>
        </EventsOuter>
    )
};

//Styles
const EventsOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-width: 500px; */
  padding: 2rem 0rem;
  h2 {
    padding: 2rem;
  }
`;
const Events = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 3rem;

`;
const Event = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    padding: 1rem 0rem;
    border-bottom: 1px #222 solid;
    @media only screen and (min-width: 600px) {
        flex-direction: row;
    }
    p {
        flex: 3;
        font-size: 1.1rem;
        padding: .5rem;
        text-transform: uppercase;
    }
    button {
        margin: 5px;
        border: none;
        background: #45C4B0;
        transition: all 0.5s ease;
        &:hover {
            background: transparent;
            border: 1px solid #000;
            color: #000;
        }
    }
`;
const Line = styled.div`
    width: 100%;
    height: 1px;
    background: white;
    position: absolute;
    bottom: 0;
`;

export default EventsSection;