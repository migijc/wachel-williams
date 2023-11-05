import wachelWilliamsPosed from '../wachelWilliamsAssets/wachelPosed.jpg'
import wachelPosedTransparent from '../wachelWilliamsAssets/wachelPosedTransparent.png'
import wachelStraightTransparent from '../wachelWilliamsAssets/wachelStraightTransparent.png'
import wachelInfo from '../wachelInfo.json'
import NextShows from '../components/NextShows'
import "@fontsource/ibm-plex-sans/200.css"; 
import logoTest from '../wachelWilliamsAssets/logoTest.jpeg'
import logoTestTransparent from '../wachelWilliamsAssets/logoTest.png'
import ContactForm from '../components/ContactForm'
// import InstagramFeed from '../components/InstagramFeed'

export default function Home() {

    return (
        <div className='home-page'>
             <div className='home-one'>
                <div className='home-one-content'>
                    <HomeOneTitle />
                    <p style={{position:'absolute', right: '2rem', bottom:'2rem', color:'#00000073', fontWeight:600}}>@wachelrilliams</p>
                    <div className='home-image-container'>
                            <img src={wachelPosedTransparent}/>
                    </div>
                </div>
            </div>
            <div style={{height:'100%', position:'absolute', width:'100%', top:'100%', padding:'3rem', display:'grid', background:'var(--main-dark)'}}>
                <h1>Live Shows</h1>
                <NextShows />
            </div>
            <div  style={{gridAutoRows:'1fr 5fr',height:'100%', position:'absolute', width:'100%', top:'200%', padding:'3rem', display:'grid', background:'var(--main-dark)', alignContent:'flex-start'}}>
                <div style={{ height:'fit-content'}}>
                    <h1>Contact Me</h1>
                </div>
                <div style={{padding:'2rem', borderRadius:'.5rem', width:'50%', justifySelf:'center', height:'100%'}}>
                    <ContactForm />
                </div>
            </div> 
        </div>
    );
};


function HomeOneTitle(){
    
    return (
        <div className='home-one-title'>
            <h1 style={{fontSize:'1em'}}>Rachel Williams</h1>
            <h2 style={{fontSize:'.15em', position:'relative', left:'15%'}}>COMEDIAN | ACTRESS | PODCASTER</h2>
        </div>
    );
};
