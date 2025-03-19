import React from 'react';
import Menu from './Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="bg-home d-flex justify-content-center align-items-center text-white" style={{
      backgroundImage: "url('/img/aquila2.jpg')",

      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
    }}>
      <div className="text-center">
        <h1>Benvenuti nella Home</h1>
        <Menu />
      </div>
    </div>
  );
};

export default Home;
