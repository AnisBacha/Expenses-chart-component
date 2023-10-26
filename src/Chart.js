import { useEffect, useState } from 'react';
import DayBar from './DayBar';
const Chart = () => {
    const [data, setData] = useState(
        [
            {
              day: "mon",
              amount: 17.45
            },
            {
              day: "tue",
              amount: 34.91
            },
            {
              day: "wed",
              amount: 52.36
            },
            {
              day: "thu",
              amount: 31.07
            },
            {
              day: "fri",
              amount: 23.39
            },
            {
              day: "sat",
              amount: 43.28
            },
            {
              day: "sun",
              amount: 25.48
            }
          ]
    )
    const [biggestAmount, setBiggestAmount] = useState([0, 'day']);
    useEffect(() => {
        
    }, [])
    const findeBiggestAmount = () => {
        data.map(day => {
            Number(day.amount) > Number(biggestAmount[0]) && setBiggestAmount([day.amount, day.day])
        })
    }
    findeBiggestAmount();
    return (
        <main className='main'>
            <h2 className='main__h2'>Spending - Last 7 days</h2>
            <section className="main__chart">
                {data.map( dayBar => (
                    <DayBar 
                        dayBar={dayBar} 
                        biggestAmount={biggestAmount} 
                        key={dayBar.day}
                    />
                ))}
            </section>
            <hr></hr>
            <section className='main__monthly-usage'>
                <p className='current-month'>Total this month <span className='current-value'>$478.33</span></p>
                <p className='previous-month'><span className='previous-percentage'>+2.4%</span> from last month</p>
            </section>
            
        </main>
    )
}

export default Chart
