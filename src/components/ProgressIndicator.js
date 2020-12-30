import React from 'react'

const ProgressIndicator = () => {
    const style={
        margin:"7em auto"
    }
    return (
        <>
             <div style={style} className="preloader-wrapper active">
                        <div className="spinner-layer spinner-blue-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div><div className="gap-patch">
                                <div className="circle"></div>
                            </div><div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default ProgressIndicator
