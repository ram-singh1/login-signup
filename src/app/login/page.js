'use client'
import React, { useState } from 'react'
import styles from './login.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'

const LoginPage = ({ onNextStep }) => {
    return (
        <div className={styles.section}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='shadow rounded col-lg-9 bg-white'>
                        <div className='row loginheight'>
                            <div className='col-lg-6 loginbg p-4 d-flex flex-column justify-content-lg-center text-center rounded-start logincard'>
                                <h2>Welcome Back!</h2>
                                <div> <p>Embark on an exciting journey with us by entering your personal details.
                                    Join our community and unlock a world of possibilities.
                                    Your adventure awaits!
                                </p>
                                </div>
                            </div>
                            <div className='col-lg-6 d-flex flex-column justify-content-lg-center'>
                                <div className='p-5'>
                                    {/* <Image
                                        src={logo}
                                        alt="logo"
                                        className='mb-3'
                                    /> */}
                                    <h2>Log in</h2>
                                    <p>Start journey with us</p>
                                    <form action='#'>
                                        <input minLength="3" className='form-control' name="username" id="username" type="text" placeholder='Enter email' required></input><br />
                                        <input minLength="5" className='form-control' name="password" id="password" type="password" placeholder='Enter password' required></input>
                                        <div className='mt-3 row justify-space-between'>
                                            <div className='col-lg-6'><input className="form-check-input" type="checkbox" value="" id="defaultCheck1" /> Remember me</div>
                                            <div className='col-lg-6 text-end'><Link href='' onClick={onNextStep}>Forgot password </Link></div>
                                        </div>
                                        <div className="d-grid gap-2 mt-3">
                                            <button className="btn btn-primary" type="submit">Login</button>
                                        </div>
                                        <div className='mt-3'> <p>If you don,t have account register <Link href='signup'>here</Link></p></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const EmaiVerification = ({ onNextStep }) => {
    return (
        <div className={styles.section}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='shadow rounded col-lg-9 bg-white'>
                        <div className='row loginheight'>
                            <div className='col-lg-6 loginbg p-4 d-flex flex-column justify-content-lg-center text-center rounded-start logincard'>
                                <h2>Welcome Back!</h2>
                                <div> <p>Embark on an exciting journey with us by entering your personal details.
                                    Join our community and unlock a world of possibilities.
                                    Your adventure awaits!
                                </p>
                                </div>
                            </div>
                            <div className='col-lg-6 d-flex flex-column justify-content-lg-center'>
                                <div className='p-5'>
                                    {/* <Image
                                        src={logo}
                                        alt="logo"
                                        className='mb-3'
                                    /> */}
                                    <h2>Reset Password</h2>
                                    <p>Start journey with us</p>
                                    <form action='#'>
                                        <input minLength="3" className='form-control' name="email" id="email" type="text" placeholder='Enter your email' required></input>
                                        <div className="d-grid gap-2 mt-3">
                                            <button className="btn btn-primary" type="submit" onClick={onNextStep}>Submit</button>
                                        </div>
                                        {/* <div className='mt-3'> <p>If you already create login <Link href='login'>here</Link> </p></div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const EmailVerifcationCode = ({ onNextStep }) => {
    return (
        <div className={styles.section}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='shadow rounded col-lg-9 bg-white'>
                        <div className='row loginheight'>
                            <div className='col-lg-6 loginbg p-4 d-flex flex-column justify-content-lg-center text-center rounded-start logincard'>
                                <h2>Welcome Back!</h2>
                                <div> <p>Embark on an exciting journey with us by entering your personal details.
                                    Join our community and unlock a world of possibilities.
                                    Your adventure awaits!
                                </p>
                                </div>
                            </div>
                            <div className='col-lg-6 d-flex flex-column justify-content-lg-center'>
                                <div className='p-5'>
                                    {/* <Image
                                        src={logo}
                                        alt="logo"
                                        className='mb-3'
                                    /> */}
                                    <h2>Verify code</h2>
                                    <p>Start journey with us</p>
                                    <form action='#'>
                                        <input minLength="3" className='form-control' name="code" id="code" type="text" placeholder='Enter code' required></input>
                                        <div className='mt-3 row justify-space-between'>
                                            <div className='col-lg-6'><a href='#' className='mt-3'>Resend code</a></div>
                                            <div className='col-lg-6 text-end'>Resend code in 10s</div>
                                        </div>
                                        <div className="d-grid gap-2 mt-3">
                                            <button className="btn btn-primary" type="submit"><Link href='forgotpassword' className="text-white">Verify</Link></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const UpdateStep = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const getstepcontent = (currentStep) => {
        if (currentStep == 0) {
            return <LoginPage onNextStep={handleNextStep} />
        }
        if (currentStep == 1) {
            return <EmaiVerification onNextStep={handleNextStep} />
        }
        if (currentStep == 2) {
            return <EmailVerifcationCode onNextStep={handleNextStep} />
        }
    }

    return (
        <div>
            {getstepcontent(currentStep)}
            {currentStep > 0 && (
                <button onClick={handlePrevStep}>Previous Step</button>
            )}
        </div>
    );
};

export default UpdateStep;