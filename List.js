
export default function List()
{
    const flower=["rose","lilly","lotus","jasmin"]
    const resl=flower.map((flow)=><li>{flow}</li>)
    return(
        <div>
            <ul>
                {resl}
            </ul>
        </div>
    )
}