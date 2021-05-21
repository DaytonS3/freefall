import React from 'react'
import image from '../images/home-trans.png'
import emailjs from 'emailjs-com';




class Footer extends React.Component{
    
    sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8nay5fx', 'template_95loram', e.target, 'user_7LqYoIj0HcA9VaZNbz3EP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    

    render(){
        return(
        <div id="text_div center_all">
            <div className="center_all_text">
            <p className="homeHeader">GO FREEFALL</p>
            <p className="homeText">Modernizing The Skydive Industy</p>
            <div className="buff"></div>
            </div>

            <div className="center_all">
            <img className="homeImage" src={image} alt="LOGO"/>
            </div>

            <div className="center_all_input">
            <p className="formText">Want to be first to know when we're ready?</p>
            <form autocomplete="off" className="formContainer" onSubmit={this.sendEmail}> 
                <div className="form__group field">
                    <input className="form__field" name="email" />
                </div>
                <input className="formBtn" type="submit" value="SUBSCRIBE" placeholder="email"/>
            </form>
            
            </div>
            
        </div>
        )
    }
    
  }

export default Footer;