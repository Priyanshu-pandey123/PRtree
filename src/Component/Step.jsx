import React from 'react'
import stepCss from "../css/Step.module.css"

const Step = ({ img, step, para }) => {
    return (
        <div
            className="border-2 border-white px-6 py-4 flex flex-col justify-between gap-4 rounded-3xl max-w-[300px] min-h-[300px] box-border"
        >
            <div className="flex items-center justify-between">
                <h2 className="text-white font-dm-sans text-3xl font-bold mt-4">Step {step}</h2>
                <img
                    src={img}
                    alt="icon not found"
                    className="bg-white w-10 h-10 p-2 rounded-full object-cover"
                />
            </div>
            <p className="text-white font-poppins text-lg font-medium leading-6">{para}</p>
        </div>

    )
}

export default Step