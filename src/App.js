import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card} from './Card.jsx';

function App() {
  return (
    <>
   <div className="container-sm">
    
      <div className="row my-3">
          <Card imgageUrl="https://picsum.photos/seed/picsum/200/300"/>
          <Card imgageUrl="https://picsum.photos/200/300?grayscale"/>
          <Card imgageUrl="https://picsum.photos/id/870/200/300?grayscale&blur=2"/>
          
      </div>


   </div>
    </>
  );

}

export default App;
