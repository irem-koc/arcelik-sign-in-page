import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import logo from "./images/arcelik_logo.png";
import undefined from "./images/undefined_logo.png";
function App() {
    return (
        <div className="App">
            <div className="real_section">
                <div className="top_image">
                    <img
                        width={"30%"}
                        style={{ marginTop: "30px" }}
                        src={logo}
                        alt="arcelik_logo"
                        className="arcelik"
                    />
                </div>
                <div className="image">
                    <img
                        className="undefined"
                        src={undefined}
                        alt="undefined"
                    />
                </div>

                <div className="form-section">
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default App;
