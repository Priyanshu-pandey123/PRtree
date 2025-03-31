

import React from 'react';
import contactCss from '../css/contact.module.css';
import { MdWifiCalling3 } from 'react-icons/md';
import { FaEnvelope, FaTwitter, FaInstagramSquare, FaFacebookF } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
    const bestData = ['Influencer', 'E-commerce', 'Agency', 'Others'];

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const naviget = useNavigate()

    // Function to handle form submission
    const onSubmit = (data) => {
        ('Form Data:', data);
        toast.success('Thanks for Contacting Us');
        setTimeout(() => {
            naviget("/");
        }, 500);


    };

    return (
        <div className={contactCss.main}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className={contactCss.header}>
                        <h2 className={contactCss.head}>Contact Us</h2>
                        <p className={contactCss.para}>Any question or remarks? Just write us a message!</p>
                    </div>
                    <div className={contactCss.formMain}>
                        <div className={contactCss.formLeft}>
                            <div className={contactCss.formHeadMain}>
                                <h2 className={contactCss.formHead}>Contact Information</h2>
                                <p className={contactCss.formPara}>Say something to start a live chat!</p>
                            </div>
                            <div className={contactCss.formData}>
                                <div className={contactCss.iconMsg}>
                                    <div className={contactCss.icon}>
                                        <MdWifiCalling3 className={contactCss.IconColor} />
                                    </div>
                                    <div className={contactCss.msg}> +91-72178 27243 </div>
                                </div>
                                <div className={contactCss.iconMsg}>
                                    <div className={contactCss.icon}>
                                        <FaEnvelope className={contactCss.IconColor} />
                                    </div>
                                    <div className={contactCss.msg}> support@wtispace.com </div>
                                </div>
                                <div className={contactCss.iconMsg}>
                                    <div className={contactCss.icon}>
                                        <IoLocationSharp className={contactCss.IconColor} />
                                    </div>
                                    <div className={contactCss.msg}> H 140, Sector 63, Noida, Uttar Pradesh 201301 </div>
                                </div>
                            </div>
                            <div className={contactCss.formLeftFooter}>
                                <Link className={contactCss.iconCircle}>
                                    <FaTwitter className={contactCss.IconColor1} />
                                </Link>

                                <Link className={contactCss.iconCircle}>
                                    <FaInstagramSquare className={contactCss.IconColor1} />
                                </Link>
                                <Link className={contactCss.iconCircle}>
                                    <FaFacebookF className={contactCss.IconColor1} />
                                </Link>
                            </div>
                            <div className={contactCss.circle1}></div>
                            <div className={contactCss.circle}></div>
                            <div></div>
                        </div>

                        <div className={contactCss.formRight}>
                            <div>
                                <div className={contactCss.inputContainer}>
                                    <div className={contactCss.inputBoxContainer}>
                                        <label className={contactCss.label}>Your Name</label>
                                        <input
                                            {...register('name', { required: 'Name is required' })}
                                            type="text"
                                            className={contactCss.inputBox}
                                        />
                                        {errors.name && <p className={contactCss.errorMsg}>{errors.name.message}</p>}
                                    </div>
                                    <div className={contactCss.inputBoxContainer}>
                                        <label className={contactCss.label}>Company</label>
                                        <input
                                            {...register('company', { required: 'Company is required' })}
                                            type="text"
                                            className={contactCss.inputBox}
                                        />
                                        {errors.company && <p className={contactCss.errorMsg}>{errors.company.message}</p>}
                                    </div>
                                </div>
                                <div className={contactCss.inputContainer}>
                                    <div className={contactCss.inputBoxContainer}>
                                        <label className={contactCss.label}>Email</label>
                                        <input
                                            {...register('email', { required: 'Email is required' })}
                                            type="email"
                                            className={contactCss.inputBox}
                                        />
                                        {errors.email && <p className={contactCss.errorMsg}>{errors.email.message}</p>}
                                    </div>
                                    <div className={contactCss.inputBoxContainer}>
                                        <label className={contactCss.label}>Number</label>
                                        <input
                                            {...register('number', { required: 'Number is required' })}
                                            type="text"
                                            className={contactCss.inputBox}
                                        />
                                        {errors.number && <p className={contactCss.errorMsg}>{errors.number.message}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className={contactCss.radioSection}>
                                <h2 className={contactCss.radioHead}>What describes you the best?</h2>
                                <div className={contactCss.radioInputMain}>
                                    {bestData.map((val, index) => (
                                        <div key={index} className={contactCss.radioInput}>
                                            <input
                                                type="radio"
                                                value={val}
                                                {...register('category', { required: true })}
                                                className={contactCss.radioCircle}
                                            />
                                            <label className={contactCss.radioText}>{val}</label>
                                        </div>
                                    ))}
                                    {errors.category && <p className={contactCss.errorMsg}>This field is required.</p>}
                                </div>
                            </div>
                            <div className={contactCss.messageContainer}>
                                <label className={contactCss.messageLabel}>Message</label>
                                <input
                                    {...register('message')}
                                    type="text"
                                    placeholder="Write your message.."
                                    className={contactCss.messageInput}
                                />
                            </div>
                            <div className={contactCss.term}>
                                <input
                                    {...register('term', { required: 'You must agree to the terms' })}
                                    type="checkbox"
                                    value="agree"
                                    className={contactCss.termBox}
                                />
                                <p className={contactCss.termPara}>
                                    By registering, you confirm that you agree to the storing and processing of your personal data by WTI Space as described in our{' '}
                                    <Link className={contactCss.link} to="/privacy-policies">
                                        Privacy Policy
                                    </Link>
                                    .
                                </p>
                                {errors.term && <p className={contactCss.errorMsg}>{errors.term.message}</p>}
                            </div>
                            <div className={contactCss.btnContainer}>
                                <button type="submit" className={contactCss.submitButton}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Contact;