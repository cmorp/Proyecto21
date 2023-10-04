import "./Home.css"

function Home() {

    return (
        <div className='m-3 p-3 text-center'>
            <h1 className='m-5 p-3 fw-bold'> Bienvenido a <span>Happy Cake</span></h1>
            <h4>¡El lugar de los pasteles felices!</h4>

            <img src="/src/img/happycake.png" alt="Happy Cake" />
        </div>
    )
}

export default Home;