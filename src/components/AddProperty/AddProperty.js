import React from 'react'
import "./addproperty.scss"

const AddProperty = () => {
    return (
        <>
            <section className="add-property">
                <div className="row">
                    <div className="col-xl-8 col-12 p-0" >
                        <div className="option-field">
                            <input type="text" placeholder='Property Name' />
                        </div>
                        <div className="option-field">
                            <textarea type="text" placeholder='Property Address' />
                        </div>
                        <div className="option-field">
                            <input type="number" placeholder='Property Price' />
                        </div>
                    </div>
                    <div className="col-xl-4 col-12">
                        <div className="upload-img">
                            <h6>Upload Thumbnail Image</h6>
                            <div className="upload">
                                <img src="\assets\dummy.png" alt="img" className='img-fluid' />
                                <input type="file" className='d-none' id='upload' />
                            </div>
                        </div>
                        <div className="after-upload">
                            <div className="left">
                                <div className="imgs">
                                    <img src="\assets\dummy.png" alt="img" className='img-fluid' />
                                </div>
                                <div className="inner-text">
                                    <h6>landscape.jpg</h6>
                                    <p>2.4mb</p>
                                </div>
                            </div>
                            <div className="right">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M9.69678 20.3027L20.3034 9.69613" stroke="#EAB721" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M20.3034 20.3039L9.69678 9.69727" stroke="#EAB721" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="after-upload process-video">
                            <div className="left">
                                <div className="imgs">
                                    <img src="\assets\dummy.png" alt="img" className='img-fluid' />
                                </div>
                                <div className="inner-text">
                                    <h6>landscape.jpg</h6>
                                    <p>2.4mb</p>
                                </div>
                            </div>
                            <div className="right">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M23 15C23 19.4183 19.4183 23 15 23C10.5817 23 7 19.4183 7 15C7 10.5817 10.5817 7 15 7C19.4183 7 23 10.5817 23 15ZM9.54111 15C9.54111 18.0149 11.9851 20.4589 15 20.4589C18.0149 20.4589 20.4589 18.0149 20.4589 15C20.4589 11.9851 18.0149 9.54111 15 9.54111C11.9851 9.54111 9.54111 11.9851 9.54111 15Z" fill="url(#paint0_angular_77_9851)" />
                                    <defs>
                                        <radialGradient id="paint0_angular_77_9851" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15 15) rotate(90) scale(8)">
                                            <stop stop-color="#EAB721" />
                                            <stop offset="1" stop-color="#EAB721" stop-opacity="0" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddProperty
