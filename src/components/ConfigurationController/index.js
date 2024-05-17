import ConfigurationContext from '../../context/configurationcontext'

import './index.css'

const ConfigurationController = () {
    <ConfigurationContext.Consumer>
    {value => {
        const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
    } = value
    const onChangeContent = () => {
        onToggleShowContent()
    }
    const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
    }
    const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
    }
    
    return (
        <div className="configuration-controls-container">
        <div className="responsive-controls-container">
        <h1 className="layout-heading">Layout</h1>
        <div className="checkbox-group">
        <div className="checkbox-container">
        <input
        checked={showContent}
        onChange={onChangeContext}
        type="checkbox"
        id="context"
        />
        <label className="label-text" htmlFor="content">
        content
        </label>
        </div>
        <div className="checkbox-container">
        <input
        checked={showLeftNavbar}
        onChange={onChangeLeftNavbar}
        type="checkbox"
        id="leftNavbar"
        />
        <label className="label-text" htmlFor="leftNavbar">
        Left Navbar
        </label>
        </div>
        <div className="checkbox-container">
        <input
        checked={showRightNavbar}
        onChange={onChangeRightNavbar}
        type="checkbox"
        id="righttNavbar"
        />
         <label className="label-text" htmlFor="rightNavbar">
        Right Navbar
        </label>
        </div>
        </div>
        </div>
        </div>
    )
    }}
    
    
    
    </ConfigurationContext.Consumer>
}


export default ConfigurationContoller