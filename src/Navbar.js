const Navbar=()=>{
    return(
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/" style={{
                    color:"red",
                    backgroundColor:"black",
                    borderRadius:"8px"
                }}>Home</a>
                <a href="/create" style={{
                    color:"green",
                    backgroundColor:"orange",
                    borderRadius:"8px"
                }}>New Blog</a>
            </div>
        </nav>
    );
}
export default Navbar;