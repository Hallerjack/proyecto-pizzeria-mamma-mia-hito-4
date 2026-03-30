const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <div id='navbar'>
            <div id='left-container'>
                <div id='logo'>
                    <h3>Pizzeria Mamma Mia!</h3>
                </div>
                <div id='nav-buttons'>
                    <button id='profile-button'>🔓 Profile</button>
                    <button id='logout-button'>🔒 Logout</button>
                    <button id='login-button'>🔐 Login</button>
                    <button id='register-button'>🔐 Register</button>
                </div>
            </div>
            <div id='right-container'>
                <div id='nav-total'>
                    <button id='total-button'>🛒 Total: ${total}</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;