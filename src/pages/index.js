import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="TIMU.IO"
                    meta={[
                        { name: 'description', content: 'Timu.io' },
                        { name: 'keywords', content: 'Great Software, Team, Purpose, g' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Timu (Swahili): (noun) team</h3>
                                <p>Team (group of people, especially in a sport) kushinda timu / win the team</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Timu (Māori): (verb) to be ebbing, ebb.</h3>
                                <p>Kua timu te tai, kua kitea ngā kōpua, ngā pokere (TTT 1/9/1928:843). / The tide has ebbed and the deep pools, the holes, are revealed. </p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Timu (Nordic name)</h3>
                                <p>Greenlandic younger spelling of Timo. A boys' name is of Greek derivation, and the name Timo means "God's honor".</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Timu (Esperanto) : imperative of timi </h3>
                                <p>timi (present timas, past timis, future timos, conditional timus, volitive timu) (transitive) to fear - Li timas araneojn! / He is afraid of spiders!</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Timu (Samoan) : (Noun) rain</h3>
                                <p>From Proto-Polynesian *timu, from Proto-Oceanic *timuʀ, from Proto-Malayo-Polynesian *timuʀ, from Proto-Austronesian *timuʀ.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Timu (Japanese): Tim (ティム)</h3>
                                <p>The name Tim in Japanese Katakana is ティム which in romaji is timu. Katakana is the standard translation for names into Japanese, Tim in Japanese Hiragana, the non-standard translation for names into Japanese, is てぃむ.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex