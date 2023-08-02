import React from "react";

import {Button as ContainerButton} from './styles'
function Button({children,...props}){
    console.log(props);
return <ContainerButton {...props}>{children}</ContainerButton>

}

export default Button