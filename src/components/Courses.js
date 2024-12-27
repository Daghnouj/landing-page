const courses = [  
  { name: 'Spring Boot / Angular', price: '350 DT/Month', image: 'spring_angular.jpg' },  
  { name: 'Node JS / React', price: '350 DT/Month', image: 'node_react.jpg' },  
  { name: 'Flutter / Firebase', price: '350 DT/Month', image: 'fl_fi.jpg' },  
  { name: 'Business Intelligence', price: '350 DT/Month', image: 'bi.jpg' },  
  { name: 'Artificial Intelligence', price: '350 DT/Month', image: 'ia.jpg' },  
  { name: 'DevOps', price: '350 DT/Month', image: 'devops.jpg' },  
];  

const Courses = () => {  
  return (  
    <section className="courses py-5" style={{ backgroundColor: '#f9f9f9' }}> {/* Fond gris clair pour la section */}  
      <div className="container">  
        <div className="d-flex justify-content-between mb-4" style={{ marginTop: '20px' }}> {/* Ajout d'un marginTop pour déplacer légèrement vers le bas */}  
          <h3 className="text-black" style={{ fontWeight: 'bold' }}>Discover Our Courses</h3>  
          <button className="btn btn-pink" style={{ borderRadius: '20px', backgroundColor: '#b8407c', color: 'white' }}>View More</button>  
        </div>  
        <div className="row g-4">  
          {courses.map((course, index) => (  
            <div className="col-lg-4 col-md-6 mb-4" key={index}>  
              <div className="card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>  {/* Ombre et bords arrondis */}  
                <img   
                  src={`/${course.image}`}   
                  className="card-img-top"   
                  alt={course.name}   
                  style={{ height: '220px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}  
                />  
                <div className="card-body" style={{ padding: '0.1rem' }}>  
                  <h5 className="card-title" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'black' }}>{course.name}</h5>  
                  <p className="card-text" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#b8407c' }}>{course.price}</p>  
                </div>  
              </div>  
            </div>  
          ))}  
        </div>  
      </div>  
    </section>  
  );  
};  

export default Courses;
