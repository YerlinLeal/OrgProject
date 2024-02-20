import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/yerlin-leal/' target="_blank" rel="noopener noreferrer">
                <img src="/img/linkedin.webp" alt='linkedin'/>
            </a>
        </div>
        <img className="img-logo" src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Yerlin Leal</strong>
    </footer>
}

export default Footer