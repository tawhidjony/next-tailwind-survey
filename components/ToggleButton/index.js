import React from 'react'
import styles  from './index.module.css'

const ToggleButton = () => {
    return (
        <div className="flex justify-center">
        <label htmlFor="toogleButton" className="flex items-center cursor-pointer">
          <div className="px-2">Toggle me</div>
         
          <div className="relative">
            <input id="toogleButton" type="checkbox" checked className="hidden" />
            <div className={`bg-gray-200 w-9 h-5 rounded-full shadow-inner ${styles.togglePath }`} />
            <div className={`absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0 ${styles.toggleCircle}`} />
          </div>
        </label>
      </div>
    )
}

export default ToggleButton
