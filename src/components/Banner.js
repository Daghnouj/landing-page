const Banner = () => {
    return (
      <div 
        className="banner text-center py-5" 
        style={{ 
          backgroundImage: 'url(/people2.jpg)', 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
          height: '100vh',  
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
        }}
      >
        <div 
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.8)', 
            borderRadius: '1px', 
            padding: '30px', 
            maxWidth: '600px', 
            width: '100%', 
            textAlign: 'center', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
          }}
        >
         <h2 
  style={{ 
    color: '#000',  
    marginBottom: '1rem',  
    fontWeight: 'bold', 
  }}
>
  Improve your skills on your own
</h2>
<p 
  style={{ 
    color: '#000', 
    marginBottom: '1.5rem',  
    fontWeight: 'bold',  
  }}
>
  To prepare for a better future
</p>

          <button 
            style={{ 
              backgroundColor: '#b8407c', 
              borderColor: '#b8407c',
              color: 'white', 
              padding: '10px 20px', 
              fontSize: '16px', 
              textTransform: 'uppercase', 
              borderRadius: '50px', 
              transition: 'background-color 0.3s ease-in-out', 
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#ff3385'} 
            onMouseOut={(e) => e.target.style.backgroundColor = '#b8407c'} 
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    );
  };
  
  export default Banner;
  