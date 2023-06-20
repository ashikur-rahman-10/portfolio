import { TypeAnimation } from "react-type-animation";
import "./App.css";

function App() {
    return (
        <>
            <div>
                <h1>Md.Ashikur Rahman</h1>
                <p className="text-3xl">
                    <TypeAnimation
                        sequence={[
                            "I'm Web Developer",
                            2000,
                            "I'm Frontend Developer",
                            2000,
                        ]}
                        speed={1}
                        omitDeletionAnimation={true}
                        // style={{ fontSize: "2em" }}
                        repeat={Infinity}
                    />
                </p>
            </div>
        </>
    );
}

export default App;
