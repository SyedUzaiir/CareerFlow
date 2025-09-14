import React from 'react';
import { assets } from "../assets/assets";

const PlacedStudents = () => {
  
  const successStories = [
    {
      id: 1,
      name: 'Priya Sharma',
      description: 'Placed at Google as a Software Engineer',
      imageUrl: assets.girl1, 
    },
    {
      id: 2,
      name: 'Rohan Verma',
      description: 'Joined Microsoft as a Product Manager',
      imageUrl: assets.boy1,
    },
    {
      id: 3,
      name: 'Anjali Mehta',
      description: 'Hired by Amazon as a Data Scientist',
      imageUrl: assets.girl2,
    },
    {
      id: 4,
      name: 'Vikram Singh',
      description: 'Now a UI/UX Designer at Adobe',
      imageUrl: assets.boy2,
    },
    {
      id: 5,
      name: 'Sneha Reddy',
      description: 'Working at Netflix as a DevOps Engineer',
      imageUrl: assets.girl3,
    },
    {
      id: 6,
      name: 'Aditya Rao',
      description: 'Secured a role at Meta as a Systems Analyst',
      imageUrl: assets.boy3,
    },
  ];


  const styles = {
    container: {
      fontFamily: `'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
      padding: '40px 20px',
      backgroundColor: '#f4f7f6',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '40px',
      color: '#2c3e50',
      fontWeight: '600',
    },
    grid: {
      display: 'grid',
      
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    image: {
      width: '100%',
      height: '280px',
      objectFit: 'cover',
    },
    cardContent: {
      padding: '25px',
    },
    name: {
      margin: '0 0 10px 0',
      fontSize: '1.4rem',
      color: '#34495e',
    },
    description: {
      margin: '0',
      fontSize: '1rem',
      color: '#7f8c8d',
      lineHeight: '1.5',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Success Stories 🎉</h2>
      <div style={styles.grid}>
        {successStories.map((person) => (
          <div 
            key={person.id} 
            style={styles.card}
            // Simple hover effect managed with JavaScript events
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            }}
          >
            
            <img src={person.imageUrl} alt={person.name} style={styles.image} />
            <div style={styles.cardContent}>
              <h3 style={styles.name}>{person.name}</h3>
              <p style={styles.description}>{person.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacedStudents;