export default function List2()
{
    const flower=["rose","lilly","lotus","jasmin"]
    const resl=flower.map((flow,index)=><li key={index}=><li key={index}>{index}=> {flow}</li>)
    return(
        <div>
            <ul>
                {resl}
            </ul>
        </div>
    )
}
