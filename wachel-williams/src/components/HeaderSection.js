import SocialMedia from "./SocialMedia";


export default function HeaderSection(){

    return (
        <header>
            <h1 className='home-title h1-large'> Rachel Williams</h1>
            <div style={{padding:'2rem', position:'fixed', right:0, display:'grid', gap:'1rem',}}>
                <SocialMedia />

                 <ul>
                    <li style={{borderBottom:'.2rem solid white',}}>Home</li>
                    <li>Live</li>
                    <li>Media</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>
    )
}