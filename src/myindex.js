function work(){

    import React from 'react';
    import ReactDom from 'react-dom';
    import './index.css';

    class FirstComponent extends React.Component{
        render(){
            return(
                <p>Something that's rendered</p>
            );
        }
    }

    ReactDom.render(
        <FirstComponent/>,
        document.getElementById('root')
    )
}