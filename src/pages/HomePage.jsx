import HeaderComponent from "../components/HeaderComponent"

function HomePage() {
  const saySomething = () => {
    console.log("Di Algo");
    alert("Ahora");
  }

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div>HomePage</div>
      <hr></hr>
      <button onClick={saySomething}>Pulsame weee</button>
    </>
  )
}

export default HomePage