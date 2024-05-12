'use client'
import React, { useState } from 'react'
import styles from '../login/login.module.css'
import Link from 'next/link'
import Alert from 'react-bootstrap/Alert';
import Image from 'next/image'
import logo from '../../../public/images/logo.png'

const ForgotPassword = () => {
    const [show, setShow] = useState(true);

    return (
        <div className={styles.section}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-3 position-absolute top-0'>
                        <Alert variant="primary" onClose={() => setShow(false)} dismissible show={show}>
                            <Alert.Heading>Password created</Alert.Heading>
                            <p>
                                Your new password created succesfully !
                            </p>
                        </Alert>
                    </div>
                </div>
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
                                    <Image
                                        src={logo}
                                        alt="logo"
                                        className='mb-3'
                                    />
                                    <h2>Create new password</h2>
                                    <p>Start journey with us</p>
                                    <form action='#'>
                                        <input minLength="3" className='form-control' name="password" id="password" type="password" placeholder='New password' required></input><br />
                                        <input minLength="5" className='form-control' name="confirmpassword" id="confirmpassword" type="confirmpassword" placeholder='Confirm password' required></input>
                                        <div className="d-grid gap-2 mt-3">
                                            <button className="btn btn-primary" type="submit" onClick={() => setShow(true)}>Submit</button>
                                        </div>
                                        <div className='mt-3'> <p>If you already create login <Link href='login'>here</Link> </p></div>
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

export default ForgotPassword

