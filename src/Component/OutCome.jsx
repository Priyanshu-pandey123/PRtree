import React from 'react'
import style from "../css/OutCome.module.css";
import NumberText from './NumberText';


const OutCome = () => {

    return (
        <div className='lg:px-[150px] lg:py-11  flex flex-col items-center '>
            <h2 className={style.OutComeHead}><span className={style.OutComeHeadColor}>OUTCOME -</span>OUR NUMBERS<br />
                SAY IT ALL</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
                <NumberText number='15000+' text='ARTICLES PUBLISHED' />
                <NumberText number='250+' text='MEDIA PUBLICATIONS' />
                <NumberText number='3000+' text='CLIENTS SERVED' />
                <NumberText number='10+' text='SERVICES IN OFFERING' />
                <NumberText number='100%' text='ASSURED COVERAGES' />
                <NumberText number='24+' text='HOURS QUICK TURNAROUND TIME' />
            </div>

        </div>
    )
}

export default OutCome