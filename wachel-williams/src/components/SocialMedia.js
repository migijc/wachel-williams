import {BiLogoInstagram, BiLogoTiktok}  from 'react-icons/bi';
import {AiOutlineYoutube} from 'react-icons/ai';

export default function SocialMedia() {

    return (
        <div style={{display:'flex', justifyContent:'center', gap:'1rem', alignItems:'center'}}> 
            <BiLogoInstagram size={'2rem'} />
            <AiOutlineYoutube  size={'2rem'}/>
            <BiLogoTiktok  size={'1.8rem'}/>

        </div>
    )
}