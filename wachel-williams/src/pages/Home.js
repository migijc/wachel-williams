import wachelWilliamsPosed from '../wachelWilliamsAssets/wachelPosed.jpg'
import wachelInfo from '../wachelInfo.json'
import NextShows from '../components/NextShows'

export default function Home() {

    return (
        <div className='home-page'>
            <div className='home-page-one fullscreen'>
                <div style={{maxWidth:'35%', display:'grid', textAlign:'center', gap:'2rem', color:'#222222'}}>
                    <p style={{lineHeight:'1.8rem'}}>{wachelInfo.shortBio}</p>
                    <div style={{width:'100%'}}>
                        <button style={{width:'100%', padding:'1rem', appearance:'none', border:'none', borderRadius:'900rem', fontWeight:600, color:'var(--main-dark)'}}>Watch Me Live</button>
                    </div>
                </div>
            </div>
            <div className='home-remaining-content'>
                <div style={{flex:1, height:'100%', display:'grid', alignItems:'center'}}>
                    <h1>Live Shows</h1>
                    <NextShows/>
                </div>

            </div>
        </div>
    )
}

