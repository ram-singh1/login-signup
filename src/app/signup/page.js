'use client'
import React, { useState } from 'react'
import styles from './signup.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'

const Signup = ({ onNextStep }) => {
    return (
        <div className={styles.section}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='shadow rounded col-lg-9 bg-white'>
                        <div className='row'>
                            <div className='col-lg-6 d-flex flex-column justify-content-lg-center'>
                                <div className='p-5'>
                                    {/* <Image
                                        src={logo}
                                        alt="logo"
                                        className='mb-3'
                                    /> */}
                                    <h2>Signup</h2>
                                    <p>Start journey with us</p>
                                    <form action='#'>
                                        <input minLength="3" className='form-control' name="firstname" id="firstname" type="text" placeholder='Enter firstname' required></input><br />
                                        <input minLength="5" className='form-control' name="lastname" id="lastname" type="text" placeholder='Enter lastname' required></input><br />
                                        <input minLength="5" className='form-control' name="email" id="email" type="text" placeholder='Enter your email' required></input><br />
                                        <input minLength="5" className='form-control' name="mobile" id="mobile" type="text" placeholder='Enter mobile number' required></input><br />
                                        <input minLength="5" className='form-control' name="password" id="password" type="password" placeholder='Enter password' required></input>
                                        <div className='mt-3'><a href='#' className='mt-3'><input className="form-check-input" type="checkbox" value="" id="defaultCheck1" /> agree terms & conditions</a></div>
                                        <div className="d-grid gap-2 mt-3">
                                            <button className="btn btn-primary" type="submit" onClick={onNextStep} >Signup</button>
                                        </div>
                                        <div className='mt-3'> <p>If you have account login <Link href='login'>here</Link></p></div>
                                    </form>
                                </div>
                            </div>
                            <div className='col-lg-6 loginbg p-4 d-flex flex-column justify-content-lg-center text-center rounded-start logincard'>
                                <h2>Welcome Back!</h2>
                                <div> <p>Embark on an exciting journey with us by entering your personal details.
                                    Join our community and unlock a world of possibilities.
                                    Your adventure awaits!
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const EmailVerify = ({ onNextStep }) => {
    return (
        <div className={styles.section}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='shadow rounded col-lg-9 bg-white'>
                        <div className='row loginheight'>
                            <div className='col-lg-6 d-flex flex-column justify-content-lg-center'>
                                <div className='p-5'>
                                    {/* <Image
                                        src={logo}
                                        alt="logo"
                                        className='mb-3'
                                    /> */}
                                    <h2>Verify Email</h2>
                                    <p>Start journey with us</p>
                                    <form action='#'>
                                        <input minLength="3" className='form-control' name="code" id="code" type="text" placeholder='Enter code' required></input>
                                        <div className='mt-3 row justify-space-between'>
                                            <div className='col-lg-6'><a href='#' className='mt-3'>Resend code</a></div>
                                            <div className='col-lg-6 text-end'>Resend code in 10s</div>
                                        </div>
                                        <div className="d-grid gap-2 mt-3">
                                            <button className="btn btn-primary" type="submit" onClick={onNextStep}>Verify</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='col-lg-6 loginbg p-4 d-flex flex-column justify-content-lg-center text-center rounded-start logincard'>
                                <h2>Welcome Back!</h2>
                                <div> <p>Embark on an exciting journey with us by entering your personal details.
                                    Join our community and unlock a world of possibilities.
                                    Your adventure awaits!
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MobileNumberVerify = ({ onNextStep }) => {
    return (
        <div className={styles.section}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='shadow rounded col-lg-9 bg-white'>
                        <div className='row loginheight'>
                            <div className='col-lg-6 d-flex flex-column justify-content-lg-center'>
                                <div className='p-5'>
                                    {/* <Image
                                        src={logo}
                                        alt="logo"
                                        className='mb-3'
                                    /> */}
                                    <h2>Verify mobile number</h2>
                                    <p>Start journey with us</p>
                                    <form action='#'>
                                        <input minLength="3" className='form-control' name="code" id="code" type="text" placeholder='Enter code' required></input>
                                        <div className='mt-3 row justify-space-between'>
                                            <div className='col-lg-6'><a href='#' className='mt-3'>Resend code</a></div>
                                            <div className='col-lg-6 text-end'>Resend code in 10s</div>
                                        </div>
                                        <div className="d-grid gap-2 mt-3">
                                            <button className="btn btn-primary" type="submit"><Link href='dashboard' className="text-white">Verify</Link></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='col-lg-6 loginbg p-4 d-flex flex-column justify-content-lg-center text-center rounded-start logincard'>
                                <h2>Welcome Back!</h2>
                                <div> <p>Embark on an exciting journey with us by entering your personal details.
                                    Join our community and unlock a world of possibilities.
                                    Your adventure awaits!
                                </p>
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
            return <Signup onNextStep={handleNextStep} />
        }
        if (currentStep == 1) {
            return <EmailVerify onNextStep={handleNextStep} />
        }
        if (currentStep == 2) {
            return <MobileNumberVerify onNextStep={handleNextStep} />
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