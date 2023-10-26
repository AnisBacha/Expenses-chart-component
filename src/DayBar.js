import { useState } from "react"

const DayBar = ({dayBar, biggestAmount}) => {
    /* 20px => 10$
       ?px  => day.amount */    
    const [isHover, setIsHover] = useState(false);
    return (
        <section className={`main__daybar ${dayBar.day}`}>
            <p 
                className={isHover === true ? 'amount showAmount' : `amount hideAmount`}
            >
                ${dayBar.amount}
            </p>
            <div 
                className={`${dayBar.day}-bar bar biggestAmount-${biggestAmount[1] === dayBar.day}`}
                style={{
                    height: `${(20 * Number(dayBar.amount) / 10)}px`,
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                
            ></div>
            <p>{dayBar.day}</p>
        </section>
    )
}

export default DayBar
