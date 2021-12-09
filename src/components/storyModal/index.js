import React, { useState } from 'react'
import FileInput from '../../assets/images/file-input.svg'


const StoryModal = ({ handleClose }) => {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        interact: "",
        message: "",
    });
    const [file, setFile] = useState(null)

    async function onChange(e) {
        const file = e.target.files[0]
        setFile(file)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return (
        <div className="modal fixed shadow-lg bg-white rounded-lg left-1/2 top-1/4 -mt-32 md:w-2/5 sm:w-2/3 w-96 mx-8 sm:mx-0 shadow-2xl">
            <div className="mt-9 mb-5 mx-5">
                <h2 className="font-bold text-center text-2xl">Share your amazing story!</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="form-control">
                        <div className="text-sm mb-1">Upload your picture</div>
                        <label className="flex flex-col px-2 py-3 bg-white rounded-md
                            w-full border border-blue cursor-pointer">
                            <div className="flex justify-between">
                                <span className=" text-base">Choose Image</span>
                                <img src={FileInput} alt="file input" className="w-5" />
                                <input type="file"
                                onChange={onChange} class="hidden" />
                            </div>
                        </label>                        
                    </div>

                    <div className="grid grid-cols-2 gap-4 my-3">
                        <div className="flex flex-col">
                            <label className="text-sm mb-1">First Name</label>
                            <input 
                                type="text"
                                value={user.firstName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded outline-none focus:border-gold-light"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm mb-1">Last Name</label>
                            <input 
                                type="text"
                                value={user.lastName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded outline-none focus:border-gold-light"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm mb-1">Share your story</label>
                        <textarea 
                            type="text"
                            rows="3"
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded outline-none focus:border-gold-light"
                        ></textarea>
                    </div>
                    <div className="flex justify-between my-4">
                        <p className="text-sm">
                            What did you interact with Vasiti as?
                        </p>
                        <div className="text-sm flex">
                            <div className="flex mx-2 items-center">
                                <input 
                                    id="radio1"
                                    type="radio"
                                    onChange={handleChange}
                                    className="border border-gray-300 mr-1 text-gold-light form-radio"
                                />
                                <label for="radio1">Customer</label>
                            </div>
                            <div className="flex items-center">
                                <input 
                                    id="radio2"
                                    type="radio"
                                    onChange={handleChange}
                                    className="border border-gray-300 mr-1 text-gold-light form-radio"
                                />
                                <label for="radio2">Vendor</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm mb-1">City or Higher Institution (for Students)</label>
                        <input 
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded outline-none focus:border-gold-light"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="bg-gold-light text-lg text-white px-8 py-2 mt-6 rounded" onClick={handleClose}>Share your story!</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default StoryModal;