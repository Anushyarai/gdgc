import { useState } from "react";

import Screen1_Onboarding from "./components/Screen1_Onboarding";
import Screen2_Scoring from "./components/Screen2_Scoring";
import Screen3_Roadmap from "./components/Screen3_Roadmap";

function App() {

    const [currentScreen, setCurrentScreen] = useState(1);

    const [userData, setUserData] = useState(null);

    const handleAnalyze = (data) => {

        setUserData(data);

        setCurrentScreen(2);

    };

    return (

        <div>

            {currentScreen === 1 && (

                <Screen1_Onboarding
                    onAnalyze={handleAnalyze}
                />

            )}

            {currentScreen === 2 && (

                <Screen2_Scoring
                    userData={userData}
                />

            )}

            {currentScreen === 3 && (

                <Screen3_Roadmap
                    userData={userData}
                />

            )}

        </div>

    );

}

export default App;