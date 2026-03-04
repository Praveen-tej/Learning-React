export default function ProductImage({url,alttext}){
    return (
        <div>
            <img 
            src={url} 
            alt={alttext} 
            width={100} 
            height={100}/>
        </div>
    )
}