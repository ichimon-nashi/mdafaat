// function App() {
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [email, setEmail] = useState("");

//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
//                 <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }

const Login = ({ loggedIn, email }) => {
    const navigate = useNavigate();
    
    const onButtonClick = () => {
        //pending update
    }

    return (
        <div className="mainContainer">
            <div className="titleContainer">
                <div>Welcome!</div>   
            </div>
            <div>This is the login page.</div>
            <div className="buttonContainer">
                <input
                    className="inputButton"
                    type="button"
                    onClick={onButtonClick}
                    value={loggedIn ? "Log out" : "Log in"}
                />
                {loggedIn ? <div>Your email address is {email}</div> : <div />}
            </div>
        </div>
    )
}

export default Login