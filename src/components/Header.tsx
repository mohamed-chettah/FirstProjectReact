const Header = ({text,children,className}) => {
    return (
        <header>
            <h1 className={className}>{text}</h1>
            {children}
        </header>
    )
}

export default Header;