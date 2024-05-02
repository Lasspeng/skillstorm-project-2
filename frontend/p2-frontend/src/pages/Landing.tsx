import { Grid, GridContainer } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'

export default function Landing() {
    return (
        <>
            <main id="main-content">
                <section className="usa-hero">
                    <GridContainer>
                        <div className="usa-hero__callout">
                            <h1 className="usa-hero__heading">
                                <span className="usa-hero__heading--alt">Hero callout:</span>
                                Bring attention to a project priority
                            </h1>
                            <p>
                                Support the callout with some short explanatory text. You don’t
                                need more than a couple of sentences.
                            </p>
                            <a className="usa-button" href="javascript:void(0)">
                                Call to action
                            </a>
                        </div>
                    </GridContainer>
                </section>

                <section className="grid-container usa-section">
                    <Grid row gap>
                        <Grid tablet={{
                            col: 4
                        }}>
                            <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
                                A tagline highlights your approach
                            </h2>
                        </Grid>
                        <Grid tablet={{
                            col: 8
                        }} className="usa-prose">
                            <p>
                                The tagline should inspire confidence and interest, focusing on
                                the value that your overall approach offers to your audience.
                                Use a heading typeface and keep your tagline to just a few
                                words, and don’t confuse or mystify.
                            </p>
                            <p>
                                Use the right side of the grid to explain the tagline a bit
                                more. What are your goals? How do you do your work? Write in the
                                present tense, and stay brief here. People who are interested
                                can find details on internal pages.
                            </p>
                        </Grid>
                    </Grid>
                </section>
            </main>
        </>
    );
}