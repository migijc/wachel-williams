

export default function ContactForm() {

    return (
        <form>
            <div style={{textAlign:'center'}}>
                <h2>Whether you want to book her for a hilarious stand-up performance, discuss a collaboration, or simply share your thoughts, this is your gateway to laughter and entertainment. Drop us a line, and let's bring humor to your world!</h2>
            </div>
            <div> 
                <input placeholder="Full Name"/>
            </div>
            <div>
                 <input placeholder="Company"/>
            </div>

            <div>
                <input placeholder="Subject"/>
            </div>
            <div style={{height:'100%'}}>
                <textarea placeholder="Message"/>
            </div>
            <div className="form-button-container">
                <button>Send Message</button>
            </div>
        </form>
    )
}