const ContactForm = () => {  
    return (  
      <section style={{ padding: '40px 0', backgroundColor: 'white' }}>  
        <div className="container" style={{ backgroundColor: '#FFB347', borderRadius: '38px', padding: '30px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>  
          <h3 className="text-center mb-4" style={{ fontSize: '2rem', fontWeight: 'bold', color: 'black' }}>Contact Us</h3>  
          <form>  
            <div className="mb-3">  
              <label  
                htmlFor="name"  
                className="form-label"  
                style={{ fontSize: '1rem', color: 'black', fontWeight: 'bold', textTransform: 'uppercase' }}  
              >
                Name
              </label>  
              <input  
                type="text"  
                className="form-control"  
                id="name"  
                placeholder="John Doe"  
                style={{ fontSize: '1rem', borderRadius: '30px', padding: '10px 15px', border: 'none' }}  
              />  
            </div>  
            <div className="mb-3">  
              <label  
                htmlFor="email"  
                className="form-label"  
                style={{ fontSize: '1rem', color: 'black', fontWeight: 'bold', textTransform: 'uppercase' }}  
              >
                Email
              </label>  
              <input  
                type="email"  
                className="form-control"  
                id="email"  
                placeholder="example@example.com"  
                style={{ fontSize: '1rem', borderRadius: '20px', padding: '10px 15px', border: 'none' }}  
              />  
            </div>  
            <div className="mb-3">  
              <label  
                htmlFor="message"  
                className="form-label"  
                style={{ fontSize: '1rem', color: 'black', fontWeight: 'bold', textTransform: 'uppercase' }}  
              >
                Message
              </label>  
              <textarea  
                className="form-control"  
                id="message"  
                rows="4"  
                placeholder="Write your message here"  
                style={{ fontSize: '1rem', borderRadius: '20px', padding: '10px 15px', border: 'none' }}  
              ></textarea>  
            </div>  
            <div style={{ textAlign: 'center' }}>  
              <button  
                type="submit"  
                className="btn"  
                style={{ backgroundColor: '#b8407c', color: 'white', fontSize: '1rem', padding: '10px 30px', borderRadius: '10px' }}  
              >  
                Send the message  
              </button>  
            </div>  
          </form>  
        </div>  
      </section>  
    );  
  };  
  
  export default ContactForm;
  