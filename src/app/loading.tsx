export default function Loading(){
    const word = "Loading..."

    return(
        <span className="loading-name">
            {
                word.split("").map((word,index)=>
               <span key={index} style={{animationDelay:`${index * 0.2}s`}} className="loading-Latter">
                {word}
               </span> )
            }
        </span>
    )
}