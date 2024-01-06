import React from 'react';
import Button from './Button.jsx';

class MyClock extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state = { date: new Date() };
  // }
  state = { 
    date: new Date(),
    locale: 'bn-bd'
  
  };
  componentDidMount(){
   this.clockTimer =  setInterval(()=>{
        this.tick()
    },1000)
  }

  componentWillUnmount(){
    clearInterval(this.clockTimer)
  }

    tick(){
      this.setState({
        date: new Date(),
      })
    }


    handleClick=(locale)=>{
      this.setState({
         locale: locale,
      })
    }

    render(){
      const { date, locale } = this.state
     return (
      <div>
        <h1 className='heading'>
          <span className='subText'>{date.
          toLocaleTimeString(locale)}</span>
        </h1>
        {/* consitional rendering */}
       {locale === 'bn-bd' ? (
         <Button change={this.handleClick} locale='en-us' showText={true}></Button>
       ): ( <Button change={this.handleClick} locale='bn-bd' showText={false}></Button>)}
      </div>

      ) 
    }
  }
  export default MyClock