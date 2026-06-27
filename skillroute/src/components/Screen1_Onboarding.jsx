
import "./Screen1_Onboarding.css";

import { useState } from "react";

import { skills } from "../data/skills";
import { assets } from "../data/assets";
import { states } from "../data/states";
import { districts } from "../data/districts";
import { education as educationOptions } from "../data/education";
import { languages as languageOptions } from "../data/languages";

function Screen1_Onboarding({ onAnalyze }) {

    const [name, setName] = useState("");

    const [selectedSkills, setSelectedSkills] = useState([]);

    const [selectedAssets, setSelectedAssets] = useState([]);

    const [state, setState] = useState("");

    const [district, setDistrict] = useState("");

    const [education, setEducation] = useState("");

    const [time, setTime] = useState("");

    const [languages, setLanguages] = useState([]);

    // ---------------- Skill ----------------

    const toggleSkill = (skill) => {

        if (selectedSkills.includes(skill)) {

            setSelectedSkills(
                selectedSkills.filter(item => item !== skill)
            );

        } else {

            setSelectedSkills([
                ...selectedSkills,
                skill
            ]);

        }

    };

    // ---------------- Asset ----------------

    const toggleAsset = (asset) => {

        if (selectedAssets.includes(asset)) {

            setSelectedAssets(
                selectedAssets.filter(item => item !== asset)
            );

        } else {

            setSelectedAssets([
                ...selectedAssets,
                asset
            ]);

        }

    };

    // ---------------- Language ----------------

    const toggleLanguage = (language) => {

        if (languages.includes(language)) {

            setLanguages(
                languages.filter(item => item !== language)
            );

        } else {

            setLanguages([
                ...languages,
                language
            ]);

        }

    };

    // ---------------- Analyze ----------------

    const handleAnalyze = () => {

        if (name.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        if (selectedSkills.length === 0) {
            alert("Please select at least one skill.");
            return;
        }

        if (selectedAssets.length === 0) {
            alert("Please select at least one asset.");
            return;
        }

        if (state === "") {
            alert("Please select your state.");
            return;
        }

        if (district === "") {
            alert("Please select your district.");
            return;
        }

        if (education === "") {
            alert("Please select your education.");
            return;
        }

        if (time === "") {
            alert("Please select your available time.");
            return;
        }

        if (languages.length === 0) {
            alert("Please select at least one language.");
            return;
        }

        onAnalyze({

            name,

            skills: selectedSkills,

            assets: selectedAssets,

            state,

            district,

            education,

            time,

            languages

        });

    };

    return (

        <div className="onboarding-page">

            <div className="onboarding-card">

                <h1 className="title">
                    SkillRoute AI
                </h1>

                <p className="subtitle">
                    Turn Your Skills Into Your Income
                </p>

                <form className="onboarding-form">

                    <div className="form-group">

                        <label>Name</label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                    </div>

                    <div className="form-group">

                        <label>Skills</label>

                        <div className="chip-container">

                            {skills.map((skill) => (

                                <button
                                    key={skill}
                                    type="button"
                                    className={
                                        selectedSkills.includes(skill)
                                            ? "chip active-chip"
                                            : "chip"
                                    }
                                    onClick={() => toggleSkill(skill)}
                                >
                                    {skill}
                                </button>

                            ))}

                        </div>

                    </div>

                    <div className="form-group">

                        <label>Assets</label>

                        <div className="chip-container">

                            {assets.map((asset) => (

                                <button
                                    key={asset}
                                    type="button"
                                    className={
                                        selectedAssets.includes(asset)
                                            ? "chip active-chip"
                                            : "chip"
                                    }
                                    onClick={() => toggleAsset(asset)}
                                >
                                    {asset}
                                </button>

                            ))}

                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label>State</label>

                            <select
                                value={state}
                                onChange={(e) => {
                                    setState(e.target.value);
                                    setDistrict("");
                                }}
                            >

                                <option value="">
                                    Select State
                                </option>

                                {states.map((stateName) => (

                                    <option
                                        key={stateName}
                                        value={stateName}
                                    >
                                        {stateName}
                                    </option>

                                ))}

                            </select>

                        </div>

                        <div className="form-group">

                            <label>District</label>

                            <select
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                            >

                                <option value="">
                                    Select District
                                </option>

                                {(districts[state] || []).map((districtName) => (

                                    <option
                                        key={districtName}
                                        value={districtName}
                                    >
                                        {districtName}
                                    </option>

                                ))}

                            </select>

                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label>Education</label>

                            <select
                                value={education}
                                onChange={(e) => setEducation(e.target.value)}
                            >

                                <option value="">
                                    Select Education
                                </option>

                                {educationOptions.map((item) => (

                                    <option
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </option>

                                ))}

                            </select>

                        </div>

                        <div className="form-group">

                            <label>Available Time</label>

                            <select
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            >

                                <option value="">
                                    Select Hours
                                </option>

                                <option value="1">1 Hour</option>
                                <option value="2">2 Hours</option>
                                <option value="3">3 Hours</option>
                                <option value="4">4 Hours</option>
                                <option value="5">5 Hours</option>
                                <option value="6">6 Hours</option>
                                <option value="7">7 Hours</option>
                                <option value="8">8+ Hours</option>

                            </select>

                        </div>

                    </div>

                    <div className="form-group">

                        <label>Languages</label>

                        <div className="chip-container">

                            {languageOptions.map((language) => (

                                <button
                                    key={language}
                                    type="button"
                                    className={
                                        languages.includes(language)
                                            ? "chip active-chip"
                                            : "chip"
                                    }
                                    onClick={() => toggleLanguage(language)}
                                >
                                    {language}
                                </button>

                            ))}

                        </div>

                    </div>

                    <button
                        type="button"
                        className="analyze-btn"
                        onClick={handleAnalyze}
                    >
                        Analyze My Opportunity
                    </button>

                </form>

            </div>

        </div>

    );

}

export default Screen1_Onboarding;

