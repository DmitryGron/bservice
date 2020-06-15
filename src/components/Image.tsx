import React, { ComponentProps }  from "react";

const ImageContainer: React.FC<ComponentProps<any>> = ({src, alt, ...props}) => { 
    return(
        <props.component  src={src} alt={alt}/>
    )
};
export default ImageContainer;