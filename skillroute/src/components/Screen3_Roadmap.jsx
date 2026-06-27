import "./Screen3_Roadmap.css";

function Screen3_Roadmap({ opportunity }) {

    if (!opportunity) {

        return <h2>No Opportunity Selected</h2>;

    }

    return (

        <div className="roadmap-page">

            <div className="roadmap-card">

                <h1>
                    {opportunity.name}
                </h1>

                <h2>
                    Opportunity Score : {opportunity.score}/100
                </h2>

                <h3>Description</h3>

                    <p>

                        {opportunity.details.description}

                    </p>

                    <h3>Estimated Income</h3>

                    <ul>

                        <li>

                            Month 1 :

                            {opportunity.details.estimatedIncome.month1}

                        </li>

                        <li>

                            Month 3 :

                            {opportunity.details.estimatedIncome.month3}

                        </li>

                        <li>

                            Month 6 :

                            {opportunity.details.estimatedIncome.month6}

                        </li>

                    </ul>

                    <h3>

                        First ₹100 Challenge

                    </h3>

                    <ol>

                            {opportunity.details.first100Challenge.map((step) => (

                                <li key={step}>

                                    {step}

                                </li>

                            ))}

                    </ol>

                    <h3>

                        30-Day Roadmap

                        </h3>

                        <ul>

                            <li>

                                Week 1 :

                                {opportunity.details.roadmap.week1}

                            </li>

                            <li>

                                Week 2 :

                                {opportunity.details.roadmap.week2}

                            </li>

                            <li>

                                Week 3 :

                                {opportunity.details.roadmap.week3}

                            </li>

                            <li>

                                Week 4 :

                                {opportunity.details.roadmap.week4}

                            </li>

                        </ul>

            </div>

        </div>

    );

}

export default Screen3_Roadmap;