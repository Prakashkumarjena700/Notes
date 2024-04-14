import React from 'react'

import store from '../store'
import { useSnapshot } from 'valtio'

export default function CustomButton({ type, title, handelClick, customStyles }) {

    const snap = useSnapshot(store)

    const gererateStyle = (type) => {
        if (type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: '#fff'
            }
        }
    }

    return (
        <button
            className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
            onClick={handelClick}
            style={gererateStyle(type)}
        >
            {title}
        </button>
    )
}
