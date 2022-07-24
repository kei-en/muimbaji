import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import Counter from "./Counter";

const EventsSection = () => {
    const eventDate = new Date(2022, 6, 30);
    const formattedDate = moment(eventDate).format('MMM Do YY')
    const daysInBetween = eventDate.getTime();
    
    return (
        <div>
            <h2>upcoming events</h2>
            <div className="events">
                <div className="event">
                    <div className="date">
                        <h3>{formattedDate}</h3>
                    </div>
                    <p>Centrum scene, nairobi</p>
                    <button>Get tickets</button>
                    <Counter targetDate={daysInBetween} />
                </div>
                <div className="event">
                    <div className="date">
                        {/* <h3>{setDate(new Date(2022, 10, 15))}</h3> */}
                    </div>
                    <p>Carnivore grounds, nairobi</p>
                    <button>Get tickets</button>
                    <p>Happening soon!</p>
                </div>
                <div className="event">
                    <div className="date">
                        {/* <h3>{setDate(new Date(2022, 10, 20))}</h3> */}
                    </div>
                    <p>Splash scene (opening act), nairobi</p>
                    <button>Get tickets</button>
                    <p>Happening soon!</p>
                </div>
            </div>
        </div>
    )
};

export default EventsSection;