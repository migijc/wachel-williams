import wachelsShows from '../shows.json'

export default function NextShows(){
    let showsObj = wachelsShows
    const showsList =  jsonToArray(showsObj)
    console.log(showsList)
    return (
        <div className='shows-container'>
            {showsList.map((item, i) => {
                return (
                    <div key={i} className='show-card'>
                        <div>
                            <p>{item.date}</p>
                        </div>
                        <div>
                            <p>{item.venueName} @ {item.showTime}</p>
                            <p>{item.location}</p>
                        </div>
                        <div style={{display:'flex', justifyContent:'center'}}> 
                            <button>Tickets</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function jsonToArray(file){
    const keys = Object.keys(file);
    let newArr = [];
    keys.map((show, i)=>{
        newArr.push(file[i])
    })

    return newArr
}

