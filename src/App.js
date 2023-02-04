import './App.css';
import Nav from './components/Nav';
import Products from './components/Products';
import LoginControl from './components/LoginControl';
function App() {
  function Home(){ return <h2>Это главная страница </h2>; }
  function About(){ return <h2>О Нас</h2>; }
  function NotFound(){return <h2>Такого нетю   :3</h2>; }
  function Phone(){return <h1>Айпхфоне</h1>}
  function XBOX(){return <h1>Икс бокес сериес</h1>}
  function PL(){return <h1>Плейстейшан файве</h1>}
  function User(){
 const[name,setName]=React.useState('Simen')
 const nameRef = React.useRef(name)

 
 React.useEffect(()=>{
  document.title = name
  nameRef.current=name
 }, [name])

 React.useEffect(()=>{
  const userName = localStorage.getItem('username')
  if(userName!== null){
      setName(userName)
      console.log('Отлично')
  }
  return()=>{
      console.log(nameRef.current)
      localStorage.setItem('userName', nameRef.current)
      console.log('Сохранено!')
  }
 }, [])
 function changeName(event){
  setName(event.target.value)
 }
 const unmount = ()=> ShadowRoot.unmount();
 return(
  <div>
      <input value={name} onChange={changeName} placeholder='Введите имя'/>
  </div>
 )
}    
  render(
    <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={ <About />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/XBOX" element={<XBOX />} />
            <Route path="/PL" element={<PL />} />
            <Route path='/User' element={<User/>}/>
            <Route path='/LoginControl' element={<LoginControl/>}/>
           </Routes>
        </div>
    </Router>
);
  }
export default App;
