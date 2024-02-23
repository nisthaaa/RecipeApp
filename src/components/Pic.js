import React, {useState, useEffect} from "react";
import { DEFAULT_ECDH_CURVE } from "tls";

function Pic(){
    return(
        <div>
            <img style={{maxHeight: '500px', width:'100%'}}
            src="https://cdn.thewirecutter.com/wp-content/uploads/2017/10/cuttingboards-2x1-fullres-3213-2-1024x512.jpg"/>
        </div>
    )
}

export default Pic 