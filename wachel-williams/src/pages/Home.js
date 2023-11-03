import wachelWilliamsPosed from '../wachelWilliamsAssets/wachelPosed.jpg'
import wachelInfo from '../wachelInfo.json'

export default function Home() {

    return (
        <div className='home-page'>
            <div className='home-page-one fullscreen'>
                {/* <p>{wachelInfo.shortBio}</p> */}
            </div>
            <div className='home-remaining-content'>
                <h1 style={{padding:'2rem'}}>Live Shows</h1>
            </div>
        </div>
    )
}

