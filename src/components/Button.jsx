/* eslint-disable react/prop-types */
import React from 'react'

class Button extends React.Component{

    shouldComponentUpdate(nextProps){
        const {change: currentChange, locale: currentLocale} = this.props
        const {change: nextChange, locale: nextLocale} = nextProps

        if(currentChange === nextChange && currentLocale === nextLocale){
            return false
        }else{
            return true
        }
    }

    render(){
        const { change,locale,showText } = this.props
        return(
            <>
            <button type='button' onClick={()=> change(locale) }>
                {locale === 'bn-bd' ? 'change clock' : 'ঘড়ি পরিবর্তন করুন'}
            </button>
           {showText ? <p>Hello</p> : ''}
            </>
        )
    }
}

export default Button