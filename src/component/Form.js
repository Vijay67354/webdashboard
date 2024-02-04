import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
const Form = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className='Container'>
            <div className='Header '>
                <div className='registerhere  '>
                    <div className=' SignintoXtractionDIrect lg:mt-[140px]'>
                        <motion.div
                            initial={{ opacity: 0, x: -350 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 3 }}
                            className='header leading-[62px]'
                        >
                            <h1 className='xtraction font-poppins  font-semibold text-[#0F1928]'>
                                Sign In to
                            </h1>
                            <h1 className='xtractiondirect font-poppins  font-semibold text-[#0F1928] '>
                                Xtraction Direct
                            </h1>

                            <p className='font-poppins  xtractiondirectaccount'>
                                If you don't have an account
                            </p>

                            <p className='registerhereaccount font-poppins  '>
                                You can <strong className='text-[#339AF0]'>Register here!</strong>
                            </p>

                        </motion.div>
                    </div>
                    <div className='signinllustration'>
                        <motion.div
                            initial={{ opacity: 0, y: -210 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2 }}
                        >
                            <img src='Assets/sign-in.png' alt='Sign In Illustration' className='imgsignin' />
                        </motion.div>
                    </div>
                    <div className='inputfield'>
                        <motion.div
                            initial={{ opacity: 0, x: 90 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 3 }}
                        >
                            <div className="form w-[100px] h-[30px]">

                                <motion.div
                                    className="form-item username"
                                    whileFocus={{ scale: 1.05 }}
                                >
                                    <input type="email" id="Email" autoComplete="off" required />
                                    <label htmlFor="Email" className='email  h-[20px] rounded-[20px]'>Email</label>
                                </motion.div>

                                <motion.div
                                    className="form-item"
                                    style={{ marginTop: '30px', display: 'flex', position: 'relative' }}
                                    whileFocus={{ scale: 1.05 }}
                                >
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        autoComplete="off"
                                        required
                                    />
                                    <label htmlFor="password">Password</label>
                                    <button
                                        id='passwordeye'
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            border: 'none',
                                            background: 'transparent',
                                            cursor: 'pointer',
                                            rounded: '20px'
                                        }}
                                    >
                                        {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                                    </button>
                                </motion.div>

                                <div className='forgetpassword text-right'>
                                    <p className='forgetpass'>Forget Password?</p>
                                </div>
                                <button className='btn rounded-[20px] bg-[#AEAEAE] text-white  hover:bg-[#339AF0]'>Sign In</button>

                                <div className="separator">
                                    <div className="line"></div>
                                    <h2 className='continue text-[#9FA3A9] font-poppins font-normal tracking-widest '>Or Continue With</h2>
                                    <div className="line"></div>
                                </div>

                                <div className='Logo'>
                                    <div>
                                        <img src='assets/Google.png' alt='Google Logo' />
                                    </div>
                                    <div>
                                        <img src='assets/Apple.png' alt='Apple Logo' />
                                    </div>
                                    <div>
                                        <img src='assets/Facebook.png' alt='Facebook Logo' />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Form