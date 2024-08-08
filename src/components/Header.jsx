function Header(){
    return (
        <header className="todo_header">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={40}
                height={40}
                fill="#fff"
                strokeLinecap="round"
                stroke="#000000"
                strokeWidth="2"
            >
                <path 
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    fillRule="nonzero"
                />
                <polyline points="22,6 12,13 2,6"/>
            </svg>
            <h1>TODO</h1>
        </header>
    );
}

export default Header;