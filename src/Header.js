const Header = () => {
    return (
        <header className='header'>
            <p className='header__balance'>My balance <span className='balance-value'>$921.48</span></p>    
            <img src={require('./images/logo.svg').default} alt='logo'/>
        </header>
    )
}

export default Header
