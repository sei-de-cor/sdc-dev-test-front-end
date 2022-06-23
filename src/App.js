import './App.css';
import Api from './API'
import { useEffect, useState } from 'react';

function App() {
  const [compania, setCompania] = useState(Array);

  const [categorias, setCategorias] = useState(Array);

  const [cursos, setCursos] = useState(Array);

  const [carregado, setCarregado] = useState(Boolean);

  async function loadData(){
    const company_info = await Api.Company.get.info()
    const categorias = await Api.Categories.get.info();
    const cursos = await Api.Cursos.get.info();
    setCompania(company_info);
    setCategorias(categorias);
    setCursos(cursos);
    if (company_info && categorias && cursos) {
      setCarregado(true);
    }
    console.log(company_info);
    console.log(cursos);
    console.log(categorias);
  }

  useEffect(() => {
    loadData();
  });

  function clickColuna() {
    
    console.log("Clickado");
  }

  function renderTableData() {
    return categorias.map((categorias, index) => {
       const { id, name } = categorias
       return (
        
          <tr key={id}>
           
             <td>{id}</td>
             <td>{name}</td>
          </tr>
       )
    })  
 }
 function rendertabledata2(){
  return cursos.map((cursos, index) => {
    const {id, name} = cursos
    return (
     
      <tr key={id}>
        
        <td>{id}</td>
        <td>{name}</td>
      </tr>
    )
  })
} 


document.body.style.backgroundColor = "LightGray";
  return (
    
    <div className="App">
      {carregado ? (
        <div align='center'>
        <h1 id='title'>Categorias</h1>
        <tr>
        <p style={{color: compania.main_color}}>{compania.name}</p>
        </tr>
        
        <table border="1px" width="467"  bgcolor="lightblue"  align='center'>
        <caption>Categoria Cursos</caption>
           <tbody>
             
              {renderTableData()}
              
             
           </tbody>
           
           
        </table>
        <table width="467" border="1px" align='center' bgcolor="lightblue" >
        <caption>Cursos</caption>
  <tbody>

           {rendertabledata2()}
  </tbody>

</table>
<table width="467" border="1px" >
 
</table>
     </div>
      ) : (
        <p>Carregando</p>
      )}
    </div>
  );
}

export default App;