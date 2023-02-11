import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Alhamdulillah everything working very nice</h2>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src='https://i.ibb.co/FqWkMvh/download.jpg' alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
