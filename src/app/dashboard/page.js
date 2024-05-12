import React from 'react'
import styles from '../style.module.css'
import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <div className={styles.section}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Welcome to the Flex2 !</h1>
                            <p>lorem ipsum doller sit amet. lorem ipsum doller sit amet.lorem ipsum doller sit amet.
                                lorem ipsum doller sit amet. lorem ipsum doller sit amet.</p>
                        </div>
                        <div className="col-lg-6 ">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home