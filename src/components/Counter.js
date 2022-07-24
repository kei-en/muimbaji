import React from "react";
import useCountdown from "../hooks/useCountdown";
import styled from "styled-components";

const Counter = ({targetDate}) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if(days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />
    } else {
        return (
            <ShowCounter 
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        )
    }
};

const ExpiredNotice = () => {
    return (
        <Expired>
            <span>Out of time!</span>
        </Expired>
    )
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <CounterStyle>
            <a
                href="https://tapasadhikary.com"
                target="_blank"
                rel="noopener noreferrer"
                className="countdown-link"
            >
                <DateTimeDisplay value={days} type='Days' isDanger={days<=3} />
                <p>:</p>
                <DateTimeDisplay value={hours} type='Hours' isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={minutes} type='Minutes' isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={seconds} type='Seconds' isDanger={false} />
            </a>
        </CounterStyle>
    )
};

const DateTimeDisplay = ({ value, type, isDanger}) => {
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    )
};

//Styles
const Expired = styled.div`
    text-align: center;
    padding: 2rem;
    border: 1px solid #ebebeb;
    border-radius: 0.25rem;
    margin: 0.5rem;
    span {
        font-size: 2.5rem;
    font-weight: bold;
    color: red;
    }
    p {
        font-size: 1.5rem;
    }
`;
const CounterStyle = styled.div`
    padding: 0.5rem;
    .countdown-link {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.75rem;
        padding: 0.5rem;
        border: 1px solid #ebebeb;
        border-radius: 0.25rem;
        text-decoration: none;
        color: #000;
    }
    .countdown {
        line-height: 1.25rem;
        padding: 0 0.75rem 0 0.75rem;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .countdown.danger {
        color: #ff0000;
    }
    .countdown > p {
        margin: 0;
    }
    .countdown > span {
        text-transform: uppercase;
        font-size: 0.75rem;
        line-height: 1rem;
    }
`;

export default Counter;