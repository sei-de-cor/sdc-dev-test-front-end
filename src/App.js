import './App.css';
import Api from './API'

function App() {
  

  async function loadData(){
    const company_info = await Api.Company.get.info()
  }
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
