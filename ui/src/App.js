import './App.css';

function App() {
  return (
    <div>
      This useless app is currently running on <span className="hostName">{window.location.href.split('/')[2]}</span>. COOLLL!
    </div>
  );
}

export default App;
